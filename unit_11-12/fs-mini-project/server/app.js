const express = require('express');
const app = express();
// const path = require('path');
const cors = require('cors');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
app.use(cors())



app.get('/files', (req, res) => {
    
    fs.readdir('./files', (err, files) => {
        if (files) {
            res.send(files);
        }
        if (err) {
            res.send(err);
        }
    });
})


// app.use(express.static(path.join(path.dirname(__dirname), 'client', 'build')));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


