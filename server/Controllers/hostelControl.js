// Hostel Control 
const Hostel = require('../Models/Hostel');
const bcrypt = require('bcrypt');
const utilFunction = require('../utils/UtillFunction');


exports.postCreateHostel = async(req,res) => {
    try{
        const body = req.body;
        var hostelName = body.hostelName;
        var collageName = body.collageName;
        var loginUserName = body.loginUserName;
        var loginPassword = body.loginPassword;
        var hashedPassword = await bcrypt.hash(loginPassword,12);
        var contact = body.contact;     
        var hostellerList = new Array();
        var requestList = new Array();
        var email = body.email;
        var hostelId = utilFunction.getId();
        var newHostel = new Hostel({
            hostelId : hostelId,
            hostelName : hostelName,
            collageName : collageName,
            hostellerList : hostellerList,
            requestList : requestList,
            loginUserName : loginUserName,
            loginPassword : hashedPassword,
            email : email,
            contact : contact
        });
        await newHostel.save();
        res.json({Mesg : "Hostel Created"}).status(200);
    }catch(err){
        console.log("Error");
        res.json({mesg : "Some Error"}).status(400);
    }
}


