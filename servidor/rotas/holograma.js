const express = require('express');
const rota = express.Router();
const voz = require('../rotas/voz');
var error;



rota.get('/',(req, res) => {
    return res.send({message: 'Tudo OK com o método post do holograma'})
});

rota.post('/envia',(req, res)=>{
return res.send({string:"Aqui vai uma variavel"});
})

rota.post('/recebe',(req, res)=>{
return res.send({string:error});
})



module.exports= rota;