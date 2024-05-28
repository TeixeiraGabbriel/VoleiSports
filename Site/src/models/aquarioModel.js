var database = require("../database/config");

function buscarAcessos(idUsuario) {

  var instrucaoSql = `SELECT * FROM acesso a WHERE fk_usuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(fk_usuario) {
  
  var instrucaoSql = `INSERT INTO (fk_usuario) acesso VALUES (${fk_usuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAcessos,
  cadastrar
}
