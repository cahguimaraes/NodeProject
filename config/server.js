const express = require('express'); //Incluindo a dependencia express
const port = 8080;
const consign = require('consign');



const app = express(); //chamando a função express
app.use(express.json());

app.listen(port,() => { //configurando API para iniciar na porta 8080
    console.log("Servidor iniciado na porta " + port);
});
consign()
    .then("models")
    .then("controllers")
    .then("routes")
    .then("views")
    .into(app);
    
module.exports = app;