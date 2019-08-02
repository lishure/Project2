
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('buyers').del()
    .then(function () {
      // Inserts seed entries
      return knex('buyers').insert([
        { clientname: 'Joey', income: 5000, cashdown: 50000, budget: 400000, creditgrade: 'Good', timeline: '1-3 Months' commentsection: 'none'},
        { clientname: 'Rachael', income: 6000, cashdown: 80000, budget: 600000, creditgrade: 'Very Good', timeline: '1-3 Months', commentsection: 'none'},
        { clientname: 'Ross', income: 7000, cashdown: 100000, budget: 800000, creditgrade: 'Exceptional', timeline: '1-3 Months', commentsection: 'none'},
        { clientname: 'Lucky', income: 5500, cashdown: 50000, budget: 400000, creditgrade: 'Exceptional', timeline: '1-3 Months', commentsection: 'none'},
        { clientname: 'Prince', income: 6500, cashdown: 120000, budget: 600000, creditgrade: 'Fair', timeline: '1-3 Months', commentsection: 'none'},
        { clientname: 'Fluffy', income: 8000, cashdown: 100000, budget: 900000, creditgrade: 'Exceptional', timeline: '1-3 Months', commentsection: 'none'},
        { clientname: 'Rabbi', income: 8900, cashdown: 70000, budget: 400000, creditgrade: 'Good', timeline: '1-3 Months', commentsection: 'none'},
        { clientname: 'Fatboy', income: 3200, cashdown: 95000, budget: 300000, creditgrade: 'Very Poor', timeline: '1-3 Months', commentsection: 'none'},
        { clientname: 'Oldman', income: 4800, cashdown: 100000, budget: 500000, creditgrade: 'Very Poor', timeline: '1-3 Months', commentsection: 'none'},
        { clientname: 'Cartman', income: 3800, cashdown: 50000, budget: 300000, creditgrade: 'Good', timeline: '1-3 Months', commentsection: 'none'},
        { clientname: 'Randy', income: 4200, cashdown: 95000, budget: 500000, creditgrade: 'Very Poor', timeline: '1-3 Months', commentsection: 'none'},
        { clientname: 'Butters', income: 5800, cashdown: 100000, budget: 600000, creditgrade: 'Very Poor', timeline: '1-3 Months', commentsection: 'none'}
      ])
    })
}