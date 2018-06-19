const Produto = require('./produto.model');

module.exports.list = async (req, res) => {
  console.log('======produtos');

  const produtos = await Produto.find();

  res.json(produtos);
};
