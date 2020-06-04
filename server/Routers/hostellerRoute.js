const express = require('express');
const router = express.Router();
const Control = require('../Controllers/hostellerControl');
const hostellerValidator = require('../Validators/CreateHostellerValidation');
const isWardenAuth = require('../Middlewares/isAuthWarden');
const loginValidator = require('../Validators/loginValidator');
const isHostellerAuth = require('../Middlewares/isAuthHosteller');


router.post('/createHosteller', hostellerValidator, Control.postCreateHosteller);
router.post('/createHostellerByWarden',isWardenAuth ,hostellerValidator, Control.postCreateHostellerByWarden);
router.post('/hostellerLogin', loginValidator,Control.hostellerLogin);



router.get('/hostellerData',isHostellerAuth,Control.hostellerData);

module.exports = router;