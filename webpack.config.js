const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    favicon: './src/assets/favicon.ico',
    inject: 'body'
});

module.exports = {
    context: __dirname,
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // comment this entry when  build for production
        'webpack/hot/only-dev-server', // comment this entry when  build for production
        APP_DIR + '/index.jsx'
    ],
    output: {
        publicPath: '/',
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 8080
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ["env", "react"] }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: {
                                import: false,
                                sourceMaps: true
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                sourceMaps: true
                            }
                        }]
                })
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.json$/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.svg(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/svg+xml'
                    }
                }
            },
            {
                test: /\.(jpg|jpe?g|png|gif)(\?.*)?$/,
                exclude: [/\.inline\.svg$/],
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 8192,
                        name: "[name].[hash].[ext]"
                    }
                }
            },
            {
                test: /\.(eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        publicPath: "/",
                        outputPath: "assets/fonts/"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less', '.json'],
        modules: ['node_modules']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        // new UglifyJsPlugin(), for production server only
        HtmlWebpackPluginConfig
    ]
};
