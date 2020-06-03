const express = require('express');
const router = express.Router();
const Control = require('../Controllers/hostellerControl');
const hostellerValidator = require('../Validators/CreateHostellerValidation');
const isWardenAuth = require('../Middlewares/isAuthWarden');
const loginValidator = require('../Validators/loginValidator');

router.post('/createHosteller', hostellerValidator, Control.postCreateHosteller);
router.post('/createHostellerByWarden',isWardenAuth ,hostellerValidator, Control.postCreateHostellerByWarden);
router.post('/hostellerLogin', loginValidator,Control.hostellerLogin);

module.exports = router;