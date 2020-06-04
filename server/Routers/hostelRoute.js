const express = require('express');
const router = express.Router();
const createHostelValidator = require('../Validators/CreateHostelValidation');
const Control = require('../Controllers/hostelControl');
const loginValidation = require('../Validators/loginValidator');
const isAuthWarden = require('../Middlewares/isAuthWarden');


router.post('/createHostel', createHostelValidator, Control.postCreateHostel);
router.post('/wardenLogin', loginValidation, Control.wardenLogin);
router.post('/approveHosteller', isAuthWarden, Control.approveHosteller);
router.post('/rejectHosteller', isAuthWarden, Control.rejectHosteller);
router.post('/removeHosteller', isAuthWarden, Control.removeHosteller);
router.post('/sendNotice', isAuthWarden, Control.sendNotice);
router.post('/sendMesg', isAuthWarden, Control.sendMesg);

router.get('/hostellerList', isAuthWarden, Control.hostellerList);
router.get('/requestList', isAuthWarden , Control.requestList);
router.get('/noticeList',isAuthWarden, Control.noticeList);

module.exports = router;
