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

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json")) // Alterando para let para modificar a variavel
    const indiceASerModificado = livrosAtuais.findIndex(livro => livro.id === id) // descobrindo o indice do livro

    // criando um objeto com todos os campos do objeto no indice a ser modificado
    // e passando as modificacoes para comparar se está diferente para atribuir no objeto[indiceASerModificado]
    // se não existir coisas no modificacoes ele cria também no objeto livrosAtuais
    const conteudoMudado = { ...livrosAtuais[indiceASerModificado], ...modificacoes }
    
    // atribuindo o novo objeto a let de livros
    livrosAtuais[indiceASerModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deleteLivroPorId(id) {
    // Alterando para let para modificar a variavel de lista dos livros
    const livros = JSON.parse(fs.readFileSync("livros.json")) 

    // Filtrando todos os livros menos ao do ID selecionado então (Deletando ele)
    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}


// Exportando as funções
module.exports = {
    getTodosLivros,
    getLivroPorId,
    InsereLivro,
    modificaLivro,
    deleteLivroPorId
}