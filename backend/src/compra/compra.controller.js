const Compra = require('./compra.model');

module.exports.list = async (req, res) => {
  console.log('======compra2');

  const compras = await Compra.find();

  res.json(compras);
};

module.exports.create = async (req, res) => {
  console.log('======compra');
  const compra = new Compra(req.body);
  await compra.save();

  res.json(compra);
};
