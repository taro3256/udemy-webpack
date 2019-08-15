const path = require('path')

// フルパスにする(outputはフルパスでなければならない)
const outputPath = path.resolve(__dirname, 'dist')
console.log({outputPath})

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputPath,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: '.images/[name].[ext]'
                }
            },
        ]
    },
    devServer: {
        contentBase: outputPath,
    },
}