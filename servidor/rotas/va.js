const express = require('express');
const rota = express.Router();

rota.get('/',(req, res) => {
    return res.send({message: 'Tudo OK com o método get da va'})
});

rota.post('/',(req, res) => {
    return res.send({message: 'Tudo OK com o método vr da vr'})
});
module.exports= rota;