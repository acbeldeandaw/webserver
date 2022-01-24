const http = require('http');

const server = http.createServer((request, response) => {
    const persona = {
        id: 1,
        nombre: 'Pepe'
    };

    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.write(JSON.stringify(persona));
    response.end();
});

server.listen(80);
console.log('Listening on port 80...');