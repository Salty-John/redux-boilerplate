const webpack = require("webpack");

module.exports = {
	entry: [
       "./src/index.js"
	],
	
	module: {
		rules: [
		    {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ["babel-loader"]
            },
            {
              test: /\.css/,
              exclude: /node_modules/,
              use: ["css-loader", "style-loader"]	
            }
	    ],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".css"]
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./dist"
	}
};
