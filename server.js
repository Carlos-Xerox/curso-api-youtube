import express from 'express';

const app = express();

app.get('/usuarios', (req, res) => {
    res.send('Ok, deu bom');
})

app.listen(3000);


/* 
As rotas precisam
1) Tipo de Rota / Método HTTP
2) Endereço
    www.lojadoseuzé.com/produtos


    requsição - resposta
    request - respose
    req - res


    método send do express - envia uma resposta

    tenho que indicar onde o servidor vai rodar, no caso do nosso pc temos que indicar a porta, normalmente usamos a 3000

    add no package.json "type": "module",

    por padrão o navegador acessa os caminhos pelo método get, então no desenvolvimento nos temos que utilizar alguma ferramenta para nos auxiliar a enxergar as respostas
    para isso podemos usar a extensão thunder client do vscode

    objetivo criar api de usuarios

     - criar um usuario
    - listar todos os usuarios
    - editar um usuário
    - deletar um usuário
*/