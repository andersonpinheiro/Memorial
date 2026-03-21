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

const buscarMemorial = async (req, res) => {

    try {

        const id = req.params.id

        const memorial = await memorialModel.getMemorialById(id)

        if (!memorial) {
            return res.status(404).json({
                erro: "Memorial não encontrado"
            })
        }

        res.json(memorial)

    } catch (error) {

        res.status(500).json({
            erro: "Erro ao buscar memorial"
        })

    }

}

module.exports = {
    listarMemoriais,
    criarMemorial,
    buscarMemorial
}