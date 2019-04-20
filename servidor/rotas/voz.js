const express = require('express');
const rota = express.Router();


rota.post('/',(req, res) => {
    return res.send({message: 'recebe a string falada por post da voz'})
});
module.exports= rota;