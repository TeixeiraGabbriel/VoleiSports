var express = require("express");
var router = express.Router();

var acessoController = require("../controllers/aquarioController");

router.get("/:fk_usuario", function (req, res) {
  acessoController.buscarAcessos(req, res);
});

router.post("/cadastrar", function (req, res) {
  acessoController.cadastrar(req, res);
})

module.exports = router;