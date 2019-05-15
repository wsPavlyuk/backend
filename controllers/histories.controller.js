const HistoryService = require('../services/history.service');

const createHistory = async (req, res) => {

    var dataForHistory = { userId: req.user._id, ...req.body };

    try {
        const newHistory = await HistoryService.createHistory(dataForHistory);
        res.status(200).send(newHistory);       

      
    } catch (err) {
        console.log('No history', err);
        res.status(500).send(err);
    }
}

const getHistories = (req, res) => {
    console.log('get users in controller')
    return HistoryService.getHistory()
      .then((history) => {
          console.log('history in controller', history);
          res.status(200).send(history)
      })
      .catch(err => {
          console.log('err in controller', err)
      })
  }
  


module.exports = {
    createHistory,
    getHistories
}