'use strict'

const productModel = require('../models/produtoModel');
const db = require('../repository/products-repository.js');
// const db = require('../../bin/connection.js');
const val1 = 0;

exports.get = (req,res,next) => {

    try
    {
        (async () =>
        {
            const id = req.params.id
            const findProduct = await db.findProduct(id);
            if( findProduct !== 0)
            {
                const getProduct = await db.getProduct(id);
                res.status(200).send(getProduct)
            }else{
                res.status(400).send({msg:'ID: '+ id +' Não Encontrado!'})
            }
        })()
    }catch(error)
    {
        res.status(400).send({mesg: 'Nada Encontrado!!',data: error['message']})
    }
}

exports.gets = (req,res,next) => {
    try
    {
        (async () =>
        {
            const getProducts = await db.getProducts();
            res.status(200).send(getProducts)
        })()
    }catch(error)
    {
        res.status(400).send({msg: 'Nada Encontrado!!',data: error['message']})
    }
}

exports.post = (req,res,next) => {
    try
    {
        const val1 = productModel.validate(req.body);
        console.log("passou na validação: " + !val1.error)
        if(!val1.error)
        {
            (async() =>
            {
                const insertProducts = await db.insertProducts(req.body);
                res.status(200).send(insertProducts)
            })()
        }
    }catch($error)
    {
        res.status(400).send($val1.error)
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
                const id = req.params.id;
                const findProducts = await db.findProduct(id);
                if(findProducts !== 0)
                {
                    const updateProducts = await db.updateProducts(req.body,id);
                    res.status(200).send(updateProducts)
                }else{
                    res.status(400).send({msg: 'ID: '+ id +' Não Encontrado!'})
                }
            })()
        }else{
            res.status(400).send({meg: val1.error['message']})
        }
    }catch(error)
    {
        res.status(400).send({meg: val1.error['message']})
    }
}

exports.delete = (req,res,next) => {
    try
    {
        (async () =>
        {
            const id = req.params.id
            const findProducts = await db.findProduct(id);
            if( findProducts !== 0 )
            {
                const deleteProducts = await db.deleteProducts(id);
                res.status(200).send(deleteProducts)
            }else{
                res.status(400).send({msg: 'ID: '+ id +' Não Encontrado!'})
            }
        })()
    }catch(error)
    {
        res.status(400).send({msg: 'Error'})
    }
}