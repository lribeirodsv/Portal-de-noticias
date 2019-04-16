var express = require('express');      
var consign = require('consign');

var app = express();                                
app.set('view engine' , 'ejs');               //define o engine de views do express para que seja a engina do EJS
app.set('views'       , './app/views');       //define o diretorio padrao para encontrar as views        

consign().include('./app/routes').into(app);        //inclui todos os modulos de rotas no nosso servidor

module.exports = app;