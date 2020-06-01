const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//hostlerId and rollno will be same
var hostellerSchema = new Schema({
    hostellerId : {
        type : String,
        required : true
    },
    rollNo : {
        type:String,
        required:true
    },
    hostellerName : {
        type:String,
        required : true
    },
    roomNo : {
        type : String,
        required : true
    },
    contact : {
        type : String
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required:true
    }    
});


module.exports = mongoose.model('Hosteller' , hostellerSchema);