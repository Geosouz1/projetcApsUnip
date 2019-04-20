const express = require('express');
const rota = express.Router();



rota.post('/',(req, res) => {
    return res.send({message: 'Tudo OK com o método vr da vr'})
});
module.exports= rota;