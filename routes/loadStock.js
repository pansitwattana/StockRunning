var express = require('express');
var JSFtp = require("jsftp");

var router = express.Router();
var SIAMCHARTFTP = 'siamchart.com';

var ftp = new JSFtp({ host: SIAMCHARTFTP });

/* GET users listing. */
router.get('/', function(req, res) {
  ftp.get('set-archive_EOD_LAST.zip', 'files/stock.zip', function(err) {
    if (err)
      res.send(err);
    else
      res.send('File copied successfully!');
  });
});

module.exports = router;
