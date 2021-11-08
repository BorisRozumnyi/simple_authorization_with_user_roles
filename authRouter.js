const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {
  check,
} = require('express-validator');

router.post(
  '/registration',
  [
    check(
      'username',
      'Username cannot be empty'
    ).notEmpty(),
    check(
      'Password',
      'Password should be more than 4 and less than 10 symbols'
    ).isLength({ min: 4, max: 10 }),
  ],
  controller.registration
);
router.post('/login', controller.login);
router.get(
  '/users',
  controller.getUsers
);

module.exports = router;
