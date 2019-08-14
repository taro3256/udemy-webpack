const path = require('path')

// フルパスにする(outputはフルパスでなければならない)
const outputPath = path.resolve(__dirname, 'dist')
console.log({outputPath})

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputPath
    },
}