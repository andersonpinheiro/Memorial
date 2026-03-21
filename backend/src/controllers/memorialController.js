const memorialModel = require("../models/memorialModel")

const listarMemoriais = async (req, res) => {

    try {

        const memoriais = await memorialModel.getAllMemoriais()

        res.json(memoriais)

    } catch (error) {

        res.status(500).json({ erro: "Erro ao buscar memoriais" })

    }

}

const criarMemorial = async (req, res) => {

    try {

        const memorial = req.body

        const resultado = await memorialModel.createMemorial(memorial)

        res.status(201).json({
            mensagem: "Memorial criado com sucesso",
            id: resultado.insertId
        })

    } catch (error) {

        res.status(500).json({
            erro: "Erro ao criar memorial"
        })

    }

}

module.exports = {
    listarMemoriais,
    criarMemorial
}