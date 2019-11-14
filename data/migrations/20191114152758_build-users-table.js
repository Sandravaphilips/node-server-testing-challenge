
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('name', 50);
        table.string('department', 50);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
