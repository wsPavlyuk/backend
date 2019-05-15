
const historiesController = require('../controllers/histories.controller');
const UsersController = require('../controllers/users.controller');
const checkUser = require('../middlewares/auth.middleware');

const userRouter = (router) => {
    console.log('router user')

    // /* GET users listing. */
    router.get('/users', checkUser, UsersController.getUsers);
    router.get('/users/check', checkUser, UsersController.checkUser);
    router.post('/users/create', UsersController.createUser);
    router.post('/users', UsersController.loginUser);
    router.get('/histories', checkUser, historiesController.getHistories);
    router.post('/histories/create', checkUser, historiesController.createHistory);

}

module.exports = userRouter;



