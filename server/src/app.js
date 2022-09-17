import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { MOCK_MASTER_QUEUE } from './data/queue.js';
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000;

io.on('connection', socket => {
  console.log('New connection ⬆️');

  // Get master queue
  socket.on('queue', () => {
    io.emit('queue', MOCK_MASTER_QUEUE);
  });

  socket.on('disconnect', () => {
    console.log('⬇️ User disconnected');
  });

  socket.on("connect_error", (err) => {
    console.log(`🚩 connect_error due to ${err.message}`);
  });
});

server.listen(port, () => console.log(`🚀 listening on port ${port}`));
