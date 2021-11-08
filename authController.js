const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcrypt');

class authController {
  async registration(req, res) {
    try {
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({ message: 'An account with the same name already exists'});
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: 'USER' });
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      console.log(
        userRole.value, user
        )
      await user.save();
      return res.json({ message: 'User registered successfully' });
    } catch (e) {
      console.log(e.message);
      res.status(400).json({
        message: 'Refistration error',
      });
    }
  }
  async login(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({
        message: 'Login error',
      });
    }
  }
  async getUsers(req, res) {
    try {
      console.log(req.method);
      // const userRole = new Role();
      // const adminRole = new Role({
      //   value: 'ADMIN',
      // });
      // await userRole.save();
      // await adminRole.save();
      res.json('+++');
    } catch (e) {}
  }
}

module.exports = new authController();
