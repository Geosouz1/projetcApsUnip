const express = require('express')
const server = express()
var oi;

var myLogger = function (req, res, next) {
     oi = 'oi teste';
    next();
  };
  
  

server.get('/', (req, res) =>{
res.send('<h1>'+oi+'</h1>')
})

server.post('/teste', (req,res) =>{
res.send('funciona')
})

server.use(myLogger);

server.get('/teste1', (req, res) =>{
    res.send('<h1>'+oi+' </h1>')
})

server.listen(3001, () =>{
    console.log('servidor on na porta http://localhost:3001')
    console.log('para derrubar use ctrl+c')
} )