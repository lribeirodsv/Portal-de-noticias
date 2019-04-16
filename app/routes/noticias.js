//executa uma funcao ao chamar o dominio /noticias
module.exports = function(app) {
    
    app.get('/noticias', function(request, response){
        
        console.log("[DEBUG] - Servico /noticias iniciado");

        var mysql = require('mysql');
        
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '123',
            database : 'portal_noticias'    
        });

        connection.connect(function(error) {
            if (error) throw error;
            console.log("[DEBUG] - Conexao ao banco de dados realizada com sucesso");
        });

        var selectAll = 'select * from noticias;';

        connection.query(selectAll, function(error, result){

            if(error == null){
                response.render("noticias/noticias", {noticias : result});
                console.log('[DEBUG] - Consulta a tabela noticias realizada com sucesso');
            } else {
                console.log('[ERROR] - Erro ao consultar a tabela noticias\n');
                console.log(error);
            }
            
        });
    });
};