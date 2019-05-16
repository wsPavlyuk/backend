const HistoryService = require('../services/history.service');

const createHistory = async (req, res) => {

    var dataForHistory = { userId: req.user._id, ...req.body };

    try {
        const newHistory = await HistoryService.createHistory(dataForHistory);
        res.status(200).send(newHistory);       

      
    } catch (err) {
        // // console.log('No history', err);
        res.status(500).send(err);
    }
}

const getHistories = (req, res) => {
    // console.log('get histories in controller', req.user);
    const param = {
        userId: req.user._id
    }
    const  fields = {
        _id: true,
        location: true,
        createdAt: true
    }
    return HistoryService.getHistory(param, fields)
      .then((history) => {
          // console.log('history in controller', history);
          res.status(200).send(history)
      })
      .catch((err) => {
          // console.log('err in controller', err)
      })
  }
  
const getHistoryDetails = (req, res) => {
    // console.log('gethistoriesdetails in controller', req.params.id);
    return HistoryService.historyDetails({_id: req.params.id})
      .then((history) => {
          // console.log('history in controller', history);
          res.status(200).send(history[0])
      })
      .catch((err) => {
          // console.log('err in controller', err)
      })
  }


module.exports = {
    createHistory,
    getHistories,
    getHistoryDetails
}