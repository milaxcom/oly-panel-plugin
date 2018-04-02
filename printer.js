require('dotenv').config()
const moment = require('moment')
const Sequelize = require('sequelize')
const Http = require("http");
const Url = require("url");

let db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
    operatorsAliases: false,
})

olyDb = db.define('olyOrders', {
    pair: Sequelize.STRING,
    pairProfit: Sequelize.STRING,
    prediction: Sequelize.STRING,
    side: Sequelize.STRING,
    amount: Sequelize.STRING,
    profit: Sequelize.STRING,
})

olyDb.sync().then(() => {})

Http.createServer(function(req, res) {

    let parsedUrl = Url.parse(req.url, true);
    let queryAsObject = parsedUrl.query;

    olyDb.create(queryAsObject)
  
    res.end(JSON.stringify(queryAsObject));
  
}).listen(8081);
  
console.log("Server listening on port http://127.0.0.1:8081/");
  