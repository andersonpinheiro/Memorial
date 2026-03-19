const express = require("express")
const cors = require("cors")

const memorialRoutes = require("./routes/memorialRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", memorialRoutes)

app.get("/", (req, res) => {
    res.json({ message: "API Memorial funcionando" })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})