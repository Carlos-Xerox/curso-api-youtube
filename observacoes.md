## Requisitos
1. Node.js


Packet Manager - npm - tipo o google store - bibliotecas que vão facilitar o desenvolvimento



1º passo
npm init -y
-y para responder sim para as varias perguntas do npm init

comum nomear o arquivo principal de server.js

express - npm i express - biblioteca


-----
criar rotas para comunicação (requisição-resposta) do front e back (é nisso que o express vai ajudar)
- get
- post
- delete
- put

rota = comunicação do front e back
------------------
Métodos HTTP
Get - Listar
Post - Criar
Put - Editar vários
Patch - Editar um
Delete - Deletar


AO FAZER UMA ALTERAÇÃO NO SERVIDOR TEMOS QUE FECHAR E ABRIR NOVAMENTE
    mas isso pode ser contornado com uma feature nova experimental node --watch server.js

EXISTEM TRES FORMAS DE REQUEST

TRES FORMAS DE PEDIR INFORMAÇÕES
QUERY PARAMS (GET) - CONSULTAS - perguntando informações na URL - faça uma pequisa no google e observe a barra de pesquisa
    Posso usar colocando um ponto de interrogação depois da rota e após ele tudo vai se tornar uma "variável", pra separar informações nesse caso utilizamos &
    Ex. servidor.com/usuarios?estado=bahia&cidade=salvador
    Observe que esse método não é ideal em muitos casos, em caso de uma compra não é inteligente colocar os dados do usuario no navegador