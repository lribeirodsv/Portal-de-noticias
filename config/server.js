//retorna uma funcao para a variavel express
var express = require('express');                   

//executa a funcao retornada pelo express
var app = express();                                

app.set('view engine' , 'ejs');               //define o engine de views do express para que seja a engina do EJS
app.set('views'       , './app/views');       //define o diretorio padrao para encontrar as views        

module.exports = app;