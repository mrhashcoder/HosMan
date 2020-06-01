const bcrypt = require('bcrypt');
const Hosteller = require('../Models/Hosteller');
const Hostel = require('../Models/Hostel');

exports.postCreateHosteller = async(req , res) => {
    try{
        const body = req.body;
        var hostelId = body.hostelId;
        const findHostel = Hostel.findOne({hostelId : hostelId});
        if(!findHostel){
            res.json({Mesg : "Hostel Not Found!!!"}).status(206);
        }else{
            var hostellerId = body.rollNo;
            var rollNo = body.rollNo;
            var hostellerName = body.hostellerName;
            var roomNo = body.roomNo;
            var contact = body.contact;
            var email = body.emaill;
            var password = body.password;
            var hashedPassword = await bcrypt.hash(password,12);

            const newHosteller = new Hosteller({
                hostelId : hostelId,
                hostellerId : hostellerId,
                rollNo : rollNo,
                hostellerName : hostellerName,
                roomNo : roomNo,
                contact : contact,
                email : email,
                password : hashedPassword,
                approved : false,
            });

            newHosteller.save();
            res.json({Mesg : "Created New Hosteller"}).status(200);
        }       

    }catch(err){
        console.log(err);
        res.json({Mesg : "Some Error at Server"}).status(400);
    }
}