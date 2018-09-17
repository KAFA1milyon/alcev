
const path = require('path');
const webpack = require("webpack");
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebfontPlugin = require("webfont-webpack-plugin").default;
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const entryPlus = require('webpack-entry-plus');
const isProd = process.env.NODE_ENV === 'production'

const entryFiles = [
  {
      entryFiles: [`bootstrap-loader/lib/bootstrap.loader?extractStyles&configFilePath=${__dirname}/bootstraprc.yml!bootstrap-loader/no-op.js`],
      outputName: 'base'
  },
  {
      entryFiles: ['@babel/polyfill', './ClientApp/client.js'],
      outputName: 'main-client'
  }
];

module.exports = () => {
  console.log('Building for \x1b[33m%s\x1b[0m', isProd ? 'Production' : 'Development')
  
  const sharedConfig = () => ({
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : '#source-map',
    stats: { modules: false },
    resolve: { 
      extensions: ['.vue', '.js', '.scss', '.css'],
      alias: {
        "Styles": path.resolve(__dirname, 'ClientApp/assets/scss'),
        "Images": path.resolve(__dirname, 'ClientApp/assets/images')
      }
    },
    output: {
      path: path.resolve(__dirname, 'wwwroot'),
      filename: '[name].js',
      publicPath: '/',
    },
    module: {
      rules: [
        { test: /\.vue$/, loader: 'vue-loader', options: {
          loaders: {
            hotReload: true,
            sass: 'vue-style-loader!css-loader!resolve-url-loader!sass-loader?indentedSyntax',
            scss: 'vue-style-loader!css-loader!resolve-url-loader!sass-loader'
          }
        }}, 
        { test: /\.js$/, loader: 'babel-loader', exclude: file => (/node_modules/.test(file) && /node_modules(?!\/webpack-dev-server)/ && !/\.vue\.js/.test(file)) }, 
        { test: /\.css$/,
          oneOf: [{
              resourceQuery: /module/,
              use: [ 'vue-style-loader', {
                  loader: 'css-loader',
                  options: {
                    url: false,
                    minimize: isProd ? true : false,
                    sourceMap: true
                  }
              }]
            }, {
              use: ['vue-style-loader', 'css-loader']
            }
          ]
        }, {
          test: /\.scss$/,
          use: [{
              loader: "vue-style-loader",
          },{
              loader: "css-loader",
              options: {
                  url: false,
                  minimize: isProd ? true : false,
                  sourceMap: true
              }
          }, {
              loader: 'resolve-url-loader'
          }, {
              loader: "sass-loader",
          }, {
            loader: 'sass-resources-loader',
            options: {
                resources: ['./ClientApp/assets/scss/settings/_settings.scss', './ClientApp/assets/scss/helpers/_helpers.scss']
            }
          }]
        }, {
            test: /bootstrap\/dist\/js\/umd\//, 
            use: 'imports-loader?jQuery=jquery'
        }, { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'file-loader?name=images/[name].[ext]' 
        }, {
            test: /\.svg?(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader",
                options: {
                  limit: 5000,
                  mimetype: "image/svg+xml", 
                  name: "fonts/[name].[ext]"
                }
            }
        }, {
            test: /\.woff?(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader",
                options: {
                  limit: 5000,
                  mimetype: "application/font-woff",
                  name: "fonts/[name].[ext]"
                }
            }
        }, {
            test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader",
                options: {
                  limit: 5000,
                  mimetype: "application/font-woff",
                  name: "fonts/[name].[ext]"
                }
            }
        }, {
            test: /\.ttf?(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader",
                options: {
                  limit: 5000,
                  mimetype: "application/octet-stream",
                  name: "fonts/[name].[ext]"
                }
            }
        }, {
            test: /\.eot?(\?v=\d+\.\d+\.\d+)?$/,
            use: {
                loader: "url-loader",
                options: {
                  limit: 5000,
                  mimetype: "application/vnd.ms-fontobject",
                  name: "fonts/[name].[ext]"
                }
            }
        }
      ]
    },
    optimization: {
        minimizer: isProd ? [
          // we specify a custom UglifyJsPlugin here to get source maps in production
          new UglifyJsPlugin({
            exclude: /\/node_modules/,
            cache: true,
            parallel: true,
            uglifyOptions: {
              compress: false,
              ecma: 6,
              mangle: true
            },
            sourceMap: true
          }),
          new OptimizeCSSAssetsPlugin({})
        ] : []
    },
    plugins: [
      new FriendlyErrorsPlugin(),
      new VueLoaderPlugin(),
      new CopyWebpackPlugin([
          {from:'./ClientApp/renderOnServer.js', to:''} ,
          {from:'./ClientApp/assets/images', to:'images'} 
      ]), 
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
          Tether: "tether",
          "window.Tether": "tether", 
          Util: 'exports-loader?Util!bootstrap/js/dist/util',
          Tab: 'exports-loader?Tab!bootstrap/js/dist/tab'
      }),
      new WebfontPlugin({
          fontName: 'alcev-font',
          files: './ClientApp/assets/svg/*.svg',
          template: './ClientApp/assets/scss/helpers/_fonts-icons.scss',
          templateFontPath: '../../../fonts',
          templateClassName: 'icon',
          dest: './ClientApp/assets/fonts',
          destTemplate: './ClientApp/assets/scss/app/global'
      }),
      new MiniCssExtractPlugin({
          filename: `styles/[name].min.css`
      }),
      new VueSSRClientPlugin()
    ].concat(isProd ? [
        new webpack.optimize.ModuleConcatenationPlugin(),
    ] : [])
  })

  const clientBundleConfig = merge(sharedConfig(), {
    entry: entryPlus(entryFiles),
    output: {
      path: path.join(__dirname, 'wwwroot')
    }
  })

  const serverBundleConfig = merge(sharedConfig(), {
    target: 'node',
    entry: { 'main-server': './ClientApp/server.js' },
    output: {
      libraryTarget: 'commonjs2',
      path: path.join(__dirname, 'wwwroot')
    }
  })

  return [clientBundleConfig, serverBundleConfig]
}
