# knowledge
Projeto final do curso de Node.JS do Leonardo Leitão

#Executar Projeto na Versao Final
* Executar mongod (cmd) - Startar o MongoDB
* Executar psql -U postgres (cmd) - Start no Postgres
* Executar npm start (dentro da pasta backend)
* Executar npm run serve -- --port 8081 (dentro da pasta frontend)

#Anotações de Desenvolvimento
* Criar uma Migration -- knex migrate:make create_table_xxx
* Rodar uma Migration (executar a criação das tabelas ) - knex migrate:latest
* Desfazer migration (rollback) - knex migrate:rollback

#Arquivo .env (na raiz do projeto) ver última aula do backend
