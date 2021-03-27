const puppeteer = require('puppeteer');
const fs = require("fs");

// on définit une liste de constantes utilitaires
// cette constante permet de définir le dossier dans lequel mes fichier seront enregistrés
const buildDir = "dist";


// cette fonction permet de faire un rendu d'une route (url)
// et d'en enregistrer le contenu dans un fichier.
// l'ensemble des liens (<a></a>) du conenu sont récupérés
// et si leur propriétés href pointe avec un lien non visité
// alors elles sont rajouté au tableau de routes à visiter
const ssr = async (routes,domain,visited) => {

        // on définit l'url à visiter, il s'agit du premier élément du tableau de routes
        // que l'on extirpe de ce dernier à l'aide de la méthode shift des objets de type tableau
        const url = routes.shift();
       
        console.log("myurl",url);

        if(!url.includes('oumar-marega?trk=profile-badge')){
                // on détermine le chemin par rapport à la racine du domaine
                const path = url.replace(domain, "");

                // on crée le chemin vers le dossier dans lequel notre fichier sera enregistré
                const dir = buildDir + path;

                // on crée le chemin de notre fichier
                const filepath = dir + "/index.html";

                // on pousse dans le tableau des urls visités, l'url en cours
                visited.push(url);

                // on crée une nouvelle instance d'un navigateur
                // en gros, on ouvre chrome (mais en ligne de commande)
                const browser = await puppeteer.launch();

                // on crée une nouvelle page (on ouvre un nouvel onglet)
                const page = await browser.newPage();

                // une fois la page créée, on se rend à l'adresse url suivante
        
                await page.goto(url);
                // ici on récupère le contenu html de notre page
                const html = await page.content();

                // on crée le(s) dossier(s) dans lequel notre fichier sera enregistré
                fs.mkdirSync(dir, { recursive: true });

                // puis on écrit notre fichier contenant le html à l'emplacement prévu
                fs.writeFileSync(filepath, html);

                // Ici, on récupère l'ensemble des liens contenus dans la page
                // on évalue la page, çàd qu'on lance une fonctionnalité permettant
                // d'analyser l'ensemble du document html.
                const links = await page.evaluate(
                // Ici on récupère l'ensemble des balises a
                // ce qui nous retourne une NodeList que l'on convertit en tableau
                // à l'aide de Array.from.
                // Une fois notre tableau obtenu, on peut utiliser la méthode map
                // des objets de type Array afin de retourner un tableau
                // contenant uniquement les href de nos balises <a>
                () => Array.from(document.querySelectorAll("a"))
                        .map( link => link.href )

                );

                // Ici on crée un tableau d'url non visités
                // Pour cela on filtre le tableau de liens précédemment crée
                // et on ne retourne que ceux qui ne sont PAS présents au sein du
                // tableau d'url visitées.
                const unvisited = links.filter( href => visited.indexOf(href) === -1 && routes.indexOf(href) === -1 );

                // On pousse à l'intérieur de notre tableau de routes l'ensemble des urls
                // non visitées obtenues précédemment.
                routes.push(...unvisited);

                console.log(routes);

                // on ferme le navigateur
                await browser.close();

                // Si le tableau de routes contient encore une route alors
                // on relance la fonction ssr dans 100 ms
                if( routes.length > 0)
                        setTimeout(async () => await ssr(routes,domain,visited), 100 );
        

        }         

};

(
        async() => {
                const urlExist = require("url-exist-sync")
                const domain = "http://localhost:5000";
                let exists = urlExist(domain)
                let maxRetries = Number(process.env.max_retries) || 5;
                const interval = Number(process.env.interval) || 3000
                // celle-ci permet de stocker les routes (url) à examiner
                const routes = [domain+'/'];

                // celle-ci stocke les routes (url) déjà examinées
                const visited = [];
                for(let i = 0; (i<maxRetries && !exists); i++)
                {
                     setTimeout(() => {
                             console.log(`${domain} cannot be reached : retrying...`)
                             exists = urlExist(domain)
                     },interval * i)
                }
                // This instruction must be run at the end
                // That's why the timeout execution is the longest here
                setTimeout(async () => {
                        if(exists)
                                await ssr(routes,domain,visited)
                        else
                                throw new Error("domain couldn't be reached...")
                },interval * maxRetries)
        }
)();





/*const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const port = process.env.PORT || 8080;
const validUrl = require('valid-url');

var parseUrl = function(url) {
        url = decodeURIComponent(url)
        if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
                url = 'http://' + url;
        }

        return url;
};

app.get('/', function(req, res) {
        var urlToScreenshot = parseUrl(req.query.url);

        console.log({urlToScreenshot});

        if (validUrl.isWebUri(urlToScreenshot)) {
                console.log('Screenshotting: ' + urlToScreenshot);
                async() => {
                        const browser = await puppeteer.launch({
                                args: ['--no-sandbox', '--disable-setuid-sandbox']
                        });

                        const page = await browser.newPage();
                        await page.goto(urlToScreenshot);
                        await page.screenshot().then(function(buffer) {
                                res.setHeader('Content-Disposition', 'attachment;filename="' + urlToScreenshot + '.png"');
                                res.setHeader('Content-Type', 'image/png');
                                res.send(buffer)
                        });

                        await browser.close();
                })();
        } else {
                res.send('Invalid url: ' + urlToScreenshot);
        }

});

app.listen(port, function() {
        console.log('App listening on port ' + port)
})*/
