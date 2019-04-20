const express = require('express');
const rota = express.Router();



rota.post('/estado',(req, res) => {
    return res.send({senario: 'cenario1', estado: 1})
});

rota.post('/acao',(req, res) => {
    return res.send({acao:'aqui talvez uma possivel acao'});
})
module.exports= rota;