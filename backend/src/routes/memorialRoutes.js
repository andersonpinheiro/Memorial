const express = require("express")

const router = express.Router()

const memorialController = require("../controllers/memorialController")

router.get("/memoriais", memorialController.listarMemoriais)

router.post("/memoriais", memorialController.criarMemorial)

module.exports = router