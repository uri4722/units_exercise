const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const crtDeitals = require('./function/creatDeitals.js')
const PORT = process.env.PORT || 3001;
app.use(cors())

app.use("/file", express.static(path.join(__dirname)));

app.get('/files/*', async (req, res) => {
    console.log("get req for folder");
    const ditals = await crtDeitals(path.join(__dirname, req.path));
    res.send(ditals);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


