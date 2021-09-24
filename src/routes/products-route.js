'use strict'

const express = require('express');

const produtos = express.Router();
const produtoController = require('../controllers/produtoController')


const get = produtos.get('/:id',produtoController.get);

const gets = produtos.get('/',produtoController.gets);

const create = produtos.post('/',produtoController.post);

const update = produtos.put('/:id',produtoController.put);

const del = produtos.delete('/:id',produtoController.delete);

module.exports = produtos;
