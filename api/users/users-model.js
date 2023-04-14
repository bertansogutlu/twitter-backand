const db = require("../../data/dbconfig");

async function getAll() {
  return await db("users");
}

async function getById(id) {
  return await db("users").where("user_id", id).first();
}

async function getByEmail(email) {
  return await db("users").where("email", email).first();
}

async function create(order) {
  const [id] = await db("users").insert(order);
  return getById(id);
}

async function updateById(id, user) {
  await db("users").where("user_id", id).update(user);
  return getById(id);
}

async function deleteById(id) {
  return await db("users").where("user_id", id).delete();
}

module.exports = {
  getAll,
  getById,
  getByEmail,
  create,
  updateById,
  deleteById,
};
