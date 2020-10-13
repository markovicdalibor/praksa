const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                scriptLoading: 'defer'
            })
        ],
        mode: 'development',
        module: {
            rules: [{
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 10000 }
                },
                { loader: 'image-webpac-loader' }
            }]
        }