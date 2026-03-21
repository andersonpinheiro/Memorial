const express = require("express")

const router = express.Router()

const memorialController = require("../controllers/memorialController")

router.get("/memoriais", memorialController.listarMemoriais)

router.post("/memoriais", memorialController.criarMemorial)

router.get("/memoriais/:id", memorialController.buscarMemorial)

router.put("/memoriais/:id", memorialController.atualizarMemorial)

router.delete("/memoriais/:id", memorialController.deletarMemorial)

module.exports = router