const fs = require('fs');

exports.DirDetails = async function (path) {
    const names = await fs.readdir(path);
    console.log(names);
}
