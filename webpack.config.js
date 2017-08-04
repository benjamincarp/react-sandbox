const { resolve } = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: resolve(__dirname, 'src'),

	entry: [
		'react-hot-loader/patch',
		// activate HMR for React

		'webpack-dev-server/client?http://localhost:8080',
		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint

		'webpack/hot/only-dev-server',
		// bundle the client for hot reloading
		// only- means to only hot reload for successful updates

		'./index.jsx'
		// the entry point of our app
	],
	output: {
		filename: 'index.js',
		// the output bundle

		path: resolve(__dirname, 'dist/app'),

		publicPath: '/'
		// necessary for HMR to know where to load the hot update chunks
	},

	devtool: 'inline-source-map',

	devServer: {
		historyApiFallback: true,

		hot: true,
		// enable HMR on the server

		contentBase: resolve(__dirname, 'dist/app'),
		// match the output path

		publicPath: '/'
		// match the output `publicPath`
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [ 'babel-loader', ],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader?modules', ],
			},
			{
				test: /\.(png|jpg|gif|ico)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			}
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally

		new webpack.NamedModulesPlugin(),
		// prints more readable module names in the browser console on HMR updates

		new CopyWebpackPlugin([
			{from: 'index.html', to:'index.html'},
			// {from: 'favicon.ico', to:'favicon.ico'},
			// {from: 'assets', to:'assets'},
			{from: 'styles/style.css', to:'styles/style.css'}
		],{copyUnmodified: true})
	],
};