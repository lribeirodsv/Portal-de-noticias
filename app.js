var app = require("./config/server"); 

var rotaNoticias      = require('./app/routes/noticias')(app);
var rotaHome          = require('./app/routes/home')(app);
var rotaFormINoticias = require('./app/routes/formINoticia')(app);

//var msg = require("./modulos/mod_teste"); 

//sobe o servidor na porta 3000 e executa a funcao de callback
console.log("[DEBUG] - Starting server...");
app.listen(3000, function(){
    console.log("[DEBUG] - Server started successfully");
});