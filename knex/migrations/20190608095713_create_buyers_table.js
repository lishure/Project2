
exports.up = function (knex, Promise) { 
  knex.schema.hasTable('buyers')
  .then(function (exists) {
    if (!exists) {

  return knex.schema.createTable('buyers', function (table) {
    table.increments('id')
    table.string('clientname').notNullable()
    table.integer('income').notNullable()
    table.integer('cashdown')
    table.integer('budget')
    table.string('creditgrade').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}
  }}
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('buyers')
}
