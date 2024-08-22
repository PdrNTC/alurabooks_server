const express = require("express") // Importando o express
const rotaLivro = require("./rotas/livro.js")
const rotaFavorito = require("./rotas/favorito.js")
const cors = require("cors");

const app = express() // Criando o app com a função do express
app.use(express.json()) // Aplicação aceitando bodys do tipo JSON
app.use(cors({origin: "*"})) // Permissões para API liberando para todas portas
const port = 8000 // porta onde o servidor back irá rodar

app.use('/livros',rotaLivro);
app.use('/favoritos',rotaFavorito);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})