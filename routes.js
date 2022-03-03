/** @format */
const koaCompose = require("koa-compose");

const Router = require("koa-router");
const { health } = require("./controllers/health");
const {sendOTP,verifyEmail}=require("./controllers/otp");


const routers = new Router();

routers.get("/", health);
routers.post("/sendOTP",sendOTP);
routers.post("/verifyEmail",verifyEmail);


module.exports = routers;

//routers.get('/transaction', statementController.registerTransaction);
