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

module.exports = {
    getAllMemoriais
}