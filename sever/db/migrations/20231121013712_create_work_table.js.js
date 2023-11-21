/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.dropTable('work');
  return knex.schema.createTable('work', function (table) {
    table.increments('id').primary();
    table.string('code');
    table.date('start');
    table.date('end');
    table.string('name');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('authors');
};
