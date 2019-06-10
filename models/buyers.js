const knex = require('../config/connection.js')

/**
 * Queries the Example database
 *
 * @class Example
 */
class Buyers {
  constructor (table = process.env.dbTable) {
    this.table = table
  }

  /**
   *
   * Find all buyers in the table
   * @returns Promise
   * @memberof Buyer
   */
  findAll () {
    return knex.select()
      .table(this.table)
  }

  /**
 * create a new record
 *
 * @param {Object} values The values to insert in the form of {column: value}
 * @returns Promise
 * @memberof Example
 */
  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }

  /**
   * delete 1 or more records by criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof Example
   */
  destroy (where) {
    return knex(this.table)
      .where(where)
      .del()
  }
}

module.exports = new Buyers()
