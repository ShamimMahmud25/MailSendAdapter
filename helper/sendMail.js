const nodemailer=require('nodemailer');
exports.sendMail = async (email,otp) => {
    try{
        const MailingPurpose={
            varifyEmail:"Please verify your email with the given OTP"
        }
        let mailTransporter=nodemailer.createTransport({
            service: "gmail",
            auth:{
                user:"testabcd134@gmail.com",
                pass:"Nopassword@#$%"
            }
        })
        
        let details={
            from:"testabcd134@gmail.com",
            to:`${email}`,
            subject:"Email Varification",
            text:"",
            html:`<br><br> <p>Dear User,</p><br/> <p>${MailingPurpose.varifyEmail}<br/><br/>OTP is : ${otp}</p>`
        }
        
       await mailTransporter.sendMail(details,(err)=>{
            if(err){
                console.log("Sending Error ",err);
            }
            else{
                console.log("Mail Sent Perfectly");
            }
        })
    } catch (e){
        console.log("Error Occured");
    }
    
  };

