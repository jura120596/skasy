const mix = require('laravel-mix');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const wc = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': __dirname + '/resources/js',
        },
        plugins: [
            new DirectoryNamedWebpackPlugin({honorIndex: true}),
        ],
    },
    output: {
        chunkFilename: 'js/chunks/[name][chunkhash].js',
    }
};

mix.sourceMaps();

mix.webpackConfig(wc)
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .copy('resources/js/service-worker.js', 'public/service-worker.js')
    .vue({version:2})
    .extract(['vue']);


if (mix.inProduction()) {
    mix.version();
}