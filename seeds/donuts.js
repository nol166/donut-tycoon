
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donuts').del()
    .then(function () {
      // Inserts seed entries
      return knex('donuts').insert([
        {name: 'Simpsons Donut', topping: "pink frosting", price: 3},
        {name: 'Dunkin Donut', topping: "glaze", price: 1},
        {name: 'bearclaw', topping: "blueberry", price: 1},
      ]);
    });
};
