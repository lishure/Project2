require('dotenv').config()
const path = require('path')

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      user: process.env.dbUser,
      password: process.env.dbPassword,
      host: process.env.dbServer,
      port: process.env.dbPort,
      database: process.env.db,
      debug: ['ComQueryPacket', 'RowDataPacket']
    },
    migrations: {
      directory: path.join(__dirname, '/knex/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/knex/seeds')
    }
  },

  production: {
    client: 'cleardb',
    connection: {
      user: process.env.USER,
      password: process.env.PASSWORD,
      host: process.env.HOST,
      port: 3306,
      database: process.env.DATABASE
    },
    migrations: {
      directory: path.join(__dirname, '/knex/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/knex/seeds')
    }
  }
}