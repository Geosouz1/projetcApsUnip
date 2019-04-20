const express = require('express');
const rota = express.Router();



rota.post('/',(req, res) => {
    return res.send({message: 'Tudo OK com o método post do holograma'})
});

rota.post('/ola',(req, res) =>{
    
    return res.send({name: 'O nome dela é ...'});
});

rota.post('/acao', (req, res) =>{

    return res.send({acao1: 'Aqui vai a qual acao tomar...'});
})




module.exports= rota;