/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema
    .createTable('users',t=>{
      t.increments('user_id')
      t.string('email').notNullable().unique()
      t.string('username').notNullable()
      t.string('password').notNullable()
      t.string('role').defaultTo("user").notNullable()
    })
    .createTable('tweets',t=>{
      t.increments('tweet_id')
      t.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      t.text('tweet').notNullable()
    })
    .createTable('retweets',t=>{
      t.increments('retweet_id')
      t.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      t.integer('tweet_id').notNullable().references('tweet_id').inTable('tweets').onDelete('CASCADE').onUpdate('CASCADE')
    })
    .createTable('favorites',t=>{
      t.increments('favorite_id')
      t.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      t.integer('tweet_id').notNullable().references('tweet_id').inTable('tweets').onDelete('CASCADE').onUpdate('CASCADE')
    })
    .createTable('likes',t=>{
      t.increments('like_id')
      t.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      t.integer('tweet_id').notNullable().references('tweet_id').inTable('tweets').onDelete('CASCADE').onUpdate('CASCADE')
    })
    .createTable('comments',t=>{
      t.increments('comment_id')
      t.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      t.text('comment').notNullable()
    })
    .createTable('followings',t=>{
      t.increments('following_id')
      t.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      t.integer('following_user_id').notNullable()
    })
    .createTable('fallowers',t=>{
      t.increments('fallower_id')
      t.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      t.integer('fallower_user_id').notNullable()
    })
  
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('fallowers')
    .dropTableIfExists('followings')
    .dropTableIfExists('comments')
    .dropTableIfExists('likes')
    .dropTableIfExists('favorites')
    .dropTableIfExists('retweets')
    .dropTableIfExists('tweets')
    .dropTableIfExists('users')
    
  };
  