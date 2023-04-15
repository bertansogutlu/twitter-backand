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

async function create(payload) {
  const [id] = await db("users").insert(payload);
  return getById(id);
}

async function updateById(id, payload) {
  await db("users").where("user_id", id).update(payload);
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
