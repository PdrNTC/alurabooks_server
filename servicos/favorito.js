const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id) {
    const todosFavoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livrosFiltrados = todosFavoritos.filter(favorito => favorito.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find(livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}


module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito,
}
