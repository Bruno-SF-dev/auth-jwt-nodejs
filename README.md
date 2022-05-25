## Rodando localmente

1. Clone esse repositório.

2. Navegue até a pasta do projeto:

```sh
  cd ./auth-jwt-nodejs
```

3. Instale as dependências:

```sh
  npm i
```

4. Defina as variáveis ambiente no arquivo `.env` na raiz:

5. Inicie o servidor:

```sh
  npm run dev
```

6. Acesse
   <a href="http://localhost:3333/" target="_blank">http://localhost:3333/</a>

## Criar usuário
Para criar um novo `user` envie, para o endpoint `/create-user`, no _body_ da requisição:

``
{
	"name": "Usuário",
	"email": "emaildousuario@gmail.com",
	"password": "senha-do-usuário"
}
`` 

## Autenticação do usuário
Para autenticar um `user` envie, para o endpoint `/auth`, no _body_ da requisição:

``
{
	"email": "emaildousuario@gmail.com",
	"password": "senha-do-usuário"
}
`` 

## Buscar os dados do usuário para controle
Para pegar os dados de um `user` cadastrado envie, para o endpoint `/user-data`, no _Header_ da requisição:

``
Authorization: "Bearer <token>"
`` 

sendo `<token>`, o valor do Token JWT recebido na resposta da autenticação.
