const twilio = require('twilio');


module.exports = async(mesgData , receiver) => {
    try{
        var accountSid = process.env.twilioAccountSid;
        var authToken = process.env.twilioAuthToken;
        var senderContact = process.env.twilioSenderNumber;
        var sender = twilio(accountSid , authToken);
        var receiverContact = 'whatsapp:+91' + receiver;
        
        await sender.messages.create({
            body : mesgData,
            from : senderContact,
            to : receiverContact
        })
        console.log("Mesg Sent!!1");
    }catch(err){
        console.log(err);
        console.log("Some Error Ho gya");
    }
}
