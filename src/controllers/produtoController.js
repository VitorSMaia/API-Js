'use strict'

const productModel = require('../models/produtoModel');
const db = require('../../bin/connection.js');
const val1 = 0;

exports.get = (req,res,next) => {

    const id = req.params.id
    try
    {
        (async () =>
        {
            const db = require('../../bin/connection.js');
            const getProduct = await db.getProduct(id);
            res.status(200).send(getProduct)
        })()
    }catch(error)
    {
        res.status(400).send
        (
            {
                message: 'Nada Encontrado!!',
                data: error['message']
            }
        )
    }
}

exports.gets = (req,res,next) => {
    try
    {
        (async () =>
        {
            const db = require('../../bin/connection.js');
            const getProducts = await db.getProducts();
            res.status(200).send(getProducts)
        })()
    }catch(error)
    {
        res.status(400).send
        (
            {
                message: 'Nada Encontrado!!',
                data: error['message']
            }
        )
    }
}

exports.post = (req,res,next) => {
    try
    {
        const val1 = productModel.validate(req.body);
        console.log("passou na validação: " + !val1.error + ' MSG: ' + val2)
        if(!val1.error)
        {
            (async() =>
            {
                const db = require('../../bin/connection.js');
                const insertProducts = await db.insertProducts(req.body);
                res.status(200).send(insertProducts)
            })()
        }
        res.status(400).send({meg: val1.error['message']})
    }catch(error)
    {
        res.status(400).send({meg: val1.error['message']})
    }
}

exports.put = (req,res,next) => {
    try
    {
        const val1 = productModel.validate(req.body);
        console.log("passou na validação: " + !val1.error + ' MSG: ' + val1.error)
        if(!val1.error)
        {
            (async () =>
            {
                const db = require('../../bin/connection.js');
                const updateProducts = await db.updateProducts(req.body);
                res.status(200).send(updateProducts)
            })()
        }
        res.status(400).send({meg: val1.error['message']})
    }catch(error)
    {
        res.status(400).send({meg: val1.error['message']})
    }
}

exports.delete = (req,res,next) => {
    try
    {
        const val1 = productModel.validate(req.body);
        console.log("passou na validação: " + !val1.error + ' MSG: ' + val1.error)
        if(!val1.error)
        {
            (async () =>
            {
                const db = require('../../bin/connection.js');
                const deleteProducts = await db.deleteProducts(product);
                res.status(200).send(deleteProducts)
            })()
        }
        res.status(400).send({meg: val1.error['message']})
    }catch(error)
    {
        res.status(400).send({meg: val1.error['message']})
    }
}