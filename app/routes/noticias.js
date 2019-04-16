var dbConnection = require('../../config/dbConnection');

//executa uma funcao ao chamar o dominio /noticias
module.exports = function(app) {
    
    app.get('/noticias', function(request, response){
        
        console.log("[DEBUG] - Servico /noticias iniciado");

        var connection = dbConnection();

        connection.connect(function(error) {
            if (error) {
                console.log('[ERROR] - Erro ao conectar no banco de dados');
                throw error;
            } else { 
                console.log("[DEBUG] - Conexao ao banco de dados realizada com sucesso");                
                
                var selectAll = 'select * from noticias;';

                connection.query(selectAll, function(error, result){
        
                    if(error){
                        console.log('[ERROR] - Erro ao consultar a tabela noticias');
                        throw error;                      
                    } else {
                        console.log('[DEBUG] - Consulta a tabela noticias realizada com sucesso');
                        response.render("noticias/noticias", {noticias : result});
                    }
                });
            }
        });
    });
};