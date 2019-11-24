var express = require('express');
var router = express.Router();
var path = require('path');

//  This is doing the database connection and query
const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log('sent back a static file');
  res.sendFile((path.join(__dirname, "../views/index.html")));
});

// Use this for portfolio
router.get('/svgdata/:target', (req, res) => {
  // Here is where we set up the query
  let query = `SELECT * FROM tbl_turtle_facts WHERE id="${req.params.target}"`;

  sql.query(query, (err, result) => {
    if (err) { console.log(err); } // Something broke here!

    console.log(result); // This should be the database row

    res.json(result[0]); // Send that row back to the calling function
  })
})

module.exports = router;
