// Hostel Control 
const Hostel = require('../Models/Hostel');
const Hosteller = require('../Models/Hosteller');
const bcrypt = require('bcrypt');
const utilFunction = require('../utils/UtillFunction');
const jwt = require('jsonwebtoken');

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
        var findHostel = await Hostel.findOne({loginUserName : loginUserName});
        if(findHostel){
            res.json({Mesg : "User Name Taken"}).status(206);
            return;
        }
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
        res.json({mesg : "Some Error"}).status(500);
    }
}


exports.wardenLogin = async(req , res) => {
    try{
        const body = req.body;
        var username = body.username;
        var password = body.password;

        var findHostel = await Hostel.findOne({loginUserName : username});
        if(!findHostel){
            console.log("Hostel Not Found!!!");
            res.json({Mesg : "Hostel with this UserName is Not Found!!!"}).status(206);
            return;
        }

        bcrypt.compare(password , findHostel['loginPassword'], (err, data) => {
            if(err){
                throw new Error(err);
            }else if(data){
                const payload = {
                    warden : findHostel['loginUserName'],
                    hostelId : findHostel['hostelId'],
                }
                const wardenTokenSecret = process.env.wardenTokenSecret;
                const wardenJwtToken = jwt.sign(payload , wardenTokenSecret ,{
                    expiresIn : '6h',
                });
                res.json({
                    success : true,
                    wardenJwtToken : "wardenBearer " + wardenJwtToken,
                }).status(200);
            }
            else{
                console.log("Incorrect Password!!");
                res.json({Mesg : "Incorrect Password!!"}).status(206);
            }
        })
        
    }catch(err){
        console.log(err);
        res.json({Mesg : "Some Error at Server Control"}).status(400);
    }
}

exports.approveHosteller = async(req, res) => {
    try{
        const hostellerId = req.body.hostellerId;
        if(!hostellerId){
            res.json({Mesg : "Hosteller Id not Recieved!1"}).status(206);
            return;
        }
        // Hostller Doc Update
        var findHosteller = await Hosteller.findOne({hostellerId : hostellerId});
        if(!findHosteller){
            res.json({Mesg : "Hosteller Not Found!!"}).status(206);
        }
        
        findHosteller['approved'] = true;
        await findHosteller.save();

        //Hostel Documentation Updating
        const hostelId = req.hostelId;
        var findHostel = await Hostel.findOne({hostelId : hostelId});
        findHostel['requestList'] = findHostel['requestList'].filter(x => x !== hostellerId);
        findHostel['hostellerList'].push(hostellerId);
        await findHostel.save();        

        res.json({Mesg : "Approved!!"}).status(200);
    }catch(err){
        console.log("Some Error At Server!!");
        console.log(err);
        res.json({Mesg : "Some Error at Server"}).status(400);
    }
}

