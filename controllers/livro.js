const { getTodosLivros, getLivroPorId, InsereLivro, modificaLivro, deleteLivroPorId } = require("../servicos/livro")

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

        //Verificando se o ID recebido é numero.
        if (id && Number(id)) {
            const livro = getLivroPorId(id)  
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro (req, res) {
    try {
        const livroASerInserido = req.body // pegando os dados da requisicao 

        if (req.body.nome) {
            InsereLivro(livroASerInserido)
            res.status(201) // status de criação do elemento.
            res.send("Livro inserido com sucesso!")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body

            modificaLivro(body, id)
            res.send("Livro modificado com sucesso!")
        } else {
            res.status(422)
            res.send("Id Inválido!")
        }
  
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteLivroPorId(id)
            res.send("Livro Deletado com sucesso!")
        } else {
            res.status(422)
            res.send("Id Inválido!")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

// Exportando as funções para usar
module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}
