const fs = require("fs")

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json") )
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    //const livroEncontrado = livros.map((livro) => livro.id === id)
    const livroFiltrado = livros.filter( livro => livro.id === id )
    return livroFiltrado
}

function InsereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaDeLivros = [...livros, livroNovo]//Criando a nova lista com tudo que tinha mais o novoLivro

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))//Salvando a nova lista sobrescrevendo a outra

    return novaListaDeLivros
}

// Exportando as funções
module.exports = {
    getTodosLivros,
    getLivroPorId,
    InsereLivro
}