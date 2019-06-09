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

  staging: {
    client: 'mysql',
    connection: {
      user: process.env.dbUser,
      password: process.env.dbPassword,
      host: process.env.dbServer,
      port: process.env.dbPort,
      database: process.env.db,
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  production: {
    client: 'mysql',
    connection: {
      user: '',
      password: '',
      host: process.env.DATABASE_URL,
      port: 3306,
      database: process.env.db
    }
  }
}
