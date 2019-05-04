const express = require('express');
const rota = express.Router();

rota.get('/',(req, res) => {
    return res.send(`resposta 	metodo get raiz`)
});

rota.post('/',(req, res) => {
    return res.send({message: 'Tudo OK com o método post da raiz'})
});
module.exports= rota;