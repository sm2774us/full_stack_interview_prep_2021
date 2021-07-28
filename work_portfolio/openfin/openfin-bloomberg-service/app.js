'use strict';
const express = require('express');
const path = require('path');
const url = require('url');
const runtime = require('hadouken-js-adapter');

const runtimeVersion = '11.69.42.29';

(async function () {
    // Start the Express Server  
    var app = express();
    var port = process.env.PORT || 1337;
    var siteRoot = `http://localhost:${port}/`;

    app.set('port', port);

    // Modify manifest file contents for local debugging
    app.use('/bloomberg-service/demo/app.json', (req, res) => {
        var appConfig = require('./demo/app.json');

        appConfig.runtime.version = runtimeVersion;
        appConfig.startup_app.url = url.resolve(siteRoot, url.parse(appConfig.startup_app.url).path);
        appConfig.services[0].manifestUrl = url.resolve(siteRoot, url.parse(appConfig.services[0].manifestUrl).path);

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(appConfig, null, 2));
    });

    app.use('/bloomberg-service/provider/app.json', (req, res) => {
        var appConfig = require('./provider/app.json');

        appConfig.startup_app.autoShow = true;
        appConfig.startup_app.url = url.resolve(siteRoot, url.parse(appConfig.startup_app.url).path);
        appConfig.appAssets[0].src = url.resolve(siteRoot, url.parse(appConfig.appAssets[0].src).path);
        appConfig.appAssets[0].args = `--debug${(process.argv.includes('mock') ? ' --mock' : '')}`;

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(appConfig, null, 2));
    });

    app.use('/bloomberg-service', express.static(__dirname));
    

    await new Promise(resolve => {
        var server = app.listen(app.get('port'), function () {
            console.log('Express server listening on port ' + server.address().port);
            resolve();
        });
    });

    // Connect to OpenFin and Launch
    var fin = await runtime.connect({
        uuid: 'bloomberg-demo-launcher',
        runtime: {
            version: runtimeVersion
        }
    });
    console.log('Connected to the OpenFin Runtime');

    var demoAppManifestUrl = `${siteRoot}bloomberg-service/demo/app.json`;
    console.log('Launching ', demoAppManifestUrl);

    var demoApp = await fin.Application.startFromManifest(demoAppManifestUrl);
    console.log('Demo application Running');

    demoApp.addListener('closed', () => { process.exit(); });
})();