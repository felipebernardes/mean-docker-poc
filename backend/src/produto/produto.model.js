const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  descricao: String,
  preco: String,
  quantidade: String
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;
