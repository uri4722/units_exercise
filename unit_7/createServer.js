const http = require('http');
const fs = require('fs/promises');
const { factorial } = require('./comps/factorial');
const { PrimeNum } = require('./comps/primes');


http.createServer((req, res) => {
    if (req.method === 'GET') {

        if (req.url.startsWith("contacts/", 1)) {
            const n = req.url.slice(10)
            return handelPathContacts(n, res);
        } else if (req.url.startsWith("comps/primes/", 1)) {
            const n = req.url.slice(14);
            console.log(n);
            return handelPathPrimes(n, res);
        }
        if (req.url.startsWith("comps/factorial/", 1)) {
            const n = req.url.slice(17);
            return handelPathFactorial(n, res);
        }
        switch (req.url) {
            case '/pages':
                return handelPath(res, './pages.html');
            case '/pages.css':
                return handelPath(res, './pages.css');
            case '/pages/sports':
                return handelPath(res, './pages/sports.html');
            case '/pages/about':
                return handelPath(res, './pages/about.html');
            case '/files':
                return handelPath(res, './files.html');
            case '/files/people':
                return handelPath(res, './files/people.html');
            case '/files/shops':
                return handelPath(res, './files/shops.html');
            case '/contacts':
                return handelPath(res, './contacts.json');
            case '/comps':
                return handelPath(res, './comps.html');

            default:
                res.statusCode = 404;
                res.end();
        }
    } else {
        res.statusCode = 400
        res.end();
    }
}).listen(7500);

async function handelPath(res, path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        res.end(data);
    } catch (error) {
        res.statusCode = 400
        res.end(error)
    }
}
async function handelPathContacts(n, res) {
    let contacts = await fs.readFile("./contacts.json");
    contacts = JSON.parse(contacts);
    try {
        const data = JSON.stringify(contacts[n]);
        res.end(data);
    } catch (error) {
        res.statusCode = 400
        res.end(error)
    }
}
function handelPathFactorial(n, res) {
    try {
        const data = JSON.stringify(factorial(n));
        // console.log(data);
        res.end(data);
    } catch (error) {
        res.statusCode = 400
        res.end(error)
    }
}
function handelPathPrimes(n, res) {
    try {
        const data = JSON.stringify(PrimeNum(n));
        console.log(data);
        res.end(data);
    } catch (error) {
        res.statusCode = 400
        res.end(error)
    }
} 