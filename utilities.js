const bcrypt = require('bcrypt');
const saltRounds = 8;

const jwt = require('jsonwebtoken');
const privateKey = '345big12';


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

const compareHash = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, res) => {
            if (err) {
                console.log('getUsers service err', err)
                reject(err)
            } else {
                console.log(hash)
                //return true or false
                resolve(res);
            }
        })
    })
}


const getJWT = (userId) => {
    return new Promise((resolve, reject) => {
        jwt.sign ({ userId }, privateKey, { algorithm: 'HS256' }, (err, res) => {
            if (err) {
                console.log('getJWT service err', err)
                reject(err)
            } else {
                //return true or false
                resolve(res);
            }
        })
    })
}

  module.exports = { 
      getHash,
      compareHash,
      getJWT
    };
