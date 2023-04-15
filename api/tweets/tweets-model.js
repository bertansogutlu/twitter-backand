const db = require("../../data/dbconfig");

async function getAll() {
  return await db("tweets").leftJoin("users","tweets.user_id","users.user_id").select("tweet_id","tweet","username");
}

async function getById(id) {
  return await db("tweets").leftJoin("users","tweets.user_id","users.user_id").select("tweet_id","tweet","username")
  .where("tweet_id", id).first();
}

async function getByFilter(filter) {
  return await db("tweets").leftJoin("users","tweets.user_id","users.user_id").select("tweet_id","tweet","username")
  .where(filter);
}

async function create(payload) {
  const [id] = await db("tweets").insert(payload);
  return getById(id);
}

async function updateById(id, payload) {
  await db("tweets").where("tweet_id", id).update(payload);
  return getById(id);
}

async function deleteById(id) {
  return await db("tweets").where("tweet_id", id).delete();
}

module.exports = {
  getAll,
  getById,
  getByFilter,
  create,
  updateById,
  deleteById,
};
