const config = require('../knexfile.js')
const knex = require('knex')(config)

// Cria as migrations, ou seja, sempre que subir o backend as tabelas serao criadas 
// conforme configuração nas migrations
knex.migrate.latest([config])
module.exports = knex