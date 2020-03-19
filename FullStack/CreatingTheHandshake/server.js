const express = require('express'),
    app = express(),
    port = 8000,
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require('socket.io')(server);
io.on("connection", socket => {
    socket.on("welcome", data => {  
        socket.emit("response", "Hello there!");     
    })
})