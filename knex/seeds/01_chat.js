
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([
        {email: 'example@email.com', msg: 'First Message'},
        {email: '2example@email.com', msg: 'Second Message'}
      ]);
    });
};
