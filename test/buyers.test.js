var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server')
const Buyers = require('../models/buyers')
var expect = chai.expect

/* globals describe, it, beforeEach */

// Setting up the chai http plugin
chai.use(chaiHttp)

var request

describe('GET /api/buyers', function () {
  // Before each test begins, create a new request server for testing
  // & delete all Buyerss from the db
  beforeEach(function () {
    request = chai.request(server)
    // Make sure to create a new database for testing and that it is
    // different from the production database or it will drop everytime
    // You can use same table and setup just make sure it is a new database
    return Buyers.reset()
  })

  it('should find all clients', function (done) {
    // Add some Buyerss to the db to test with
    Buyers.create([
      { clientname: 'Joers', income: 5678 },
      { clientname: 'Luckers', income: 9999 }
    ]).then(function () {
      // Request the route that returns all Buyerss
      request.get('/api/buyers').end(function (err, res) {
        var responseStatus = res.status
        var responseBody = res.body

        // Run assertions on the response

        expect(err).to.be.null // eslint-disable-line no-unused-expressions

        expect(responseStatus).to.equal(200)

        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf(2)

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({ clientname: 'Joers', income: 5678 })

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({ clientname: 'Luckers', income: 9999 })

        // The `done` function is used to end any asynchronous tests
        done()
      })
    })
  })
})
