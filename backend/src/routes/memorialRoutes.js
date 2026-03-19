const express = require("express")

const router = express.Router()

const memorialController = require("../controllers/memorialController")

router.get("/memoriais", memorialController.listarMemoriais)

module.exports = router