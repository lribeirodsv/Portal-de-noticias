var app = require("./config/server"); 

//sobe o servidor na porta 3000 e executa a funcao de callback
console.log("[DEBUG] - Starting server...");
app.listen(3000, function(){
    console.log("[DEBUG] - Server started successfully");
});