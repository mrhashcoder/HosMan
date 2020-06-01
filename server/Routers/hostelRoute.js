const express = require('express');
const router = express.Router();
const validation = require('../middlewares/CreateHostelValidation');
const control = require('../Controllers/hostelControl');


router.post('/createHostel' ,validation, control.postCreateHostel);





module.exports = router;
