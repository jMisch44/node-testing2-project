
exports.up = async function(knex) {
  await knex.schema.createTable("drinks", table => {
    table.increments()
    table.string("beverage", 255).unique().notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("drinks")
};
