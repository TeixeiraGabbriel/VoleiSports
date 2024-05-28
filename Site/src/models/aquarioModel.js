var database = require("../database/config");

function exibirAquariosDoUsuario() {

  var instrucaoSql = `SELECT count(id) as Quantidade FROM usuarioCadastro`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// function cadastrar(idUsuario) {
  
//   var instrucaoSql = `INSERT INTO (fk_usuario) usuarioCadastro VALUES (${idUsuario})`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }


module.exports = {
  exibirAquariosDoUsuario,
}
