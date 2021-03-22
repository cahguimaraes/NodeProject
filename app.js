const app = require('./config/server');

app.get("/", (res) => { //configurando a rota para o método GET Default
    return res.json({
        mensagem: "Seja bem-vindo",
        back: "Aplicação Back-End criada em NodeJs",
        front: "Aplicação Front-End criada em Html com React",
        autor: "Caroline Guimarães"
    });
});