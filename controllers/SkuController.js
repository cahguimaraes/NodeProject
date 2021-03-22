const mongoose = require('mongoose');
const Sku = mongoose.model('sku');
const dbConnection = require("../config/DBConnection.js");

module.exports.getAllSkus = function(app, req, res){   
    var connection = dbConnection();
	Sku.find({}).then((product) => {
        return res.json(product);
    }).catch((erro) => {
        return res.status(400).json({
            erro: true,
            msg: "Nenhum Sku encontrado."
        });
    });
};

module.exports.getSkuById = function(app, req, res){   
    var connection = dbConnection();
	Sku.findOne({_id: req.params.id}).then((product) =>{
        return res.json(product);
    }).catch((erro)=>{
        return res.status(400).json({
            erro: true,
            msg: "Erro ao consultar Sku byId"
        });
    });
};

module.exports.saveSku = function(app, req, res){   
    var connection = dbConnection();
	Sku.create(req.body,(err) => {
        if(err)
            return res.status(400).json({
                error: true,
                msg: "Erro, o sku não foi cadastrado."
            })
            return res.json({
                msg: "Sku cadastrado com sucesso."
            });
    });    
};

module.exports.updateSku = function(app, req, res){   
    var connection = dbConnection();
	Sku.updateOne({ _id: req.params.id }, req.body, (err) => {
        if(err) 
         return res.status(400).json({
             error: true,
             msg: "Erro ao editar Sku"
         });
 
         return res.json({
             msg: "Sku editado com sucesso."
         });
     });
};

module.exports.deleteSku = function(app, req, res){   
    var connection = dbConnection();
	Sku.deleteOne({_id: req.params.id}, (err) => {
        if (err)
            return res.status(400).json({
                error: true,
                msg: "Erro ao apagar Sku"
            });
        return res.json({
            msg: "Sku apagado com sucesso." 
        });
    });
};