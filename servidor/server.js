const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var resposta;

//Rotas

const indexRota = require('./rotas/index');
const hologramaRota = require('./rotas/holograma');
const vozRota = require('./rotas/voz');
const vaRota = require('./rotas/va');
const vrRota = require('./rotas/vr');

server.use('/', indexRota);
server.use('/holograma', hologramaRota);
server.use('/voz',vozRota);
server.use('/va',vaRota);
server.use('/vr',vrRota);


server.get('/envia',(req, res) => {
	let re = req.query;
	resposta = re.frase
    return res.send(`resposta 	UI`+resposta)
});
server.get('/recebe',(req, res) => {
    return res.send(`resposta 	UI`+resposta)
});


let config = {
  user: 'hologramadb',
  database: 'hologramadb',
  password: 'Ge5ouza93',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

const pg = require('smn-pg')(config);


//iniciando server
server.listen(3001, () =>{
    console.log('servidor on na porta http://localhost:3001')
    console.log('para derrubar use ctrl+c')
} );