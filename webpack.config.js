const path = require('path');
module.exports = {
    mode: 'development',
    entry:
    {
        index: './src/index.js',
    },

    output:
    {
        filename: 'main.js',
        path: path.resolve(__dirname , 'dist'),
        publicPath: './',
    },

    module:
    {
        rules:
        [
            {
                test: /\.css$/i,
                use: ['style-loader' , 'css-loader'],
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
            }
        ]
    }
}