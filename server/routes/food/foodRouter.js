const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbinfo = require('../../env/dbEnv');
const connection = mysql.createConnection(dbinfo);

router.post('/api/food/all', (req, res) => {
   connection.query('SELECT * FROM tbl_food', (error, result) => {
      if(error) throw error;
       console.log('FoodRouter DB INFO all Food rows : ' + JSON.stringify(result));
       res.send(result);
   });
});

module.exports = router;