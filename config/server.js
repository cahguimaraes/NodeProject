const express = require('express'); //Incluindo a dependencia express
const port = 8080;
const consign = require('consign');
const cors = require('cors');


const app = express(); //chamando a função express

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "http://localhost:3002");
    app.use(cors());
    next();
});

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