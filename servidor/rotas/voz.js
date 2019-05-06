const express = require('express');
const rota = express.Router();
const Fala = require('../model/fala');
const Ouvir = require('../model/ouvir')


rota.get('/',(req, res) => {
    res.send('testando o teste');
});

rota.post('/ouvir',(req, res) =>{
    const  {esculta} = req.body;
    console.log(req.body);
    if(!esculta) return res.send({error:'Não entendi'});

    Ouvir.findOne({esculta}, (err, data)=>{
        if(err) return res.send({error: 'Erro na pesqusa'});
        if(data){
        return res.send({error: data.esculta});
         }else{
            return res.send("Não entendi");
         }
    });
  });
  
rota.post('/falar',(req, res) => {
return res.send(falar)
});



module.exports= rota;