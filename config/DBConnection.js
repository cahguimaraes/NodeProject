const mongoose = require('mongoose');

module.exports = function() {
    return mongoose.connect('mongodb://localhost/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Conexão com MongoDB realizada com sucesso!");
    }).catch((erro) => {
        console.log("Erro ao conectar com MongoDB!");
    });
};