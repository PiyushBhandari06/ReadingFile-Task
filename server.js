const express = require('express');
const path = require('path');

const server = express();

server.use('/readfile', express.static('readfile'));

server.get('/', (req, res) => {
    res.sendFile('/index.html', { root: path.join(__dirname, 'public') });
});

server.listen (3000, () => {
    console.log('Server is running on http://localhost:3000');
})