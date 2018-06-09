
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


const pathMap = {

  'dev':'',
  'dist':'/dist'
}

module.exports = env => {

    const mode = env.NODE_ENV;
    console.log('mode', mode);
    const buildedPutPath = __dirname+pathMap[mode];
    console.log('buildPutPath', buildedPutPath);

    return {
        entry: ['./src/index.js'],
        output: {
            path: buildedPutPath,
            publicPath: '/style/',
            filename: 'bundle.js'
        },

        module: {
            rules: [
                {
                    use: 'babel-loader',
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/
                }, {
                    use: [
                        {
                            loader: 'style-loader'
                        }, {
                            loader: 'css-loader'
                        }, {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true
                            }
                        }
                    ],
                    test: /\.less$/

                }, {
                    use: [
                        'style-loader', 'css-loader'
                    ],
                    test: /\.css$/
                },
                {
                 use:'file-loader',
                 test:/\.(png|jpg|gif|mp4|ogg|svg|css|ttf|woff|woff2)$/
                  
                },
                { use: 'url-loader?limit=100000', test: /\.(png|jpg|gif|mp4|ogg|svg|css|ttf|woff|woff2)$/ }


            ]
        },

        plugins:[

            new HtmlWebPackPlugin({

                template:path.resolve(__dirname,'index.html'),
                filename: './index.html'
            })

        ],
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        devServer: {
            historyApiFallback: true,
            contentBase: './',
            port: 8087
        }
    }

};
