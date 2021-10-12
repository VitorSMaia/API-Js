require('dotenv/config');

// const mysql      = require('mysql2');
// const connection = mysql.createConnection({
//   host     : DB_HOST,
//   port     :  3306,
//   user     : DB_USER,
//   password : DB_PASS,
//   database : DB_NAME
// });

// connection.connect(function(err){
//   if(err) return console.log(err);
//   console.log('conectou!');
// })

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const DB_NAME = process.env.DB_NAME
    const DB_USER = process.env.DB_USER
    const DB_PASS = process.env.DB_PASS
    const DB_HOST = process.env.DB_HOST

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://' + DB_USER + ':' + DB_PASS + '@' + DB_HOST + ':3306/' + DB_NAME);
    console.log('Conectado');
    global.connection = connection;
    return connection;
}

async function findProduct(id){
    const connection = await connect()
    const [rows] = await connection.query('SELECT COUNT(*) AS Quant FROM produtos WHERE id = ?', id)
    return rows[0].Quant
}

async function getProduct(id){

    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM produtos WHERE id = ?', id)
    return rows
}

async function getProducts(){
    //     console.log(
    //     DB_NAME,       
    //     DB_USER, 
    //     DB_PASS, 
    //     DB_HOST
    // )

    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM produtos')
    return rows
}

async function insertProducts(product){

    const connection = await connect()
    const sql = 'INSERT INTO produtos(title,slug,info,price,tags,state) VALUES (?,?,?,?,?,?);'
    const values = [product.title,product.slug,product.info,product.price,JSON.stringify(product.tags),product.state]
    return await connection.query(sql,values)
}

async function updateProducts(product,id){

    const connection = await connect()
    const sql = 'UPDATE produtos SET title = ?,slug = ?,info = ?,price = ?,tags = ?,state = ? WHERE id = ?;'
    const values = [product.title,product.slug,product.info,product.price,JSON.stringify(product.tags),product.state, id]
    return await connection.query(sql,values)
}

async function deleteProducts(id){

    const connection = await connect()
    const sql = 'DELETE FROM produtos WHERE id = ?;'
    const values = [id]
    return await connection.query(sql,values)
}

module.exports = {connect,getProduct,getProducts,insertProducts,updateProducts,deleteProducts,findProduct}