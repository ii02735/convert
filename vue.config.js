const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    publicPath: '',
    configureWebpack: {
        plugins: [
            new CompressionPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.(js|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8
            })
        ]
    }
}

//                "/", "convertissuer-base", "convertisseur-devise", "convertisseur-distance-km-mm", "convertisseur-masse-kg-mg", "convertisseur-resolution-px-rem", "oumar-marega"
//pluginOptions: {
//         prerenderSpa: {
//             registry: undefined,
//             renderRoutes: [
//                 "/"
//             ],
//             useRenderEvent: true,
//             headless: true,
//             onlyProduction: true,
//             postProcess: route => {
//                 // Defer scripts and tell Vue it's been server rendered to trigger hydration
//                 route.html = route.html
//                     .replace(/<script (.*?)>/g, '<script $1 defer>')
//                     .replace('id="app"', 'id="app" data-server-rendered="true"');
//                 return route;
//             }
//         }
//     }