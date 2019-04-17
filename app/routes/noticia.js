//executa uma funcao ao chamar o dominio /noticias
module.exports = function(app) {
    
    app.get('/noticia', function(request, response){
        
        console.log("[DEBUG] - Servico /noticia iniciado");

        var connection = app.config.dbConnection();

        var selectAll = 'select * from noticias where id_noticia = 1;';

        connection.query(selectAll, function(error, result){
        
            if(error) {
                console.log('[ERROR] - Erro ao consultar a tabela noticias');
                throw error;                      
            } else {
                console.log('[DEBUG] - Consulta a tabela noticias realizada com sucesso');
                response.render("noticias/noticia", {noticia : result});
            }
            
        });
    });
};