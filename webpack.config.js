const dev = process.env.NODE_ENV !== "production";
const path = require("path");


var config = {
    mode: dev ? "development" : "production",
    context: path.join(__dirname, "src"),
    devtool: dev ? "none" : "source-map",
    entry: {
        app: "./client.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            "api_source": __dirname + "/api/",
            "component_source": __dirname + "/src/components",
            "page_source": path.join(__dirname, "/src/pages"),
            "action_source": __dirname + "/src/actions",
            "reducer_source": __dirname + "/src/reducers",
            "root_source": __dirname + "/src",
        }
    }
};

module.exports = config;