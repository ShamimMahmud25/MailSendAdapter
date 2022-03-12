/** @format */

const variables = require("../variables");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/university", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ObjectId = Schema.ObjectId;

const OtpSchema = new Schema({
  email: String,
  otp: String,
});
const OtpModel = mongoose.model("Otp", OtpSchema);

exports.sendOTP = (request) => {
      return OtpModel.create(request);
    };
exports.getOTP = (email,otp) => {
  
  return OtpModel.findOne({ email,otp });
};

// exports.checkDuplicacy = (email) => {
//   return UserModel.findOne({ email });
// };
// exports.checkExistence = (email, password) => {
//   //console.log((1));

//   return UserModel.findOne({ email, password: md5(password) });
// };

// exports.create = (userInfo) => {
//   userInfo.password = md5(userInfo.password);
//   //console.log(userInfo);
//   return UserModel.create(userInfo);
// };

// exports.checkUser = (id) => {
//   //return { fullNme: "Shuhail alam" };
//   return UserModel.findOne({ _id: id });
// };

// //checkExistMail
// exports.checkMailId = (emailInfo) => {
//   return UserModel.findOne({ email: emailInfo });
// };

// //checkuserDetails for Reset password

// exports.checkDetails = (_id, email) => {
//   return UserModel.findOne({ _id, email });
// };


