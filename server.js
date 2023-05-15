const http  = require('http');
// const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Ahihi </h3>');
    res.write('<h2> Hello world </h2>');
    res.end();
})
server.listen(3000, 'localhost', () => {
    console.log('NodeJS listening on port: 3000')
})