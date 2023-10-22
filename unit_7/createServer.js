const http = require('http');
const fs = require('fs/promises');


http.createServer((req, res) => {
    if (req.method === 'GET') {

        switch (req.url) {
            case '/pages':
                return handelPath(res, './pages.html');
            case '/pages.css':
                return handelPath(res, './pages.css');
            case '/pages/sports':
                return handelPath(res, './pages/sports.html');
            case '/pages/about':
                return handelPath(res, './pages/about.html');

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
        console.log(path);
        const data = await fs.readFile(path, 'utf8');
        res.end(data);
    } catch (error) {
        res.statusCode = 400
        res.end(error)
    }
}