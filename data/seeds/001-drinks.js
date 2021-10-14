
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('drinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('drinks').insert([
        {id: 1, beverage: 'tea'},
        {id: 2, beverage: 'coffee'},
        {id: 3, beverage: 'water'}
      ]);
    });
};
