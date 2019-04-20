const express = require('express')
const server = express()
var oi;

var myLogger = function (req, res, next) {
     oi = ' Unity Iniciou';
    next();
  };
  
  

server.get('/', (req, res) =>{
res.send('<h1>'+oi+'</h1>')
})

server.post('/teste', (req,res) =>{
res.send('funciona')
})

server.put('/upload',(req,res)=> {
	oi = myData;
	res.send('unity Iniciou')
})

server.use(myLogger);

server.get('/teste1', (req, res) =>{
    res.send('<h1>'+oi+' </h1>')
})

server.get('/unity',(req, res) =>{
	res.send('pula');
})

server.listen(3001, () =>{
    console.log('servidor on na porta http://localhost:3001')
    console.log('para derrubar use ctrl+c')
} )