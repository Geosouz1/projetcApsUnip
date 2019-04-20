const express = require('express');
const server = express();

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


server.listen(3001, () =>{
    console.log('servidor on na porta http://localhost:3001')
    console.log('para derrubar use ctrl+c')
} )