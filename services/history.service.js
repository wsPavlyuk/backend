var HistoryModel = require('../config/models/history.model')

const createHistory = (data) => {
    return new Promise((resolve, reject) => {
        // console.log('createHistory', data)
        HistoryModel.create(data, (err, newNote) => {
            if (err) {
                console.log('createHistory service err', err)
                reject(err)
            } else {
                console.log('createHistory service', newNote)
                resolve(newNote)
            }
        })
    })
}

const getHistory = () => {
    console.log('getHistory started');

    return new Promise((resolve, reject) => {
        HistoryModel.find({}, (err, history) => {
            if (err) {
                console.log('getHistory service err', err)
                reject(err)
            } else {
                console.log('history',history);
                resolve(history)
            }
        })
    })
}


module.exports = {
    createHistory,
    getHistory
}