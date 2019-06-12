var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server')
const Buyers = require('../models/buyers')
var expect = chai.expect

/* globals describe, it, beforeEach */

// Setting up the chai http plugin
chai.use(chaiHttp)

var request

describe('POST /api/buyers', function () {
  // Before each test begins, create a new request server for testing
  // & delete all buyers from the db
  beforeEach(function () {
    request = chai.request(server)
    return Buyers.reset()
  })

  it('should save a clients', function (done) {
    // Create an object to send to the endpoint
    var reqBody = {
      clientname: 'Joers',
      income: 5678
    }

    // POST the request body to the server
    request
      .post('/api/buyers')
      .send(reqBody)
      .end(function (err, res) {
        var responseStatus = res.status
        var responseBody = res.body

        // Run assertions on the response

        expect(err).to.be.null // eslint-disable-line no-unused-expressions

        expect(responseStatus).to.equal(200)

        expect(responseBody)
          .to.be.an('array')
          .that.includes(1)

        // The `done` function is used to end any asynchronous tests
        done()
      })
  })
})
