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
    console.log('getjwt userId', userId)
    return new Promise((resolve, reject) => {
        jwt.sign ({ userId }, privateKey, { algorithm: 'HS256' }, (err, res) => {
            if (err) {
                console.log('getJWT service err', err)
                reject(err)
            } else {
                //return true or false
                console.log('token', res)
                resolve(res);
            }
        })
    })
}

const checkJWT = (token) => {
    console.log('check token', token)
    return new Promise((resolve, reject) => {
        jwt.verify(token, privateKey, (err, decoded) => {
            if (err) {
                console.log('checkJWT service err', err)
                reject(err)
            } else {
                console.log('Decoded',decoded);
                resolve(decoded.userId);
            }
        })
    })
}

  module.exports = { 
      getHash,
      compareHash,
      getJWT,
      checkJWT
    };
