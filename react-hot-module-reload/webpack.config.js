var webpack = require('webpack'),
    devtool = (process.env.NODE_ENV !== 'production')?
        'eval' : 'cheap-module-source-map';

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        // sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack-dev-server/client?http://0.0.0.0:8080');
        sources.push('webpack/hot/only-dev-server');
    }
    return sources;
}

module.exports = {
    entry: getEntrySources(['./src/app.js']),
    output: {
        // publicPath is used for loader that embed assets (images) so the URL is correct
        publicPath: '/build/',
        path: 'build',
        filename: 'app.js'
    },
    devtool: devtool,
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.less$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'less?outputStyle=expanded'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
                ]
            }
        ]
    },
    plugins: [
        // this is needed so that react drops development crap in production builds
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
};
