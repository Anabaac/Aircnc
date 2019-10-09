const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://192.168.99.100:27017/ana', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query -> Acessar query params
// req.parms -> Acessar routes params (para edição, delete)
// req.body -> Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);