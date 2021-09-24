'use strict'

const Product = require('../models/produtoModel')


exports.get = (req,res,next) => {

    const id = req.params.id
    try
    {
        (async () =>
        {
            const db = require('D:/Git/MongoDB/bin/connection');
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
            const db = require('D:/Git/MongoDB/bin/connection');
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
        var product = new Product(req.body);
        (async () =>
        {
            const db = require('D:/Git/MongoDB/bin/connection');
            const insertProducts = await db.insertProducts(product);
            res.status(200).send(insertProducts)
        })()

    }catch(error)
    {

    }
}

exports.put = (req,res,next) => {
    try
    {
        var product = new Product(req.body);
        (async () =>
        {
            const db = require('D:/Git/MongoDB/bin/connection');
            const updateProducts = await db.updateProducts(product);
            res.status(200).send(updateProducts)
        })()
    }catch(error)
    {

    }
}

exports.delete = (req,res,next) => {
    try
    {
        var product = new Product(req.body);
        (async () =>
        {
            const db = require('D:/Git/MongoDB/bin/connection');
            const deleteProducts = await db.deleteProducts(product);
            res.status(200).send(deleteProducts)
        })()
    }catch(error)
    {

    }
}