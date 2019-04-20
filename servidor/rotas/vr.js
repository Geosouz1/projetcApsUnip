const express = require('express');
const rota = express.Router();

rota.get('/',(req, res) => {
    return res.send({message: 'Tudo OK com o método get da vr'})
});

rota.post('/',(req, res) => {
    return res.send({message: 'Tudo OK com o método post da vr'})
});
module.exports= rota;