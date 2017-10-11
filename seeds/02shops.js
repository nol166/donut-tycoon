
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shop').del()
    .then(function () {
      // Inserts seed entries
      return knex('shop').insert([
        {name: 'Dunkin Donuts', city: "Detroit, MI"},
        {name: 'Detroit Donut', city: "Flint, MI"},
      ]);
    });
};
