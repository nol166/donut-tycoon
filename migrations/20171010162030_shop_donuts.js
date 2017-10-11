'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('shop_donuts', (table) => {
    table.increments();
    table.integer('shop_id').references('id').inTable('shop').onDelete('CASCADE').index();
    table.integer('donut_id').references('id').inTable('donuts').onDelete('CASCADE').index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('shop_donuts');
};
