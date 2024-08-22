const { getTodosFavoritos, deletaFavoritoPorId, insereFavorito} = require("../servicos/favorito")

function getFavoritos (req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
        //throw new Error("teste de erro") // Jogando erro proposital para testar
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito (req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201) // status de criação do elemento.
        res.send("Favorito inserido com sucesso!")
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaFavoritoPorId(id)
            res.send("Favorito Deletado com sucesso!")
        } else {
            res.status(422)
            res.send("Id Inválido!")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    deleteFavorito,
    postFavorito
}