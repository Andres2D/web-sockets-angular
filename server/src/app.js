const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 3000;

io.on('connection', socket => {
  console.log('New connection ⬆️');

  socket.on('disconnect', () => {
    console.log('⬇️ User disconnected');
  });

  socket.on("connect_error", (err) => {
    console.log(`🚩 connect_error due to ${err.message}`);
  });
});

server.listen(port, () => console.log(`🚀 listening on port ${port}`));
