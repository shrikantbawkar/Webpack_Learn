var webpack = require('webpack');
var path = require('path');

var commonConfig = {
	context: path.resolve(__dirname, 'app'), 
	//entry: "./index.js", 
	//entry: ['webpack/hot/only-dev-server', path.resolve(__dirname, './app/index.js')],
	entry: [
  'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
  'webpack/hot/only-dev-server',
  './'
],
	output: {
		path: __dirname + "/app", 
		filename: "bundle.js", 
		publicPath: '/',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
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
	commonConfig.output.path = __dirname + "/dist"; 
	commonConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
	commonConfig.devtool = "source-map";
}
module.exports = commonConfig;