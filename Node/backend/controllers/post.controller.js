const postStorage = require('../storage/post.storage');

exports.createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const createdPost = await postStorage.createPost(title, content, userId);
    res.json({ message: 'Post created', data: createdPost });
  } catch (error) {
    console.error(error);
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await postStorage.getAllPosts();
    res.json({ message: 'All posts', allPosts });
  } catch(error) {
    console.error(error);
  }
};

exports.getPostsByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const userPosts = await postStorage.getPostsByUserId(user_id);
    res.json({ message: 'User posts', userPosts });
  } catch(error) {
    console.error(error);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await postStorage.deletePost(id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    console.error(error);
  }
};
