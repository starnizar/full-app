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
    res.json({ message: 'One user', oneUser });
  } catch (error) {
    console.error(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const allUsers = await storageUser.getUsers();
    const allUsersResponse = allUsers.map((user) => ({
      id: user.id,
      name: user.name,
      surname: user.surname
    }))
    res.json({ message: 'All users', allUsersResponse });
  } catch (error) {
    console.error(error);
  }
};

exports.updateUser = async (req, res) => {

}

exports.deleteUser = async (req, res) => {

};