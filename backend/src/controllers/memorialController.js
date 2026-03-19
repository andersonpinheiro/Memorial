const memorialModel = require("../models/memorialModel")

const listarMemoriais = async (req, res) => {

    try {

        const memoriais = await memorialModel.getAllMemoriais()

        res.json(memoriais)

    } catch (error) {

        res.status(500).json({ erro: "Erro ao buscar memoriais" })

    }

}

module.exports = {
    listarMemoriais
}