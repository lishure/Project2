
module.exports = {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'nodeuser',
      password: '',
      database: 'buyersdb',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  }