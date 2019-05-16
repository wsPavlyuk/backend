var UserModel = require('../config/models/users.model')

const getUsers = (param) => {
    // // console.log('getUsers started', param);

    return new Promise((resolve, reject) => {
        UserModel.find(param, (err, users) => {
            // // console.log('Param:',param);
            if (err) {
                // // console.log('getUsers service err', err)
                reject(err)
            } else {
                // // console.log('users',users);
                resolve(users)

            }
        })
    })
}
// const getUserById = (param) => {
//     // // // console.log('getUsers started', param);

//     // // // console.log('Param:',param);
//     return new Promise((resolve, reject) => {
//         UserModel.findById(param, (err, users) => {
//             if (err) {
//                 // // // console.log('getUsers service err', err)
//                 reject(err)
//             } else {
//                 // // // console.log('users',users);
//                 resolve(users)

//             }
//         })
//     })
// }

const createUser = (param) => {
    return new Promise((resolve, reject) => {
        // // console.log('createUser', param)
        UserModel.create(param, (err, newUser) => {
            if (err) {
                // // console.log('getUsers service err', err)
                reject(err)
            } else {
                resolve(newUser)
                // // console.log('getUsers service resolve', newUser)
            }
        })
    })
}

module.exports = {
    getUsers,
    createUser,
    // getUserById
}