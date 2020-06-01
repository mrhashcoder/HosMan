var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hostelSchema = new Schema({
    hostelId : {
        type:String,
        required:true
    },
    hostelName : {
        type:String,
        required:true
    },
    collageName : {
        type : String
    },
    hostelerList : {
        type : [String]
    },
    requestList : {
        type : [String]
    },
    loginUserName : {
        type : String,
        required : true
    },
    loginPassword : {
        type : String,
        required:true
    },
    contact : {
        type : String
    },
});

module.exports = mongoose.model('Hostel' , hostelSchema);