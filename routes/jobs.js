const express          = require('express');
const router           = express.Router();
const query            = require('../lib/dbcon');
const mysql            = require('mysql');

router.get('/jobs', function(req, res){
  //let state = req.query.state;
  const state = '';
  let sql = `SELECT * FROM jobs `;
  query(sql).then(result => {
    res.send(JSON.stringify(result));
  });
});

module.exports = router;

