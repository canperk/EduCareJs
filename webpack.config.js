var glob = require("glob");
var webpack = require("webpack");
module.exports = {
    entry: {
        myPages: glob.sync('./Scripts/Development/**/*.js')
    },
    output: {
        path: __dirname,
        filename: "./Scripts/dist/ec.js"
    },
    module: {
        loaders: []
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};