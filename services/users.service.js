var UserModel = require('../config/models/users.model')

const getUsers = (param) => {
    return new Promise((resolve, reject) => {
        UserModel.find(param, (err, users) => {
            if (err) {
                console.log('getUsers service err', err)
                reject(err)
            } else {
                resolve(users)
                console.log('getUsers service err', err)
            }
        })
    })
}

const createUser = (param) => {
    return new Promise((resolve, reject) => {
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