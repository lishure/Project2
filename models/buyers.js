/* eslint-disable no-useless-catch */
const axios = require('axios')
const htmlParser = require('fast-html-parser')
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
    return knex
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

  // Get interest rate from a source
  // getInterestRate () {
  //   return axios.get('https://www.navyfederal.org/assets/rates/printMortRatesAll.php')
  //     .then(response => {
  //       const rootDoc = htmlParser.parse(response.data)
  //       let selector = rootDoc.querySelector('.newRatesTable')
  //       selector = selector.childNodes[3].querySelector('.mort_interest')
  //       selector = parseFloat(selector.text)
  //       return selector
  //     })
  // }
}

module.exports = new Buyers()
