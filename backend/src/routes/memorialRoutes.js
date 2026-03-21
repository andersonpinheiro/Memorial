const express = require("express")

const router = express.Router()

const memorialController = require("../controllers/memorialController")

router.get("/memoriais", memorialController.listarMemoriais)

router.post("/memoriais", memorialController.criarMemorial)

router.get("/memoriais/:id", memorialController.buscarMemorial)

module.exports = router