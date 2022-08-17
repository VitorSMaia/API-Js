'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const indexRoute = require('./routes/index-route');
const productsRoute = require('./routes/products-route');


//BANCO DE DADOS
// mongoose.connect('mongodb+srv://@cluster0.0aqy0.mongodb.net/Produto?retryWrites=true&w=majority')
// const db = require('../bin/connection');
//CARREGAR MODELS
const Products = require('./models/produtoModel');


//BODY PARSE = RECEBER ENVIAR JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// CARREGA ROTAS
app.use('/api',indexRoute);
app.use('/api/produtos', productsRoute);

module.exports = app;





