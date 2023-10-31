const express = require("express");
const path = require('path');
const cors = require('cors');

const app = express();

const database = "this the contect to came from the database"

const PORT = process.env.PORT || 3001;
app.use((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
})
app.use(express.static(path.join(path.dirname(__dirname), 'client', 'build')));

app.get('/', (req, res) => {
    res.end(database)
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});