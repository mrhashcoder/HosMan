

module.exports = CreateHostellerValidation = (req,res,next) => {
    try{
        const body = req.body;
        var hostelId = body.hostelId;
        var rollNo = body.rollNo;
        var hostellerName = body.hostellerName;
        var roomNo = body.roomNo;
        var contact = body.contact;
        var password = body.password;

        if(!hostelId){
            res.json({Mesg : "Hostel Id is not Valid!!"}).status(501);
        }else if(!rollNo){
            res.json({Mesg : "Room no is not Valid!!"}).status(501);
        }else if(!hostellerName){
            res.json({Mesg : "Hosteller Name is not Valid!!"}).status(501);
        }else if(!roomNo){
            res.json({Mesg : "Room no is not Valid!!"}).status(501);
        }else if(!contact){
            res.json({Mesg : "Contact is not Valid!!"}).status(501);
        }else if(!password){
            res.json({Mesg : "Password is not Valid!!"}).status(501);
        }else{
            next();
        }


    }catch(err){
        console.log("Error At Middleware!!");
        res.json({Mesg : "MiddleWare Error"}).status(500);
    }
}