
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
        table.increments();

        table.string("name", 64)
            .notNullable();
        
        table.string("description", 128)

        table.boolean("completed")
            .defaultTo(0)
            .notNullable();
    })
    .createTable("resources", table => {
        table.increments();

        table.string("name", 64)
            .notNullable()
            .unique();

        table.string("description", 128)
    })
    .createTable("tasks", table => {
        table.increments();

        table.string("description", 128)
            .notNullable();

        table.string("notes", 256);

        table.boolean("completed")
            .defaultTo(0)
            .notNullable();
        
        table.integer("project_id")
            .unsigned()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
    })
    .createTable("contexts", table => {
        table.increments();

        table.string("name", 64)
    })
    .createTable("projects_resources", table => {
        table.increments();

        table.integer("project_id")
            .unsigned()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        
        table.integer("resource_id")
            .unsigned()
            .references("id")
            .inTable("resources")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
    })
    .createTable("tasks_contexts", table => {
        table.increments();

        table.integer("task_id")
            .unsigned()
            .references("id")
            .inTable("tasks")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        
        table.integer("context_id")
            .unsigned()
            .references("id")
            .inTable("contexts")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks_contexts")
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("contexts")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
