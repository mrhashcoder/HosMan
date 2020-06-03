const express = require('express');
const router = express.Router();
const Control = require('../Controllers/hostellerControl');
const hostellerValidator = require('../Validators/CreateHostellerValidation');


router.post('/createHosteller', hostellerValidator, Control.postCreateHosteller);
router.post('/createHostellerByWarden',hostellerValidator, Control.postCreateHostellerByWarden);


module.exports = router;