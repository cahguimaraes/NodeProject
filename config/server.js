const express = require('express'); //Incluindo a dependencia express
const app = express(); //chamando a função express
const port = 8080;

app.listen(port,() => { //configurando API para iniciar na porta 8080
    console.log("Servidor iniciado na porta " + port);
});

module.exports = app;