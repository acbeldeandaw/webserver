require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('/saludo', function(req, res) {
    res.send('Buenas 2DAW')
})

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port,
    () => {
        console.log(`Listening on port ${port}`);
    });