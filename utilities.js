const bcrypt = require('bcrypt');
const saltRounds = 8;


const getHash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                console.log('getUsers service err', err)
                reject(err)
            } else {
                console.log(hash)
                resolve(hash);
            }
        })
    })
}


  module.exports = { getHash };
