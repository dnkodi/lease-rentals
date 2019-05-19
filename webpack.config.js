const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const jsRule = {
    test: /\.js$/,
    loader: "babel-loader",
    include: [
        path.join(__dirname, "src")
    ],
    options: {
        cacheDirectory: true
    }
}

const scssRule =  {
    test: /\.[s]?css$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                modules: true,
                minimize: true,
                sourceMap: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
        },
        { loader: "postcss-loader"},
	    { loader: "sass-loader" }
    ],
    exclude: [/node_modules/]
}

const unscopedCssRule = {
    test: /\.[s]?css$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                minimize: true,
                sourceMap: true
            }
        },
        { loader: "postcss-loader"},
        { loader: "sass-loader" }
    ],
    include: [/node_modules/]
}

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "src")
    },
    mode: "development",
    module: {
        rules: [
            jsRule,
            scssRule,
            unscopedCssRule,
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=image/svg+xml" },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff" }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "styles.css"
        })
    ],
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true
    }
}
