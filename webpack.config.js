const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: './components/index.js',
    output:{
        path:path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    
    plugins: [
        new HWP ({
            template: './components/index.html'
        })
    ]
}