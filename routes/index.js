var express = require('express');
var router = express.Router();

require('./users.routes')(router)


module.exports = router;
