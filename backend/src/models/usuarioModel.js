const db = require("../config/database")

const createUser = (usuario) => {

    return new Promise((resolve, reject) => {

        const sql = `
        INSERT INTO usuarios (nome, email, senha)
        VALUES (?, ?, ?)
        `

        db.query(
            sql,
            [usuario.nome, usuario.email, usuario.senha],
            (err, result) => {

                if (err) reject(err)
                else resolve(result)

            }
        )

    })

}

const getUserByEmail = (email) => {

    return new Promise((resolve, reject) => {

        const sql = `
        SELECT * FROM usuarios WHERE email = ?
        `

        db.query(sql, [email], (err, result) => {

            if (err) reject(err)
            else resolve(result[0])

        })

    })

}

module.exports = {
    createUser,
    getUserByEmail
}