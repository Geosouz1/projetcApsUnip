var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};



app.get('/', function (req, res) {
  res.redirect('/1');
});
app.use(myLogger);

app.get('/1',(req, res)=>{
	res.send("myLogger")
})
app.listen(3000);