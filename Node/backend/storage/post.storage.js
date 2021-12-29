const pool = require('../db');
const collection = require('../helpers/collection');

exports.createPost = async (title, content, userId) => {
  await pool.query('BEGIN');
  const createdPost = collection.getOne(await pool.query('INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *', [title, content, userId]));
  await pool.query('COMMIT');
  return createdPost;
};

exports.getAllPosts = async () => {
  await pool.query('BEGIN');
  const allPosts = collection.getMany(await pool.query('SELECT * FROM post'));
  await pool.query('COMMIT');
  return allPosts;
};

exports.getPostsByUserId = async (user_id) => {
  await pool.query('BEGIN');
  const userPosts = collection.getMany(await pool.query('SELECT * FROM post WHERE user_id = $1', [user_id]));
  await pool.query('COMMIT');
  return userPosts;
};

exports.deletePost = async (id) => {
  await pool.query('BEGIN');
  await pool.query('DELETE FROM post where id = $1', [id]);
  await pool.query('COMMIT');
};