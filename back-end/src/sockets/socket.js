const { sale } = require('../database/models');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Conectado');
    socket.on('changeStatus', async ({ id, status }) => {
      await sale.update({ status }, { where: { id } });
      io.emit('changeStatus', { id, status });
    });
  });
};