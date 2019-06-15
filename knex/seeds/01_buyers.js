
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('buyers').del()
    .then(function () {
      // Inserts seed entries
      return knex('buyers').insert([
        { clientname: 'Joey', income: 5000, cashdown: 50000, budget: 400000, creditgrade: 'Good' },
        { clientname: 'Rachael', income: 6000, cashdown: 80000, budget: 600000, creditgrade: 'Very Good' },
        { clientname: 'Ross', income: 7000, cashdown: 100000, budget: 800000, creditgrade: 'Exceptional' },
        { clientname: 'Lucky', income: 5500, cashdown: 50000, budget: 400000, creditgrade: 'Exceptional' },
        { clientname: 'Prince', income: 6500, cashdown: 120000, budget: 600000, creditgrade: 'Fair' },
        { clientname: 'Fluffy', income: 8000, cashdown: 100000, budget: 900000, creditgrade: 'Exceptional' },
        { clientname: 'Rabbi', income: 8900, cashdown: 70000, budget: 400000, creditgrade: 'Good' },
        { clientname: 'Fatboy', income: 3200, cashdown: 95000, budget: 300000, creditgrade: 'Very Poor' },
        { clientname: 'Oldman', income: 4800, cashdown: 100000, budget: 500000, creditgrade: 'Very Poor' },
        { clientname: 'Cartman', income: 3800, cashdown: 50000, budget: 300000, creditgrade: 'Good' },
        { clientname: 'Randy', income: 4200, cashdown: 95000, budget: 500000, creditgrade: 'Very Poor' },
        { clientname: 'Butters', income: 5800, cashdown: 100000, budget: 600000, creditgrade: 'Very Poor' }
      ])
    })
}
