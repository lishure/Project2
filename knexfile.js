module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'nodeuser',
      password: '',
      database: 'buyersdb',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'nodeuser',
      password: '',
      database: 'buyersdb',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_URL,
      port: 3306,
      user: 'nodeuser',
      password: '',
      database: 'buyersdb'
    }
  }
}