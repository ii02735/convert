const routes = [
    {
        path: '/',
        name: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
        children:[
            {
                path: '',
                name: 'home',
                component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Description'),
            },
            {
                path: 'convertissuer-base',
                name: 'base',
                component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Base'),
            },
            {
                path: 'convertisseur-devise',
                name: 'devise',
                component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Devise'),
            },
            {
                path: 'convertisseur-distance-km-mm',
                name: 'distance',
                component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Distance'),
            },
            {
                path: 'convertisseur-masse-kg-mg',
                name: 'masse',
                component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Masse'),
            },
            {
                path: 'convertisseur-resolution-px-rem',
                name: 'resolution',
                component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Resolution'),
            },
            {
                path: 'convertisseur-lettre-majuscule-minuscule',
                name: 'lettre',
                component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Lettre'),
            },
            {
                path: 'hash-sha-mdp-bcrypt',
                name: 'hash',
                component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Hash'),
            },
            {
                path: 'generer-mot-de-passe',
                name: 'generate-password',
                component: () => import(/* webpackChunkName: "about" */ '@/components/Home/GeneratePassword'),
            },
            {
                path: 'oumar-marega',
                name: 'me',
                component: () => import(/* webpackChunkName: "about" */ '@/components/Home/AboutMe'),
            }
        ]
    },
    {
        path: "*",
        redirect: "/"
    }
];

exports.routes = routes