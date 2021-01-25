
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('Characters').insert([
        {id: 1, name: 'Dean Winchester'},
        {id: 2, name: 'Sam Winchester'},
        {id: 3, name: 'Angel Castiel'}
      ]);
    });
};
