"use strict";

const Validator = require("validatorjs");
const OtpModel = require("../models/Otps");
// const variables = require("../variables/index");
 const {sendMail}=require("../helper/sendMail")

const otpSendRules={
    email:"required|email",
    otp:"required"
}


exports.sendOTP = async (ctx) => {
    try {
        const email = ctx.request.body.email;
        const otp=String(Math.floor(100000 + Math.random() * 900000));
        const request={email,otp};
        const validation = new Validator(request, otpSendRules);
        
        if (validation.fails()) {
            throw {
                status: 400,
                code:2000,
                message: "Invalid request",
                error:{
                    code:1000,
                    message:"Invalid requrest"
                  }
            };
        }
         sendMail(request.email,otp);
         console.log(otp);
        await OtpModel.sendOTP({email,otp});

        ctx.body = {
            message: "OTP send successfully"
        };
    } catch (e) {
        const { status, message, error } = e;
        // console.log(error);
        ctx.status = status || 400;
        ctx.body = { message, error };
    }
};
exports.verifyEmail = async (ctx) => {
    try {
        const request = ctx.request.body;
        const validation = new Validator(request, otpSendRules);
        if (validation.fails()) {
            throw {
                status: 400,
                message: "Invalid request",
                error:{
                    code:2000,
                    message:"Invalid requrest"
                  }
            };
        }
       const OTPData= await OtpModel.getOTP(request.email);
       if(request.otp!==OTPData.otp){
        throw {
            status: 400,
            message: "OTP Invalid/expired",
            error:{
                code:2001,
                message:"OTP Invalid/expired"
              }
        };
       }

        ctx.body = {
            message: "Email verified "
        };
    } catch (e) {
        const { status, message, error } = e;
        // console.log(error);
        ctx.status = status || 400;
        ctx.body = { message, error };
    }
};


