/** @format */
const koaCompose = require("koa-compose");

const Router = require("koa-router");
const { health } = require("./controllers/health");
const {sendOTP,verifyEmail,SendEmail}=require("./controllers/otp");


const routers = new Router();

routers.get("/", health);
routers.post("/sendOTP",sendOTP);
routers.post("/verifyEmail",verifyEmail);
routers.post("/sendEmail",SendEmail)

module.exports = routers;

//routers.get('/transaction', statementController.registerTransaction);
