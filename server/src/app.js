import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { MOCK_MASTER_QUEUE } from './data/queue.js';
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000;
let queue = MOCK_MASTER_QUEUE;

io.on('connection', socket => {
  console.log('New connection ⬆️');

  // Get master queue
  socket.on('queue', () => {
    io.emit('queue', queue);
  });
  
  socket.on('call', (id) => {
    queue = queue.filter(q => q.id !== id);
    io.emit('queue', queue);
  });

  socket.on('disconnect', () => {
    console.log('⬇️ User disconnected');
  });

  socket.on("connect_error", (err) => {
    console.log(`🚩 connect_error due to ${err.message}`);
  });
});

server.listen(port, () => console.log(`🚀 listening on port ${port}`));
