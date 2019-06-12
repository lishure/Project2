const knex = require('../config/connection.js')

/**
 * @class Buyers
 */
class Buyers {
  constructor (table = process.env.dbTable) {
    this.table = table
  }

  /**
   * Find all buyers in the table
   * @returns Promise
   * @memberof Buyer
   */
  findAll () {
    return knex.select()
      .table(this.table)
  }

  /**
   * Create a new record
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
   * Delete one or more records by criteria
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof Example
   */
  destroy (where) {
    return knex(this.table)
      .where(where)
      .del()
  }
  // This is going to drop the table and recreate it
  reset () {
    return knex(this.table)
      .truncate()
  }
}

module.exports = new Buyers()
