const fs = require('fs/promises');
const path = require('path');



module.exports = async function crtDeitals(dir) {
    const dirnames = await fs.readdir(dir);
    const dirDetails = dirnames.map(async element => {
        const details = {};
        const stat = await fs.stat(path.join(dir, element))
        details.name = element;
        details.isDirectory = stat.isDirectory();
        details.size = stat.size;
        details.birthtime = stat.birthtime;
        return details;
    });

    return await Promise.all(dirDetails);;
};



