const slugify = require("slugify")

function gerarSlug(texto) {

    return slugify(texto, {
        lower: true,
        strict: true,
        locale: "pt"
    })

}

module.exports = gerarSlug