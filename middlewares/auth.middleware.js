const { checkJWT } = require('../utilities');
const UserService = require('../services/users.service');


const checkToken = async (req, res, next) => {
    var checking = await checkJWT(req.headers.authorization);

    const findUser = await UserService.getUsers({_id: checking});
    // console.log('req.headers', req.headers)
    // console.log('Checking', checking);
    // console.log('Found!!!', findUser);
    if (findUser[0] && findUser[0]._id) {
        req.user = findUser[0];
        // // // console.log('Req user!!!!',req.user);
        // // console.log('Alright amigo! I know you!');
        next();
    } else {
        res.status(401).send({error: 'This user doesn`t exist or wrong password'});
    }
}

module.exports = checkToken;