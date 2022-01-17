## CHALLENGE ELDORADO FRONT-BACK

Antes de tudo, você precisa ter instalado o angular versão 13.1.0 e o node v12.10.0 ou superiores. Fique atento também as dependencias das duas tecnologias.

Para garantir de que está tudo atualizado, rode esse comando aqui tanto no frontend, tanto no backend:

$ npm install

### FRONTEND

o Frontend foi criado usando componentes de header, menu, main e footer para facilitar o carregamento de todos os itens.

Foi desenvolvido a tela de Dispositivos Cadastrados, Categorias Cadastradas, Adicionar novo Cadastrado e Adicionar nova Categoria.

Entretanto, por complicações com o backend não foi possivel concluir o projeto. Ficou faltando o desenvolvimento do tratamento de dados dos formularios de adição de categoria e dispositivo, além da chamada das rotas para trazer os dados do banco.

Para rodar o Frontend, é necessario seguir os comandos abaixo:

$ cd front

$ nvm use 17

$ ng serve --open

### BACKEND

O backend foi criado pensando em automatizar a criação do banco de dados usando o sequelize e o migrations. Depois do banco criado, o banco será conectado com o back pelo arquivo connection.js. O arquivo routes.js foi criado com o pensamento de conectar o frontend do angular com o banco.

Infelizmente não foi possivel terminar o projeto no prazo, pois ocorreu varias complicações com o backend, erro na chamada de banco, acesso negado nas requisicoes de criação de banco pelo MySQL e também falhas na hora de conectar o frontend com a API.

Para rodar o Backend, é necessario seguir os comandos abaixo:

$ cd back

$ nvm run dev

Para migrar o banco atraves do Sequelize é necessario rodar:

$ sequelize migration:generate --name create

$ sequelize db:migrate

### BANCO DE DADOS

O nome do banco de dados é dbchallenge e ele é um banco bem simples com apenas duas tabelas que serão montados com os comandos que estão no arquivo "scriptDB.txt".

A primeira tabela é a  Category, aqui será cadastrado todos as categorias dos dispositivos.
a outra tabela é a Device, aonde teremos os dados dos dispositivos cadastrados com os IDs da categoria selecionados no Fronted.


### REQUISITOS DO PROJETO

- [X] Devices have (Id, category, color,partNumber). 

- [X] Category have (id, name).

- [X] You must implement Create, Read and Delete.

Device: 

- [X] Id: (generated automatically. Integer and incremental)

- [ ] Category: A dropdown selection you can choose from all categories available.

- [X] Color: Text field, with validation (letters only, max size 16)

- [X] partNumber: positive integer field, with validation.
Category:

- [X] Id: (generated automatically, integer and incremental)

- [X] Name: Must not be empty. All categories must have a name. Max size 128 chars.

- [X] All fields are mandatory.

- [X] You are free to use any layout but the APP must list all devices and categories, and also
have screens/components that enable the user to create new categories and devices, or
delete them.

- [X] Front End must be implemented with Angular 8 or above.

- [X] Backend must be implemented in NodeJS (version 10 or above).
 
- [ ] [Automated tests on the backend is not mandatory but is a PLUS.]

- [X] Devices and Categories MUST be persisted on a MySQL database.

- [X] You must provide the script (SQL or any database versioning/migration script) that can create the database from scratch.

- [X] Use GIT, commit every progress you made, and share your cond on a github public
repository.
