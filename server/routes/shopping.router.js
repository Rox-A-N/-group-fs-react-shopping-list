const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('in GET request')
    let queryText = 'SELECT * FROM shoppingList';

    pool.query(queryText).then((result) =>{
        res.send(result.rows);
    }).catch((err) =>{
        console.log(err);
        res.sendStatus(500);
    })
})
// POST
router.post('/', (req, res) => {
    console.log('in POST request', req.body)
    let queryText = 'INSERT INTO shoppingList ("name", "quantity", "unit") VALUES ($1, $2, $3);'
    pool.query(queryText, [req.body.name, req.body.quantity, req.body.unit] )
    pool.query(queryText).then((result) =>{
        res.sendStatus(200);
    }).catch((err) =>{
        console.log(err);
        res.sendStatus(500)
    })
})
// DELETE

// PUT

module.exports = router;