const express = require('express'); //Incluindo a dependencia express
const port = 8080;
const consign = require('consign');
//const router = express.Router();

const app = express(); //chamando a função express
app.listen(port,() => { //configurando API para iniciar na porta 8080
    console.log("Servidor iniciado na porta " + port);
});
consign()
    //.include("config/DBConnection.js")
    .then("models")
    .then("controllers")
    .into(app);
    


// aplica as rotas em nossa aplicação
//app.use('/', router);

module.exports = app;