
const nodemailer=require('nodemailer');
let mailTransporter=nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:"testabcd134@gmail.com",
        pass:"Nopassword@#$%"
    }
})

let details={
    from:"testabcd134@gmail.com",
    to:"mahmudshamim355@gmail.com",
    subject:"Mental Health Treatment",
    text:"Dear Sumaiya",
    html:" <br><br> <p>Dear User,</p><br/> <p> Are you upset for something?<br/><br/> Do you think too much about your future?<br/><br/> Do you have something that you can not share with anyoune?<br/> <br/> I am Doctor Prof. Dr. Abdullah Al Mamun Hussain.Currently, I am available in Rajshahi Medical Collage Hospital. I am also available in Medipath Diagnostic Complex.I think you have to visit me soon. </p> <h3 style='color:blue;text-align: center;'>Medipath Diagnostic Complex, Rajshahi</h3><p style='text-align: center;'><span style='color:cornflowerblue'>Address:</span> Shuvecca View, Greater Road, Laxmipur, Kajihata, Rajshahi</p><p style='text-align: center;'><span style='color:cornflowerblue'>Visiting Hour:</span> Unknown. Please call to know visiting hour</p><p style='text-align: center;'><span style='color:cornflowerblue'>Appointment:</span> +8801712685297</p> </p><p>Best Regards</p><p>Prof. Dr. Abdullah Al Mamun Hussain</p> <p> MBBS, M.Phil, PhD, FCPS (Psychiatry)</p> <p>Mental Diseases, Brain Disorder & Drug Addiction Specialist</p> <p>Rajshahi Medical College & Hospital</p>"
}

mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("Sending Error ",err);
    }
    else{
        console.log("Mail Sent Perfectly")
    }
})