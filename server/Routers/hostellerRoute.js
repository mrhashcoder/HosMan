const express = require('express');
const router = express.Router();
const Control = require('../Controllers/hostellerControl');

router.post('/createHosteller' , Control.postCreateHosteller);


module.exports = router;