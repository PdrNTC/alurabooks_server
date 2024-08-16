const { Router } = require("express"); // Importando o Router para criar as rotas
const { getLivros, getLivro, postLivro } = require("../controllers/livro");

const router = Router();

// Rota com o método GET obter dados
router.get("/", getLivros)

router.get("/:id", getLivro)

// Rota com o método POST para inserir dados
router.post('/', postLivro)

// Rota com o método PATCH para atualizar dados
router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo patch')
})

// Rota com o método delete para deletar dados
router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo delete')
})

module.exports = router // exportando igual ao react para usar em outros arquivos.