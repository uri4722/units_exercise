const express = require('express');
const app = express();
const fs = require('fs/promises')
const path = require('path');
const cors = require('cors');
const crtDeitals = require('./function/creatDeitals.js')
const PORT = process.env.PORT || 3001;
app.use(cors())
app.use(express.json());


app.use("/file", express.static(path.join(__dirname)));

app.get('/files*', async (req, res) => {
    console.log("get req start");
    console.log(path.join(__dirname, req.path));
    const ditals = await crtDeitals(path.join(__dirname, req.path));
    res.send(ditals);
})

app.post('/files*', async (req, res) => {
    console.log("get post start");
    await fs.mkdir(path.join(__dirname, req.path, req.body.folderName));
    const stat = await fs.stat(path.join(__dirname, req.path, req.body.folderName))
    res.statusCode = 201;
    res.send(stat)
})
app.post('/file/*', async (req, res) => {
    console.log("get post file start");
    await fs.appendFile(path.join(__dirname, req.path, req.body.folderName),"");
    // const stat = await fs.stat(path.join(__dirname, req.path, req.body.folderName))
    res.statusCode = 201;
    res.send()
})

app.delete('/files*', async (req, res) => {
    console.log("get delete start");
    console.log(path.join(__dirname, req.path));
    await fs.rm(path.join(__dirname, req.path), { recursive: true });
    res.statusCode = 200;
    res.send('the delete was successful')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


