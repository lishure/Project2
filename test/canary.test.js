const expect = require('chai').expect

describe('canary test', function () {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it('should pass this canary test', function () {
    /* eslint-disable no-unused-expressions */
    expect(true).to.be.true
    /* eslint-enable no-unused-expressions */
  })
})
