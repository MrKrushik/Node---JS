const http = require('http');

const server = http.createServer((req, res) => {
    res.write("<h1> Hy welcome to the server </h1>");
    res.end();
});

server.listen(3571, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        return false;
    }
})