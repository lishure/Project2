const knex = require('../config/connection.js')

class Chat {
  constructor (table = 'chat') {
    this.table = table
  }
  findAll () {
    return knex.select()
      .table(this.table)
  }

  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }

  getID (where) {
    return knex.select()
      .table(this.table)
      .where(where)
  }

  update (where, values) {
    return knex
      .table(this.table)
      .where(where)
      .update(values)
  }

  destroy (where) {
    return knex(this.table)
      .where(where)
      .del()
  }

  reset () {
    return knex(this.table)
      .where(where)
      .del()
  }

  destroy (where) {
    return knex(this.table)
     .where(where)
     .del()
  }
}

module.exports = new Chat()
