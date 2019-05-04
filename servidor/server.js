const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//String de conexão
const url = 'mongodb://localhost:27017/aps';
const options = {reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true};

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err)=>{
  console.log('Erro na conexão com o banco de dados!');
})

mongoose.connection.on('disconnected', ()=>{
  console.log('Aplicação desconectada do banco de dados')
})


mongoose.connection.on('connected',()=>{
  console.log('Aplicação conectada com sucesso');
})


server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());



const indexRota = require('./rotas/index');
const hologramaRota = require('./rotas/holograma');
const vozRota = require('./rotas/voz');
const vaRota = require('./rotas/va');
const vrRota = require('./rotas/vr');
const aprendizagemRota = require('./rotas/aprendizagem');

server.use('/', indexRota);
server.use('/holograma', hologramaRota);
server.use('/voz',vozRota);
server.use('/va',vaRota);
server.use('/vr',vrRota);
server.use('/aprendizagem',aprendizagemRota);






server.listen(3001, () =>{
    console.log('servidor on na porta http://localhost:3001')
    console.log('para derrubar use ctrl+c')
} );