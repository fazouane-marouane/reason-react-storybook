const config = require('reason-scripts/config/webpack.config.dev');
const autoprefixer = require('autoprefixer');

module.exports = {
    resolve: {
        extensions: ['.re', '.ml', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    },
    module: {
        rules: [
            {
              exclude: [
                /\.html$/,
                /\.(js|jsx)$/,
                /\.(ml|mli)$/,
                /\.(re|rei)$/,
                /\.css$/,
                /\.json$/,
                /\.bmp$/,
                /\.gif$/,
                /\.jpe?g$/,
                /\.png$/,
              ],
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.css$/,
              use: [
                require.resolve('style-loader'),
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                  },
                },
                {
                  loader: require.resolve('postcss-loader'),
                  options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebookincubator/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                      require('postcss-flexbugs-fixes'),
                      autoprefixer({
                        browsers: [
                          '>1%',
                          'last 4 versions',
                          'Firefox ESR',
                          'not ie < 9', // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009',
                      }),
                    ],
                  },
                },
              ],
            },
            {
              test: /\.(re|rei|ml|mli)$/,
              use: [
                {
                  loader: require.resolve('bs-loader')
                }
              ]
            }
        ]
    }
};
