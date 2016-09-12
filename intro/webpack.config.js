var path = require('path');
var merge = require('webpack-merge');
var validate = require('webpack-validator');

var parts = require('./parts');
var common = require("./common");
var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
	case 'build':
		config = merge(common, {});
		break;
	case 'HMRCLI':
		config = merge(common, {});
		break;
	case 'dev':
		config = merge(common, {});
		break;
	default:
		config = merge(
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

module.exports = validate(config);