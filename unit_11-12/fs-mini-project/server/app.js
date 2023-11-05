const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const crtDeitals = require('./function/creatDeitals.js')
const PORT = process.env.PORT || 3001;
app.use(cors())

app.get('/files', async (req, res) => {
    console.log("get req");
    console.log(path.join(__dirname, '/files'));

    const ditals = await crtDeitals(path.join(__dirname, '/files'));
    res.send(ditals);
})
app.get('/files/:path', async (req, res) => {
    console.log("get req");
    console.log(path.join(__dirname, '/files', req.params.path));

    const ditals = await crtDeitals(path.join(__dirname, '/files', req.params.path));
    res.send(ditals);
})


// app.use(express.static(path.join(path.dirname(__dirname), 'client', 'build')));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


