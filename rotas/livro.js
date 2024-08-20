const { Router } = require("express"); // Importando o Router para criar as rotas
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controllers/livro");

const router = Router();

// ###### GETs ###### //

// Rota com o método GET obter dados
router.get("/", getLivros)

router.get("/:id", getLivro)

// ###### POST ###### //

// Rota com o método POST para inserir dados
router.post('/', postLivro)

// ###### PATCH ###### //

// Rota com o método PATCH para atualizar dados dos livros
router.patch('/:id', patchLivro)

// ###### DELETE ###### //
// Rota com o método delete para deletar dados
router.delete('/:id', deleteLivro)

module.exports = router // exportando igual ao react para usar em outros arquivos.