'use strict'

const express = require('express');

const router = express.Router();


const get = router.get('/',(req,res,next) => {
    res.status(200).send({
        title:"Node Store API",
        version: "0.0.2"
    });
});

const create = router.post('/',(req,res,next) => {
    res.status(201).send(req.body);
});

const update = router.put('/:id',(req,res,next) => {
    const id = req.params.id;
    const body = req.body;
    res.status(201).send({
        id: id,
        itens: body
    });
});

const del = router.delete('/:id',(req,res,next) => {
    const id = req.params.id;
    const body = req.body;
    res.status(201).send({
        id: id,
        itens: body
    });
});

module.exports = router;
