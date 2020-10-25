module.exports = {
    pluginOptions: {
        prerenderSpa: {
            registry: undefined,
            renderRoutes: [
                "/", "convertissuer-base", "convertisseur-devise", "convertisseur-distance-km-mm", "convertisseur-masse-kg-mg", "convertisseur-resolution-px-rem", "oumar-marega"
            ],
            useRenderEvent: true,
            headless: true,
            onlyProduction: true,
            postProcess: route => {
                // Defer scripts and tell Vue it's been server rendered to trigger hydration
                route.html = route.html
                    .replace(/<script (.*?)>/g, '<script $1 defer>')
                    .replace('id="app"', 'id="app" data-server-rendered="true"');
                return route;
            }
        }
    }
}