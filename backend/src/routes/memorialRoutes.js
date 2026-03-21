const express = require("express")

const router = express.Router()

const memorialController = require("../controllers/memorialController")

const upload = require("../middleware/upload")

router.get("/memoriais", memorialController.listarMemoriais)

router.post("/memoriais",upload.single("foto"),memorialController.criarMemorial)

router.get("/memoriais/:id", memorialController.buscarMemorial)

router.get("/memorial/:slug", memorialController.buscarMemorialPorSlug)

router.put("/memoriais/:id", memorialController.atualizarMemorial)

router.delete("/memoriais/:id", memorialController.deletarMemorial)


module.exports = router