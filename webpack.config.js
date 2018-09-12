const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebfontPlugin = require("webfont-webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entryPlus = require('webpack-entry-plus');
const glob = require('glob');

const entryFiles = [
    {
        entryFiles: [`bootstrap-loader/lib/bootstrap.loader?extractStyles&configFilePath=${__dirname}/bootstraprc.yml!bootstrap-loader/no-op.js`],
        outputName: 'base'
    },
    {
      entryFiles: glob.sync('./Views/Shared/Components/**/*.js'),
      outputName(item) {
        return item.replace('Views/Shared/Components/', '').split('.').slice(0, -1).join('.').split('/').slice(1,-1).join('').toLowerCase();
      }
    }
  ];

module.exports = {
    mode: 'development',
    entry: entryPlus(entryFiles),
    output: {
        path: path.resolve(__dirname, 'Assets'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    resolve: {
		extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
		alias: {
            "App": path.resolve(__dirname, 'App'),
            "Styles": path.resolve(__dirname, 'App/scss'),
            "Plugins": path.resolve(__dirname, 'App/scss/plugins')
		}
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader?name=/images/[name].[ext]'
        },{
            test: /\.js$/,
            //exclude: /(node_modules)/,
            exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(scss)$/,
            use: [
                {
                    loader: 'style-loader',
                }, 
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        minimize: true,
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader'
                },
                {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: ['./App/scss/settings/_settings.scss', './App/scss/helpers/mixins/_mixins.scss']
                    }
                }
            ]
        },
        // Bootstrap 4
        {
            test: /bootstrap\/dist\/js\/umd\//, 
            use: 'imports-loader?jQuery=jquery'
        },
        // Font Definitions
        {
            test: /\.svg?(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader",
                options: {
                  limit: 100000,
                  mimetype: "image/svg+xml", 
                  name: "/fonts/[name].[ext]"
                }
            }
        },
        {
            test: /\.woff?(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader",
                options: {
                  limit: 100000,
                  mimetype: "application/font-woff",
                  name: "/fonts/[name].[ext]"
                }
            }
        },
        {
            test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader",
                options: {
                  limit: 100000,
                  mimetype: "application/font-woff",
                  name: "/fonts/[name].[ext]"
                }
            }
        },
        {
            test: /\.ttf?(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader",
                options: {
                  limit: 100000,
                  mimetype: "application/octet-stream",
                  name: "/fonts/[name].[ext]"
                }
            }
        },
        {
            test: /\.eot?(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader",
                options: {
                  limit: 100000,
                  mimetype: "application/vnd.ms-fontobject",
                  name: "/fonts/[name].[ext]"
                }
            }
        }]
    },
    optimization: {
        minimize: true,
        runtimeChunk: false,
        splitChunks: {
            chunks: "async",
            minSize: 1000,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, 'Assets')]),
        new WebfontPlugin({
            fontName: 'alcev-font',
            files: './App/svg/*.svg',
            template: './App/scss/fonts/_font-icon.scss',
            templateFontPath: '../../fonts',
            templateClassName: 'icon',
            dest: './App/fonts',
            destTemplate: './App/scss/layouts'
        }),
        new webpack.ProvidePlugin({
            $: "jquery", // Used for Bootstrap JavaScript components
            jQuery: "jquery", // Used for Bootstrap JavaScript components
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            Popper: ['popper.js', 'default'], // Used for Bootstrap dropdown, popup and tooltip JavaScript components
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: "exports-loader?Util!bootstrap/js/dist/util",
        }),
        new MiniCssExtractPlugin({
            filename: `styles/[name].css`
        })
    ]
};