const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is product route');
});

router.get('/101', (req,res) => {
    res.send("this is product route 101");
});

router.get('/102', (req,res) => {
    res.send('this is product route 102');
});

module.express = router;