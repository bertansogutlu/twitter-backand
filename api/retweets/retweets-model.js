const db = require("../../data/dbconfig");

async function getAll() {
  return await db("retweets").leftJoin("users","retweets.user_id","users.user_id").leftJoin("tweets","retweets.tweet_id","tweets.tweet_id")
  .select("tweets.tweet_id","username","tweet");
}

async function getById(id) {
  return await db("retweets").leftJoin("users","retweets.user_id","users.user_id").leftJoin("tweets","retweets.tweet_id","tweets.tweet_id")
  .where("retweet_id", id).first()
  .select("tweets.tweet_id","username","tweet");
}

async function getByFilter(filter) {
  return await db("retweets").leftJoin("users","retweets.user_id","users.user_id").leftJoin("tweets","retweets.tweet_id","tweets.tweet_id")
  .where(filter);
}

async function create(payload) {
  const [id] = await db("retweets").insert(payload);
  return getById(id);
}

async function updateById(id, payload) {
  await db("retweets").where("retweet_id", id).update(payload);
  return getById(id);
}

async function deleteById(id) {
  return await db("retweets").where("retweet_id", id).delete();
}

module.exports = {
  getAll,
  getById,
  getByFilter,
  create,
  updateById,
  deleteById,
};
