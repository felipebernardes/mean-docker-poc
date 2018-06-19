const mongoose = require('mongoose');

const CompraSchema = new mongoose.Schema({
  dataCompra: String,
  dataEntrega: String,
  preco: String,
  produtos: Array
});

const Compra = mongoose.model('Compra', CompraSchema);

module.exports = Compra;
