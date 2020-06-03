const express = require('express');
const router = express.Router();
const createHostelValidator = require('../Validators/CreateHostelValidation');
const Control = require('../Controllers/hostelControl');
const loginValidation = require('../Validators/loginValidator');

router.post('/createHostel', createHostelValidator, Control.postCreateHostel);
router.post('/wardenLogin', loginValidation, Control.wardenLogin);




module.exports = router;
