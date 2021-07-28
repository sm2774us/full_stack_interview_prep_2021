let _ = require('lodash');
let webpack = require('webpack');
let path = require('path');
let fs = require("fs");
let WebpackOnBuildPlugin = require('on-build-webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let babelOptions = {
    "presets": ["es2015", "react"]
};

function isVendor(module) {
    return module.context && module.context.indexOf('node_modules') !== -1;
}

let entries = {
    index: './src/index.tsx',
    indexCss: './scss/index.scss'

};

//build it to the Play Framework public folder, which is services by the assets controller
let buildDir = path.resolve(__dirname, '../public/dist');

module.exports = {

    context: __dirname,

    entry: entries,

    output: {
        filename: '[name].bundle.[hash].js',
        path: buildDir,
		//this is to make it play nice with the Play Framework Assets controllers
		//that deals with static data
		publicPath: '/assets/dist'
    },

    // these break for node 5.3+ when building WS stuff
    node: {
        fs: 'empty'
    },

    watch: true,

    devServer: {
        open: true, // to open the local server in browser
        contentBase: __dirname,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },

    plugins: [

        //The ProvidePlugin makes a module available as a variable in every other
        //module required by webpack
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        // creates a common vendor js file for libraries in node_modules
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: function (module, count) {
                return isVendor(module);
            }
        }),

        // creates a common vendor js file for libraries in node_modules
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            chunks: _.keys(entries),
            minChunks: function (module, count) {
                return !isVendor(module) && count > 1;
            }
        }),


        //will unlink unused files on a build
        //http://stackoverflow.com/questions/40370749/how-to-remove-old-files-from-the-build-dir-when-webpack-watch
        new WebpackOnBuildPlugin(function (stats) {
            const newlyCreatedAssets = stats.compilation.assets;

            const unlinked = [];
            fs.readdir(path.resolve(buildDir), (err, files) => {
                files.forEach(file => {
                    if (file != "fonts") {
                        if (!newlyCreatedAssets[file]) {
                            fs.unlink(path.resolve(buildDir + '\\' + file));
                            unlinked.push(file);
                        }
                    }
                });
                if (unlinked.length > 0) {
                    console.log('Removed old assets: ', unlinked);
                }
            })
        }),

        //scss/sass files extracted to common css bundle
        new ExtractTextPlugin({
            filename: '[name].bundle.[hash].css',
            allChunks: true,
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html',
        })
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader' 1st 
            // then 'babel-loader'
            // NOTE : loaders run right to left (think of them as a cmd line pipe)
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                  {
                      loader: 'babel-loader',
                      options: babelOptions
                  },
                  {
                      loader: 'awesome-typescript-loader'
                  }
                ]
            },


            // All files with a .css extenson will be handled by 'css-loader'
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader?importLoaders=1']),
            },

            // All files with a .scss|.sass extenson will be handled by 'sass-loader'
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },


            // All files with a '.js' extension will be handled by 'babel-loader'.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                  {
                      loader: 'babel-loader',
                      options: babelOptions
                  }
                ]
            },

            { 
                test: /\.png$/, 
                loader: "url-loader?limit=100000" 
            },
      
            { 
                test: /\.jpg$/, 
                loader: "file-loader" 
            },

            {
                test: /\.woff(\?.*)?$/,
                loader: 'url-loader?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
            },

            {
                test: /\.woff2(\?.*)?$/,
                loader: 'url-loader?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2'
            },

            {
                test: /\.ttf(\?.*)?$/,
                loader: 'url-loader?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
            },

            {
                test: /\.eot(\?.*)?$/, loader: 'file-loader?prefix=fonts/&name=fonts/[name].[ext]'
            },

            {
                test: /\.svg(\?.*)?$/,
                loader: 'url-loader?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};