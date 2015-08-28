var path = require('path');

var outDirectory = (process.env.NODE_ENV === 'production') ?
    'dist' :
    'build';
const entryPath = path.resolve(__dirname, 'src', 'app.js');

module.exports = {
    entry: {
        app: [
            entryPath
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'shared'],
        extensions:        ['', '.js', '.jsx']
    },
    output: {
        path:     path.join(__dirname, outDirectory),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url?limit=8192'
            },
            {
                test : /\.(woff|woff2|ttf|eot)$/,
                loader: 'url'
            }
        ]
    },
};
