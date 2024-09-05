import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('demanda', function(table){
        table.increments('id').primary();
        table.string('id_user').notNullable();
        table.string('id_produto').notNullable();
        table.string('valor_produto').notNullable();
        table.string('quantidade').notNullable();
        table.string('cep').notNullable();
        table.string('numero_residencia').notNullable();
        table.string('destinatario').notNullable();
        table.string('valor_frete').notNullable();        
        table.string('sub_total').notNullable();
        table.string('status').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('demanda');
}

