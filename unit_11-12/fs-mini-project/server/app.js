const express = require('express');
const app = express();
const fs = require('fs/promises')
const path = require('path');
const cors = require('cors');
const crtDeitals = require('./function/creatDeitals.js')
const PORT = process.env.PORT || 3001;
const BaseURL = '/files*';
app.use(cors())
app.use(express.json());

app.use(express.static(path.join(__dirname)));



app.get(BaseURL, async (req, res) => {
    console.log("get req start");
    console.log(path.join(__dirname, req.path));
    const ditals = await crtDeitals(path.join(__dirname, req.path));
    res.send(ditals);
})


app.post(BaseURL, async (req, res) => {
    console.log("get post start");
    if (req.body.folderName) {
        await fs.mkdir(path.join(__dirname, req.path, req.body.folderName));
        const stat = await fs.stat(path.join(__dirname, req.path, req.body.folderName))
        res.statusCode = 201;
        res.send(stat)
    } else {
        console.log("get post file start");
        await fs.appendFile(path.join(__dirname, req.path), "");
        const stat = await fs.stat(path.join(__dirname, req.path))
        res.statusCode = 201;
        res.send(stat)
    }
})


app.delete(BaseURL, async (req, res) => {
    console.log("get delete start");
    await fs.rm(path.join(__dirname, req.path), { recursive: true });
    res.statusCode = 200;
    res.send('the delete was successful')
})

app.put(BaseURL, async (req, res) => {
    console.log("get put start");

    if (req.body.rename) {
        const newPath = req.path.slice(0, req.path.lastIndexOf("/"));
        console.log(path.join(__dirname, newPath));
        await fs.rename(path.join(__dirname, req.path), path.join(__dirname, newPath,req.body.rename));
        res.statusCode = 200;
        res.send('rename was successful')
    }

})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


