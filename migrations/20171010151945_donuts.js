'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('donuts', (table) => {
    table.increments();
    table.string('name')
    table.string('topping')
    table.integer('price')
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('donuts');
};
