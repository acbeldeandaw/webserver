require('dotenv').config();
const express = require('express');
const port = process.env.PORT;

class Server {

    constructor() {
        this.app = express();
        this.middleware();
        this.rutas();
    }

    middleware() {
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    rutas() {
        this.app.get('/', function(req, res) {
            res.send('<h1>Hello World</h1>')
        })
        this.app.get('/api', function(req, res) {
            res.status(200).json({
                ok: true,
                msg: 'get api'
            })
        })
        this.app.get('/suma', function(req, res) {
            const n1 = Number(req.query.n1);
            const n2 = Number(req.query.n2);
            res.send(`${n1} + ${n2} = ${n1 + n2}`);
        })
        this.app.put('/api', function(req, res) {
            const id = req.query.id;
            res.status(200).json({
                ok: true,
                msg: 'put api',
                id
            })
        })
        this.app.post('/api', function(req, res) {
            const body = req.body;
            res.json({
                ok: true,
                msg: 'post api',
                body
            })
        })
        this.app.delete('/api', function(req, res) {
            res.status(200).json({
                ok: true,
                msg: 'delete api'
            })
        })
        this.app.get('/saludo', function(req, res) {
            res.send('Buenas 2DAW')
        })
        this.app.get('*', function(req, res) {
            res.sendFile(__dirname + '/404.html')
        })
    }

    listen() {
        this.app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }
}

module.exports = Server;