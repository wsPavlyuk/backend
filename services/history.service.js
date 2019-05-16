var HistoryModel = require('../config/models/history.model')

const createHistory = (data) => {
    return new Promise((resolve, reject) => {
        // // // console.log('createHistory', data)
        HistoryModel.create(data, (err, newNote) => {
            if (err) {
                // // console.log('createHistory service err', err)
                reject(err)
            } else {
                // // console.log('createHistory service', newNote)
                resolve(newNote)
            }
        })
    })
}

const getHistory = (param, fields) => {
    // // console.log('getHistory started');

    return new Promise((resolve, reject) => {
        HistoryModel.find(param, fields,  (err, history) => {
            if (err) {
                // // console.log('getHistory service err', err)
                reject(err)
            } else {
                // // console.log('history',history);
                resolve(history)
            }
        })
    })
}

const historyDetails = (id) => {
    // console.log('getHistoryDetails started');

    return new Promise((resolve, reject) => {
        HistoryModel.find(id, (err, history) => {
            if (err) {
                // console.log('getHistoryDetails service err', err)
                reject(err)
            } else {
                // console.log('getHistoryDetails',history);
                resolve(history)
            }
        })
    })
}


module.exports = {
    createHistory,
    getHistory,
    historyDetails
}