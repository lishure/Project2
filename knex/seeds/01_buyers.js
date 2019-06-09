
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('buyersdb').del()
    .then(function () {
      // Inserts seed entries
      return knex('buyersdb').insert([
        { clientname: 'Joey', income: 5000, cashdown: 50000, budget: 400000, creditgrade: 'C' },
        { clientname: 'Rachael', income: 6000, cashdown: 80000, budget: 600000, creditgrade: 'B' },
        { clientname: 'Ross', income: 7000, cashdown: 100000, budget: 800000, creditgrade: 'A' },
        { clientname: 'Lucky', income: 5500, cashdown: 50000, budget: 400000, creditgrade: 'A' },
        { clientname: 'Prince', income: 6500, cashdown: 120000, budget: 600000, creditgrade: 'D' },
        { clientname: 'Fluffy', income: 8000, cashdown: 100000, budget: 900000, creditgrade: 'A' },
        { clientname: 'Rabbi', income: 8900, cashdown: 70000, budget: 400000, creditgrade: 'B' },
        { clientname: 'Fatboy', income: 3200, cashdown: 95000, budget: 300000, creditgrade: 'F' },
        { clientname: 'Oldman', income: 4800, cashdown: 100000, budget: 500000, creditgrade: 'F' },
        { clientname: 'Cartman', income: 3800, cashdown: 50000, budget: 300000, creditgrade: 'B' },
        { clientname: 'Randy', income: 4200, cashdown: 95000, budget: 500000, creditgrade: 'F' },
        { clientname: 'Butters', income: 5800, cashdown: 100000, budget: 600000, creditgrade: 'F' }
      ])
    })
}
