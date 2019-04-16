
var mysql = require('mysql');
        
var connMySQL = function() {
    console.log("[DEBUG] - Conexao ao banco de dados realizada com sucesso");        
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '123',
        database : 'portal_noticias'    
    });
}

module.exports = function() {
    console.log('DEBUG - Autoload carregou o modulo de conexao com banco de dados com sucesso');
    return connMySQL;
};    

        
