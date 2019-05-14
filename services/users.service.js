var UserModel = require('../config/models/users.model')

const getUsers = (param) => {
    console.log('getUsers started', param);

    return new Promise((resolve, reject) => {
        UserModel.find(param, (err, users) => {
            if (err) {
                console.log('getUsers service err', err)
                reject(err)
            } else {
                console.log('users',users);
                resolve(users)

            }
        })
    })
}

const createUser = (param) => {
    return new Promise((resolve, reject) => {
        console.log('createUser', param)
        UserModel.create(param, (err, newUser) => {
            if (err) {
                console.log('getUsers service err', err)
                reject(err)
            } else {
                resolve(newUser)
                console.log('getUsers service err', err)
            }
        })
    })
}

module.exports = {
    getUsers,
    createUser
}