const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));
server.use('/readfile', express.static(path.join(__dirname, 'readfile')));


server.get('/', (req, res) => {
    res.sendFile('/index.html', { root: path.join(__dirname, 'public') });
});

const PORT = process.env.PORT || 3000;

server.listen (PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})