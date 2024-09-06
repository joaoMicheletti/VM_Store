import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('produto', function(table){
        table.increments('id').primary();
        table.string('img').notNullable();
        table.string('nome').notNullable();
        table.string('sexo').notNullable();
        table.string('categoria').notNullable();
        table.string('tamanho').notNullable();
        table.string('cor').notNullable();
        table.integer('quantidade').notNullable();
        table.boolean('preco').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('produto');
}