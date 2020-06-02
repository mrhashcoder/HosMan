const express = require('express');
const router = express.Router();
const validator = require('../middlewares/CreateHostelValidation');
const control = require('../Controllers/hostelControl');


router.post('/createHostel' ,validator, control.postCreateHostel);





module.exports = router;
