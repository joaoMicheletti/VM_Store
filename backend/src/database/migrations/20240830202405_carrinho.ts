import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('carrinho', function(table){
        table.increments('id').primary();
        table.string('id_user').notNullable();
        table.string('id_produto').notNullable();
        table.string('status').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('carrinho');
}

