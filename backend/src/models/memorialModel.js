const db = require("../config/database")

const getAllMemoriais = () => {
    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM memoriais"

        db.query(sql, (err, result) => {

            if (err) {
                reject(err)
            } else {
                resolve(result)
            }

        })

    })
}

const createMemorial = (memorial) => {
    return new Promise((resolve, reject) => {

        const sql = `
        INSERT INTO memoriais
        (nome_falecido, cidade, biografia)
        VALUES (?, ?, ?)
        `

        db.query(
            sql,
            [memorial.nome_falecido, memorial.cidade, memorial.biografia],
            (err, result) => {

                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }

            }
        )

    })
}

const getMemorialById = (id) => {
    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM memoriais WHERE id = ?"

        db.query(sql, [id], (err, result) => {

            if (err) {
                reject(err)
            } else {
                resolve(result[0])
            }

        })

    })
}

module.exports = {
    getAllMemoriais,
    createMemorial,
    getMemorialById
}