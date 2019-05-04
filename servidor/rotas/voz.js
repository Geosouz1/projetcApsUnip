const express = require('express');
const rota = express.Router();
const Fala = require('../model/fala');
var falar="sem voz" ;


rota.get('/',(req, res) => {
    Fala.find({}, (err,data) =>{
        if(err) return res.send({error: 'Erro na consulta de usuário'});
        return res.send(data);
    });
});

rota.post('/create',(req, res)=>{
    const {fala, nomearquivo, descricao}=req.body;

    if (!fala || !nomearquivo) return res.send({error: 'Dados Insuficientes'});

    Fala.findOne({fala}, (err, data)=>{
        if(err) return res.send({error: 'Erro ao buscar fala'});
        if(data) return res.send({error: 'fala já resgistrado!'});
    
    
        Fala.create(req.body, (err, data)=>{
            if(err) return res.send({error: 'Erro ao criar fala'});
            return res.send(data);
        });
    });
});

    
module.exports= rota;