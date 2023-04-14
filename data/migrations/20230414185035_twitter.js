/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema
    .createTable('roles',t=>{
      t.increments('role_id')
      t.string('role').notNullable().unique()
    })
    .createTable('users',t=>{
      t.increments('user_id')
      t.string('username').notNullable()
      t.string('surname').notNullable()
      t.string('email').notNullable().unique()
      t.string('password').notNullable()
      t.integer('role_id').defaultTo(2).notNullable().unsigned().references('role_id').inTable('roles')
    })
    .createTable('pizzas',t=>{
      t.increments('pizza_id')
      t.string('pizza').notNullable()
      t.text('description').notNullable()
      t.decimal('price').notNullable().unsigned()
    })
    .createTable('toppings',t=>{
      t.increments('topping_id')
      t.string('topping').notNullable()
    })
    .createTable('orders',t=>{
      t.increments('order_id')
      t.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      t.string('dough').notNullable()
      t.string('size').notNullable()
      t.integer('quantity').notNullable()
      t.text('note')
      t.string('status').notNullable()
      t.decimal('price').notNullable().unsigned()
      t.integer('pizza_id').notNullable().references('pizza_id').inTable('pizzas').onDelete('CASCADE').onUpdate('CASCADE')
    })
    .createTable('order_toppings',t=>{
      t.integer('order_id').notNullable().unsigned().references('order_id').inTable('orders').onDelete('CASCADE').onUpdate('CASCADE')
      t.integer('topping_id').notNullable().unsigned().references('topping_id').inTable('toppings')
    })
  
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('order_toppings')
    .dropTableIfExists('orders')
    .dropTableIfExists('toppings')
    .dropTableIfExists('pizzas')
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
  };
  