
const UsersController = require('../controllers/users.controller')

const userRouter = (router) => {
    console.log('router user')

    // /* GET users listing. */
    router.get('/users', UsersController.getUsers);
    router.get('/users/check', UsersController.checkUser);
    router.post('/users/create', UsersController.createUser);
    router.post('/users', UsersController.loginUser);

}

module.exports = userRouter



