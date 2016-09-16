var webpack = require('webpack');
var contentBaseRef = "./dev",
    isHot = true,
    isInline = true;
if(process.env.NODE_ENV == "production") {
  contentBaseRef = "./prod";
}
if(process.env.npm_lifecycle_event == "dev" || process.env.npm_lifecycle_event == "prod") {
  isHot = false;
  isInline = false;
}
var devServer = function(options) {
  return {
    devServer: {
		contentBase: contentBaseRef,
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: false,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: isHot,
      inline: isInline,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: options.host, // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
}

module.exports = devServer;