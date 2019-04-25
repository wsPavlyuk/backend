const UserService = require('../services/users.service');

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
        //const findUser = await UserService.getUsers({email: req.body.email})
        // if(findUser[0] && findUser[0].id) {
           // throw new Error('This user exists')
        //}

        // hash password (use module bcrypt)

        const newUser = await UserService.createUser(req.body)
        res.status(200).send(newUser)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {
    getUsers,
    createUser
}