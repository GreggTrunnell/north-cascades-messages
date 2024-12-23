const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

let messages = [];

// router.get( '/', ( req, res )=>{
//     res.send( messages );
// })

router.get( '/', ( req, res )=>{
    const queryText = `SELECT * FROM "messages" ORDER BY id ASC;`;
    pool.query( queryText )
    .then(( results )=>{
        res.send( results.rows );
    })
    .catch(( err )=>{
        console.log('error in message.router get', err);
        res.sendStatus( 400 );
    })
})

router.post( '/', ( req, res )=>{
    messages.push( req.body );
    res.sendStatus( 200 );
})

module.exports = router;
