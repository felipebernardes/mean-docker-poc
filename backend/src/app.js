const bodyParser = require('body-parser');
const cors = require('@robertoachar/express-cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const error = require('./error');

const app = express();
const userRouter = require('./user/user.router');
const produtoRouter = require('./produto/produto.router');
const compraRouter = require('./compra/compra.router');

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

app.use('/api/users', userRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/compra', compraRouter);

app.use(error.notFound);
app.use(error.catchAll);

module.exports = app;
