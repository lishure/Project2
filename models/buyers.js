const knex = require('../config/connection.js')

/**
 * @class Buyers
 */
class Buyers {
  constructor (table = 'buyers') {
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
   * @memberof Buyer
   */
  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }

  /**
   * Get record
   * @returns Promise
   * @memberof Buyer
   */
  getID (where) {
    return knex.select()
      .table(this.table)
      .where(where)
  }

  /**
   * Update record
   * @returns Promise
   * @memberof Buyer
   */

  update (where, values) {
    return knex.select()
      .table(this.table)
      .where(where)
      .update(values)
  }

  /**
   * Delete one or more records by criteria
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof Buyer
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
