var path = require("path");
var webpack = require("webpack");

var config = {
	context: path.resolve(__dirname, 'app'), 
	entry: "./index.js", 
	output: {
		path: __dirname + "/app", 
		filename: "bundle.js"
	}, 
	resolve: { 
		extensions: ['', '.js', '.jsx','.css'], 
		modulesDirectories: [
          'node_modules'
        ]    
	}, 
	plugins: [
		new webpack.DefinePlugin({
			ON_TEST: process.env.NODE_ENV === "test"
		})
	], 
	module: {
		loaders: [
			//{test: /\.js$/, loader: "babel",query: {presets: ['react', 'es2015']}, exclude: /node_modules/},
			{test: /\.js$/, loader: "ng-annotate!babel?presets[]=es2015", exclude: /node_modules/},
			{test: /\.html$/, loader: "raw", exclude: /node_modules/},
			{test: /\.css$/, loader: "style!css!resolve-url", exclude: /node_modules/},
			{test: /\.scss$/, loader: "style!css!sass-loader!resolve-url", exclude: /node_modules/}
		]
	}
}

if(process.env.NODE_ENV == "production") {
	config.output.path = __dirname + "/dist"; 
	config.plugins.push(new webpack.optimize.UglifyJsPlugin());
	config.devtool = "source-map";
}
module.exports = config;