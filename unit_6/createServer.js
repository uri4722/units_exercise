const http = require('http');
const fs = require('fs/promises');

http.createServer((req, res) => {
    if (req.method === 'GET') {

switch (req.url) {
    case '/':
        return handelPath(res,'./index.html');
    case '/raw-html':
        return handelPath(res,'./raw.html');
    case '/users':
        return handelPath(res,'./users.json');
    case '/index.css':
        return handelPath(res,'./index.css');
    case '/index.js':
        return handelPath(res,'./index.js');
    default:
        res.statusCode = 404;
        res.end();
}    } else {
        res.statusCode = 400
        res.end();
    }
}).listen(8000)

async function handelPath(res, path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        res.end(data);
    } catch (error) {
        res.statusCode = 400
        res.end(error)
    }
}


// switch (req.url) {
//     case '/':
//         return handelPath(res,'./index.html');
//     case '/raw-html':
//         return handelPath(res,'./raw.html');
//     case '/users':
//         return handelPath(res,'./users.json');
//     case '/index.css':
//         return handelPath(res,'./index.css');
//     case '/index.js':
//         return handelPath(res,'./index.js');
//     default:
//         res.statusCode = 404;
//         res.end();
// }