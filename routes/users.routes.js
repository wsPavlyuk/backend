
const UsersController = require('../controllers/users.controller')

const userRouter = (router) => {
    console.log('router user')

    // /* GET users listing. */
    router.get('/users', UsersController.getUsers);
    router.post('/users/create', UsersController.createUser);
    router.post('/users', UsersController.userAccess);

}

module.exports = userRouter



