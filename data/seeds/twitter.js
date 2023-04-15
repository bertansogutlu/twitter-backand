/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fallowers').truncate()
  await knex('followings').truncate()
  await knex('comments').truncate()
  await knex('likes').truncate()
  await knex('favorites').truncate()
  await knex('retweets').truncate()
  await knex('tweets').truncate()
  await knex('users').truncate()


  await knex('users').insert([
    {email: "bertan@gmail.com", username: "bertan", password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', role: "admin"},
    {email: "defne@gmail.com", username: "defne", password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', role: "user"},
    {email: "pasa@gmail.com", username: "pasa", password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', role: "user"},
  ]);
  await knex('tweets').insert([
    {user_id: 1, tweet: 'Tweet one'},
    {user_id: 2, tweet: 'Tweet two'},
    {user_id: 3, tweet: 'Tweet three'},
    {user_id: 1, tweet: 'Tweet four'},
    {user_id: 2, tweet: 'Tweet five'},
    {user_id: 3, tweet: 'Tweet six'},
    {user_id: 1, tweet: 'Tweet seven'},
    {user_id: 2, tweet: 'Tweet eight'},
    {user_id: 3, tweet: 'Tweet nine'},
  ]);
  await knex('retweets').insert([
    {user_id: 1, tweet_id: 3},
    {user_id: 2, tweet_id: 2},
    {user_id: 3, tweet_id: 1},
    {user_id: 1, tweet_id: 6},
    {user_id: 2, tweet_id: 5},
    {user_id: 3, tweet_id: 4},
    {user_id: 1, tweet_id: 9},
    {user_id: 2, tweet_id: 8},
    {user_id: 3, tweet_id: 7},
  ]);
  await knex('favorites').insert([
    {user_id: 1, tweet_id: 3},
    {user_id: 2, tweet_id: 2},
    {user_id: 3, tweet_id: 1},
    {user_id: 1, tweet_id: 6},
    {user_id: 2, tweet_id: 5},
    {user_id: 3, tweet_id: 4},
    {user_id: 1, tweet_id: 9},
    {user_id: 2, tweet_id: 8},
    {user_id: 3, tweet_id: 7},
  ]);
  await knex('likes').insert([
    {user_id: 1, tweet_id: 3},
    {user_id: 2, tweet_id: 2},
    {user_id: 3, tweet_id: 1},
    {user_id: 1, tweet_id: 6},
    {user_id: 2, tweet_id: 5},
    {user_id: 3, tweet_id: 4},
    {user_id: 1, tweet_id: 9},
    {user_id: 2, tweet_id: 8},
    {user_id: 3, tweet_id: 7},
  ]);
  await knex('comments').insert([
    {user_id: 1, comment: 'Comment one'},
    {user_id: 2, comment: 'Comment two'},
    {user_id: 3, comment: 'Comment three'},
    {user_id: 1, comment: 'Comment four'},
    {user_id: 2, comment: 'Comment five'},
    {user_id: 3, comment: 'Comment six'},
    {user_id: 1, comment: 'Comment seven'},
    {user_id: 2, comment: 'Comment eight'},
    {user_id: 3, comment: 'Comment nine'},
  ]);
  await knex('followings').insert([
    {user_id: 1, following_user_id: 3},
    {user_id: 2, following_user_id: 2},
    {user_id: 3, following_user_id: 1},
  ]);
  await knex('fallowers').insert([
    {user_id: 1, fallower_user_id: 3},
    {user_id: 2, fallower_user_id: 2},
    {user_id: 3, fallower_user_id: 1},
  ]);

};
