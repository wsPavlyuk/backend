const UserService = require('../services/users.service');
const { getHash, compareHash } = require('../utilities');

const getUsers = (req, res) => {
  console.log('get users in controller')
  return UserService.getUsers()
    .then((users) => {
        console.log('users in controller', users);
        res.status(200).send(users)
    })
    .catch(err => {
        console.log('err in controller', err)
    })
}

const createUser = async (req, res) => {

    try {
        const findUser = await UserService.getUsers({email: req.body.email});
        console.log('gatcha!!!', findUser);
        if (findUser[0] && findUser[0].email && findUser[0]._id) {
            throw new Error('This user exists');
        }

        // hash password (use module bcrypt)
        req.body.password = await getHash(req.body.password);

        const newUser = await UserService.createUser(req.body);
        res.status(200).send(newUser);
    } catch (err) {
        console.log('Finish', err);
        res.status(500).send(err);
    }
}

const userAccess = async (req, res) => {
    console.log("I'm here");

    try {
        const findUser = await UserService.getUsers({email: req.body.email});
        console.log('Found!!!', findUser);
        if (findUser[0] && findUser[0].email && findUser[0]._id) {
            // hash password (use module bcrypt)
            const statusOk = await compareHash(req.body.password, findUser[0].password);
            console.log(statusOk);
            if (statusOk) {
                res.status(200).send(findUser[0]);
            } else {                
                throw new Error('Wrong password');
            }
        }

        throw new Error('This user doesn`t exist');
    } catch (err) {
        console.log('Not found!', err);
        res.status(500).send(err);
    }
}

module.exports = {
    getUsers,
    createUser,
    userAccess
}