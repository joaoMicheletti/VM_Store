import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('adm', function(table){
        table.increments('id').primary();
        table.string('email').notNullable();
        table.string('pass').notNullable();
        table.string('token').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('adm');
}

