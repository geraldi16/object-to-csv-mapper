import express from 'express';
import http from 'http';

const app = new express();

const server = http.createServer(app);
const port = 1616;

app.get('/status', (req, res) => {
  res.send('ok');
})

server.listen(port, async error => {
  console.log(`Server is now running on port ${port}`);
})