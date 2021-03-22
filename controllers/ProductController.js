const mongoose = require('mongoose');
const Product = mongoose.model('product');
const dbConnection = require("../config/DBConnection.js");

module.exports.getAllProducts = function(app, req, res){   
    var connection = dbConnection();
	Product.find({}).then((product) => {
        return res.json(product);
    }).catch((erro) => {
        return res.status(400).json({
            erro: true,
            msg: "Nenhum produto encontrado."
        });
    });
};

module.exports.getProductById = function(app, req, res){   
    var connection = dbConnection();
	Product.findOne({_id: req.params.id}).then((product) =>{
        return res.json(product);
    }).catch((erro)=>{
        return res.status(400).json({
            erro: true,
            msg: "Erro ao consultar product byId"
        });
    });
};

module.exports.saveProduct = function(app, req, res){   
    var connection = dbConnection();
	Product.create(req.body,(err) => {
        if(err)
            return res.status(400).json({
                error: true,
                msg: "Erro, o produto não foi cadastrado."
            })
            return res.json({
                msg: "Produto cadastrado com sucesso."
            });
    });    
};

module.exports.updateProduct = function(app, req, res){   
    var connection = dbConnection();
	Product.updateOne({ _id: req.params.id }, req.body, (err) => {
        if(err) 
         return res.status(400).json({
             error: true,
             msg: "Erro ao editar product"
         });
 
         return res.json({
             msg: "Product editado com sucesso."
         });
     });
};

module.exports.deleteProduct = function(app, req, res){   
    var connection = dbConnection();
	Product.deleteOne({_id: req.params.id}, (err) => {
        if (err)
            return res.status(400).json({
                error: true,
                msg: "Erro ao apagar Product"
            });
        return res.json({
            msg: "Product apagado com sucesso." 
        });
    });
};