const express = require('express');
const app = express();
const baseUrl = "/numbers"

app.use(express.json())

app.get(baseUrl, (req, res) => {
    res.send('success using get')
});
app.post(baseUrl, (req, res) => {
    res.send('success using post')
});
app.put(baseUrl, (req, res) => {
    res.send('success using put')
});
app.delete(baseUrl, (req, res) => {
    res.send('success using delete')
});

process.env.PORT = 7500;
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("listen to port" + PORT))