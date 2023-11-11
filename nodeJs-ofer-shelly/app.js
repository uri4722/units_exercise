const express = require('express');
const app = express();
const path = require('path');



let port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())



app.get("", (req, res) => {
    res.json({ msg: "express work" })
})

app.listen(port);