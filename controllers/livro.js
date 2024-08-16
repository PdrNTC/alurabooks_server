const { getTodosLivros, getLivroPorId, InsereLivro } = require("../servicos/livro")

function getLivros (req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
        //throw new Error("teste de erro") // Jogando erro proposital para testar
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro (req, res) {
    try {
        const id = req.params.id // parametros da requisicao enviado
        const livro = getLivroPorId(id)  
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro (req, res) {
    try {
        const livroASerInserido = req.body // pegando os dados da requisicao 
        InsereLivro(livroASerInserido)
        res.status(201) // status de criação do elemento.
        res.send("Livro inserido com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

// Exportando as funções para usar
module.exports = {
    getLivros,
    getLivro,
    postLivro
}
