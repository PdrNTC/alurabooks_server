const fs = require("fs"); // Biblioteca para ler arquivos

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));
const novoDado = { id: "3", nome: "Livro três inserido" }

// Pegando toda a lista com o ...dadosAtuais e adicionando mais um novoDado
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync("livros.json")));