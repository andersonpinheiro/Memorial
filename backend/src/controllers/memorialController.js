const memorialModel = require("../models/memorialModel")
const gerarSlug = require("../utils/slug")

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

        const dados = req.body

        dados.slug = gerarSlug(dados.nome_falecido)

        if (req.file) {
            dados.foto = req.file.filename
        }

        const resultado = await memorialModel.createMemorial(dados)

        res.status(201).json({
            mensagem: "Memorial criado com sucesso",
            id: resultado.insertId
        })

    } catch (error) {

        console.log(error)

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

const atualizarMemorial = async (req, res) => {

    try {

        const id = req.params.id
        const dados = req.body

        const resultado = await memorialModel.updateMemorial(id, dados)

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: "Memorial não encontrado"
            })
        }

        res.json({
            mensagem: "Memorial atualizado com sucesso"
        })

    } catch (error) {

        res.status(500).json({
            erro: "Erro ao atualizar memorial"
        })

    }

}

const deletarMemorial = async (req, res) => {

    try {

        const id = req.params.id

        const resultado = await memorialModel.deleteMemorial(id)

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: "Memorial não encontrado"
            })
        }

        res.json({
            mensagem: "Memorial deletado com sucesso"
        })

    } catch (error) {

        res.status(500).json({
            erro: "Erro ao deletar memorial"
        })

    }

}

const buscarMemorialPorSlug = async (req, res) => {

    try {

        const slug = req.params.slug

        const memorial = await memorialModel.getMemorialBySlug(slug)

        if (!memorial) {
            return res.status(404).json({
                erro: "Memorial não encontrado"
            })
        }

        res.json(memorial)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            erro: "Erro ao buscar memorial"
        })

    }

}

module.exports = {
    listarMemoriais,
    criarMemorial,
    buscarMemorial,
    buscarMemorialPorSlug,
    atualizarMemorial,
    deletarMemorial
}