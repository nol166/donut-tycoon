'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('shop', (table) => {
    table.increments();
    table.string('name')
    table.string('city')
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('shop');
};
