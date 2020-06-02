const express = require('express');
const router = express.Router();
const Control = require('../Controllers/hostellerControl');
const validator = require('../middlewares/CreateHostellerValidation');


router.post('/createHosteller' ,validator, Control.postCreateHosteller);
router.post('/createHostellerByWarden' , Control.postCreateHostellerByWarden);


module.exports = router;