const express = require('express');
const rota = express.Router();
var resposta;

rota.get('/',(req, res) => {
	let re = req.query;
	resposta = re.frase
    return res.send(`resposta 	UI`+resposta)
});

rota.post('/',(req, res) => {
	let re = req.query;
	resposta = re;
    return res.send({message: 'Tudo OK com o método post da raiz'+re.frase})
});
module.exports= rota;