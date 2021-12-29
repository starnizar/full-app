const storageUser = require('../storage/user.storage')

exports.createUser = async (req, res) => {
  try {
    const { name, surname } = req.body;
    const newUser = await storageUser.createUser(name, surname);
    res.json({ message: 'New user created', newUser });
  } catch (error) {
    console.error(error);
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const oneUser = await storageUser.getOneUser(id);
    res.send({ message: 'One user', oneUser });
  } catch (error) {
    console.error(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const allUsers = await storageUser.getUsers();
    res.json({ message: 'All users', allUsers });
  } catch (error) {
    console.error(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname } = req.body;
    const updatedUser = await storageUser.updateUser(id, name, surname);
    res.json({ message: 'User updated', updatedUser });
  } catch (error) {
    console.log(error);
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await storageUser.deleteUser(id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.log(error);
  }
};