var path = require('path');
var merge = require('webpack-merge');
var validate = require('webpack-validator');

var parts = require('./parts');
var common = require("./common");
var config;
var fse = require('fs-extra');
var folderPath = "./dev";
if(process.env.NODE_ENV == "production") {
	folderPath = "./prod";
}

function copyAssets() {
	// create assets folder
	try{
		fse.ensureDirSync(folderPath+'/assets')
		console.log("assets folder created success!");
	} catch (err) {
		console.error("assets folder created error : "+err);
	}

	// create API folder
	try{
		fse.ensureDirSync(folderPath+'/API')
		console.log("API folder created success!");
	} catch (err) {
		console.error("API folder created error : "+err);
	}

	// copy index.html
	try {
		fse.copySync('./app/index.html', folderPath+'/index.html');
		console.log("index.html file copy success!");
	} catch (err) {
		console.error("index.html file copy error : "+err);
	}

	// copy API
	try {
		fse.copySync('./app/API', folderPath+'/API');
		console.log("API folder copy success!");
	} catch (err) {
		console.error("API folder copy error : "+err);
	}

	// copy assets
	try {
		fse.copySync('./app/assets', folderPath+'/assets');
		console.log("assets folder copy success!");
	} catch (err) {
		console.error("assets folder copy error : "+err);
	}

}
function startDevServerConfig() {
	return merge(
		common,
		parts({
			// Customize host/port here if needed
			//host: process.env.HOST,
			//port: process.env.PORT
			host: "localhost",
			port: 8080
		})
	);
}

copyAssets();

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
	case 'dev':
		config = merge(common, {});
		break;
	case 'prod':
		config = merge(common, {});
		break;
	case 'HMRCLI':
		config = merge(common, {});
		break;

	// Hot module replacement apply for all except dev and prod command
	case 'start':
		config = startDevServerConfig();
		break;
	case 'start-dev':
		config = startDevServerConfig();
		break;
	case 'start-prod':
		config = startDevServerConfig();
		break;
	default:
		config = merge(common, {});

}

module.exports = validate(config);