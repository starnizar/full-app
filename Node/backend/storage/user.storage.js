const pool = require('../db');
const collection = require('../helpers/collection');

exports.createUser = async (name, surname) => {
  await pool.query('BEGIN');
  const newUser = collection.getOne(await pool.query('INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *', [name, surname]));
  await pool.query('COMMIT');
  return newUser;
};

exports.getUsers = async () => {
  await pool.query('BEGIN');
  const allUsers = collection.getMany(await pool.query('SELECT * FROM person'));
  await pool.query('COMMIT');
  return allUsers;
};

exports.getOneUser = async (id) => {
  await pool.query('BEGIN');
  const oneUser = collection.getOne(await pool.query('SELECT * from person WHERE id = $1', [id]));
  await pool.query('COMMIT');
  console.log('request');
  return oneUser;
};

exports.updateUser = async (id, name, surname) => {
  await pool.query('BEGIN');
  const updatedUser = collection.getOne(await pool.query('UPDATE person SET name = $2, surname = $3 WHERE id = $1 RETURNING *', [id, name, surname]));
  await pool.query('COMMIT');
  return updatedUser;
};

exports.deleteUser = async (id) => {
  await pool.query('BEGIN');
  await pool.query('DELETE FROM person WHERE id = $1', [id]);
  await pool.query('COMMIT');
};
