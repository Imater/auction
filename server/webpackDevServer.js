import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.config.js';

export default function() {
    const compiler = webpack(webpackConfig);
    let bundleStart = null;

    compiler.plugin('compile', () => {
        console.log('Bundling...');
        bundleStart = Date.now();
    });

    compiler.plugin('done', () => {
        console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
    });

    var bundler = new WebpackDevServer(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        quiet: false,
        noInfo: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        stats: {
            colors: true
        }
    });

    console.info('try to listen 8085');
    bundler.listen(8085, 'localhost', () => {
        console.log('Bundling project, please wait...');
    });
}
