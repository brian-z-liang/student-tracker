const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
	module: {
  	rules: [
    // compile JSX, com
    	{
      	test: /\.jsx?/,
      	exclude: /node_modules/,
      	use: {
        	loader: 'babel-loader',
        	options: {
          	presets: ['@babel/preset-env', '@babel/preset-react'],
        	},
      	},
    	},
  	],
	},
	devServer: {
    publicPath: '/build/',
    port: 8080,
    proxy: {
      '/api/leaders': 'http://localhost:3000',
    }
  }
};
