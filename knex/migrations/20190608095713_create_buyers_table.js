
exports.up = function (knex, Promise) {
  return knex.schema.createTable('buyersdb', function (table) {
    table.increments('id')
    table.string('clientname').notNullable()
    table.int('income').notNullable()
    table.int('cashdown')
    table.int('budget')
    table.string('credit_score').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('buyersdb')
}
