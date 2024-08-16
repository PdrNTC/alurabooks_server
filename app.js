const express = require("express") // Importando o express
const rotaLivro = require("./rotas/livro.js")

const app = express() // Criando o app com a função do express
app.use(express.json()) // Aplicação aceitando bodys do tipo JSON
const port = 8000 // porta onde o servidor back irá rodar

app.use('/livros',rotaLivro);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})