const bcrypt = require('bcrypt');
const Hosteller = require('../Models/Hosteller');
const Hostel = require('../Models/Hostel');
const Port = process.env.PORT;

exports.postCreateHosteller = async(req , res) => {
    try{
        console.log(Port);
        const body = req.body;
        var hostelId = body.hostelId;
        const findHostel = await Hostel.findOne({hostelId : hostelId});
        if(!findHostel){
            res.json({Mesg : "Hostel Not Found!!!"}).status(501);
        }else{
            var hostellerId = body.rollNo;
            var findHosteller = await Hosteller.findOne({rollNo : body.rollNo});
            if(findHosteller){
                res.json({Mesg : "Hosteller Already Exists With This Roll No."}).status(501);
                return;
            }
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

            //Pushing hostller into Hostel Request
            await newHosteller.save();
            findHostel['requestList'].push(hostellerId);
            await findHostel.save();

            res.json({Mesg : "Created New Hosteller"}).status(200);
        }       

    }catch(err){
        console.log(err);
        res.json({Mesg : "Some Error at Server"}).status(400);
    }
}

exports.postCreateHostellerByWarden = async(req , res) => {
    try{
        const body = req.body;
        var hostelId = body.hostelId;
        const findHostel = await Hostel.findOne({hostelId : hostelId});
        if(!findHostel){
            res.json({Mesg : "Hostel Not Found!!!"}).status(501);
        }else{
            var hostellerId = body.rollNo;
            var findHosteller = await Hosteller.findOne({rollNo : body.rollNo});
            if(findHosteller){
                res.json({Mesg : "Hosteller Already Exists With This Roll No."}).status(501);
                return;
            }
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
                approved : true,
            });

            //Pushing hostller into Hostel Request
            await newHosteller.save();
            findHostel['hostellerList'].push(hostellerId);
            await findHostel.save();
            res.json({Mesg : "Created New Hosteller"}).status(200);
        }       

    }catch(err){
        console.log(err);
        res.json({Mesg : "Some Error at Server"}).status(400);
    }
}


