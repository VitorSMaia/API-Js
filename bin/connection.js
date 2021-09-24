require('dotenv/config');

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://' + DB_USER + ':' + DB_PASS + '@' + DB_HOST + ':3306/' + DB_NAME);
    console.log('Conectado');
    global.connection = connection;
    return connection;
}

async function getProduct(id){

    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM product WHERE id = ?', id)
    return rows
}

async function getProducts(){

    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM product')
    return rows
}

async function insertProducts(product){

    const connection = await connect()
    const sql = 'INSERT INTO product(title,slug,description,price,tags,active) VALUES (?,?,?,?,?,?);'
    const values = [product.title,product.slug,product.description,product.price,JSON.stringify(product.tags),product.active]
    return await connection.query(sql,values)
}

async function updateProducts(product){

    const connection = await connect()
    const sql = 'UPDATE product SET title = ?,slug = ?,description = ?,price = ?,tags = ?,active = ?) WHERE id = ?;'
    const values = [product.title,product.slug,product.description,product.price,JSON.stringify(product.tags),product.active,product.id]
    return await connection.query(sql,values)
}

async function deleteProducts(product){

    const connection = await connect()
    const sql = 'DELETE FROM product WHERE id = ?;'
    const values = [product.id]
    return await connection.query(sql,values)
}

module.exports = {connect,getProduct,getProducts,insertProducts,updateProducts,deleteProducts}