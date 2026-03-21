const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const usuarioModel = require("../models/usuarioModel")

const cadastrarUsuario = async (req, res) => {

    try {

        const { nome, email, senha } = req.body

        const senhaHash = await bcrypt.hash(senha, 10)

        const usuario = {
            nome,
            email,
            senha: senhaHash
        }

        const resultado = await usuarioModel.createUser(usuario)

        res.status(201).json({
            mensagem: "Usuário criado com sucesso",
            id: resultado.insertId
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            erro: "Erro ao criar usuário"
        })

    }

}

const login = async (req, res) => {

    try {

        const { email, senha } = req.body

        const usuario = await usuarioModel.getUserByEmail(email)

        if (!usuario) {
            return res.status(401).json({
                erro: "Email ou senha inválidos"
            })
        }

        const senhaValida = await bcrypt.compare(
            senha,
            usuario.senha
        )

        if (!senhaValida) {
            return res.status(401).json({
                erro: "Email ou senha inválidos"
            })
        }

        const token = jwt.sign(
            { id: usuario.id },
            "segredo_super_secreto",
            { expiresIn: "1d" }
        )

        res.json({
            mensagem: "Login realizado",
            token
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            erro: "Erro no login"
        })

    }

}

module.exports = {
    cadastrarUsuario,
    login
}