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

app.get('/files/*', async (req, res) => {
    console.log("get req for folder");
    console.log(path.join(__dirname, req.path));
    const ditals = await crtDeitals(path.join(__dirname, req.path));
    res.send(ditals);
})

app.post('/files/*', async (req, res) => {

    console.log(path.join(__dirname, req.path, req.body.folderName));
    await fs.mkdir(path.join(__dirname, req.path, req.body.folderName));
    
    res.send(req.body.folderName + ' Added successfully ')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


