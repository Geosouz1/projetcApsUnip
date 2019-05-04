const express = require('express');
const rota = express.Router();
const escultas = require('../model/ouvir');
const falas = require('../model/fala');

rota.get('/',(req, res)=>{
    return res.send('Tudo pronto para começar a treinar');
});

rota.post('/ouvir',(req, res) =>{
  const  {id_esculta, esculta, descricao} = req.body;
  console.log(req.body);
  if(!id_esculta || !esculta) return res.send({error:'faltando String esculta'});

  escultas.findOne({esculta}, (err, data)=>{
      if(err) return res.send({error: 'Erro na pesqusa'});
      if(data) return res.send({error: 'Voz já cadastrada'});

      escultas.create(req.body, (err, data) =>{
        if(err) return res.send({error: 'Erro ao criar fala'});
        return res.send(data);
    });
  });
});

rota.post('/resposta', (req, res)=>{
    const{id_fala, fala, descrucao } = req.body;
    if(!id_fala || !fala) return res.send({error:'Faltando String de fala'});
    falas.findOne({fala}, (err, data) =>{
        if(err) return res.send({error: 'Erro na pesquisa'});
        if(data) return res.send({error: 'Voz já cadastrada'});
        falas.create(req.body, (err, data)=>{
            if(err) return res.send({error: 'Erro ao criar resposta'});
            return res.send(data);
        });
    });
});

module.exports = rota ;