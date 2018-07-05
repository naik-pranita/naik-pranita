var PATH = require('path');
var webpack = require('webpack');

var baseSrcPath = PATH.resolve(__dirname + '/src');
var outputPath = PATH.resolve(__dirname + '/public/');

module.exports = {
	entry: {
		app: ['babel-polyfill', PATH.join(baseSrcPath + '/App.js')]
	},
	output: {
		filename: '[name].bundle.js',
		path: PATH.join(outputPath + '/build/')
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'common.vendor.js',
			minChunks: function(module) {
				return (
					module.context && module.context.includes('node_modules')
				);
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					compact: true
				}
			},
			{
				test: /\.(s*)css$/,
				exclude: /node_modules/,
				loaders: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.es6']
	}
};
