const app = require('./config/server');
const DBconnection = require('./config/DBConnection');
const { Db } = require('mongodb');
const mongoose = require('mongoose');

require("./models/Product");  //Incluindo nova classe de Produtos
require("./models/Sku"); //Incluindo nova classe de Sku

const Product = mongoose.model('product');
const Sku = mongoose.model('sku');


app.get("/", (req,res) => { //configurando a rota para o método GET Default
    return res.json({
        mensagem: "Seja bem-vindo",
        back: "Aplicação Back-End criada em NodeJs",
        front: "Aplicação Front-End criada em Html com React",
        autor: "Caroline Guimarães"
    });
});

//const connection = DBconnection();


