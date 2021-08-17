require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    methods: ['GET', 'POST', 'DELETE', 'UPDATE'],
    origin: 'http://localhost:3000',
  },
});

require('../sockets/socket')(io);
const Users = require('../database/routes/users');
const Sales = require('../database/routes/sales');
const productsRouter = require('../database/routes/products');
const errorMiddleware = require('../database/middlewares/errorMiddleware');

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.static(path.resolve(`${__dirname}../../../public`)));
app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', Users);
app.use('/sales', Sales);
app.use(errorMiddleware);

const PORT = process.env.SOCKET_PORT || 3002;
http.listen(PORT, () => console.log(`Socket na porta ${PORT}`));
module.exports = app;
