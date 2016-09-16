var webpack = require('webpack');
var path = require('path');

var commonConfig = {
	context: path.resolve(__dirname, 'app/components/app'),
	//entry: "./app.js",
	entry: path.resolve(__dirname, './app/components/app/app.js'),
	//entry: ['webpack/hot/only-dev-server', path.resolve(__dirname, './app/components/app/app.js')], // this will serve the content only and only in HMR mode
	/*entry: [
		'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./app.js'
	],*/
	output: {
		path: __dirname + "/dev",
		filename: "bundle.js", 
		publicPath: '/',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
	}, 
	resolve: {
		fallback: path.join(__dirname, "node_modules"),
		extensions: ['', '.js', '.jsx','.css'],
		modulesDirectories: [
          'node_modules'
        ]    
	},
	resolveLoader: {
		fallback: path.join(__dirname, "node_modules")
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
			{test: /\.scss$/, loader: "style!css!sass-loader!resolve-url", exclude: /node_modules/},
			{test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader'}
		]
	}
}
if(process.env.npm_lifecycle_event != "prod") {
	commonConfig.devtool = "source-map";
}
if(process.env.NODE_ENV == "production") {
	commonConfig.output.path = __dirname + "/prod";
	commonConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
	//commonConfig.entry = path.resolve(__dirname, './app/components/app/app.js');
}
module.exports = commonConfig;