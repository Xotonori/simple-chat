const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

io.on('connection', socket => {
    console.log('user connected', socket.id)
})

http.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('server is working');
});