# INSTALLATION

1. Install node : https://nodejs.org/en/download/
2. Install web pack globally from command line "npm install --g webpack"
3. Install react through NPM
	- npm install --save react react-dom 
	- npm install --save-dev @types/react @types/react-dom
4. Install babel through NPM
	- npm install --save-dev webpack (babel-loader needs this)
	- npm install --save-dev babel-core
	- npm install --save-dev babel-loader
	- npm install --save-dev babel-preset-es2015-native-modules
	- npm install --save-dev babel-preset-react
5. Install Lodash (the new underscore-esq library)
	- npm install --save Lodash
	- npm install --save-dev @types/lodash
6. Install webpack-dev-server 
	- npm install --save webpack-dev-server  -g
7. Install on-build-webpack (to unlink files on build)
	- npm install --save-dev on-build-webpack
8. Install webpack-merge 
    - npm install webpack-merge -g
	- npm install webpack-merge --save
9. Install webpack-merge 
    - npm install webpack -g
	- npm install webpack --save		
10. Install SASS loaders
    - npm install --save-dev css-loader
    - npm install --save-dev node-sass	
    - npm install --save-dev sass-loader	
	- npm install --save-dev extract-text-webpack-plugin
11. Install JQuery
    - npm install --save jquery 
	- npm install --save-dev @types/jquery 
12. Install bootstrap
    - npm install bootstrap --save
	- npm install react-bootstrap --save
	- npm install url-loader
	- npm install file-loader
	- npm install --save react-bootstrap
13. Install html plugin
    - npm install --save-dev html-webpack-plugin
14. Install RxJs
	- npm install --save rx
	- npm install --save-dev @types/rx



# RUNNING IT ALL

from command line "webpack" or if you want specific environment use command lines below

DEVELOP
webpack -d --config webpack.develop.js

PROD
webpack --config webpack.production.js







# WHAT DOES IT DEMONSTRATE

- TypeScript loader
- Using react with TypeScript
- Using typings for JS libraries through NPM
- Creating an image bundle
- Create a less/sass bundle
- ES6 modules
- Babel
- SourceMap
- JS script hashing for bundles
- Html plugin to insert CSS/Scripts into template html page
- Production webpack vs develop webpack
- How to get around strip-loader loader issues with WebPack2 to remove things like console.log(..)
  where we use Uglify to the job instead


  REACT NOTES

  1. creating objects

Attempt 1

	import { Hello, Foo, HelloProps } from "./components/Hello";
	let foo = new Foo(12);
	let helloProps = {
		compiler: "someCompilerXX",
		framework: "someFramework",
		foo: foo
	};

	let HelloComponent = React.createElement(Hello, helloProps, null)

	ReactDOM.render(
		//React.createElement(Hello, helloProps, null),
		HelloComponent,
		document.getElementById('example')
	);

Attempt 2

	import { Hello, Foo, HelloProps } from "./components/Hello";
	let foo = new Foo(12);
	let helloProps = {
		compiler: "someCompilerXX",
		framework: "someFramework",
		foo: foo
	};

	ReactDOM.render(
		React.createElement(Hello, helloProps, null),
		document.getElementById('example')
	);

Attempt 3

	import { Hello, Foo, HelloProps } from "./components/Hello";
	let foo = new Foo(12);

	ReactDOM.render(
		<div id="div1">
			<Hello compiler="TypeScript" framework="React" foo={foo} />
		</div>,
		document.getElementById("example")
	);
