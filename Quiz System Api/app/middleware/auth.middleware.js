const userModel = require("../../models/user.model");
const { resHandler } = require("../handlers/handler");
const {verify} = require("jsonwebtoken");

class Auth{
   static adminAuth = async(req, res, next)=>{
        try{
            const token = req.header("Authorization").replace("bearer ", "")
            const decodedToken = verify(token, process.env.TOKENKEY)
            const userData = await userModel.findOne({
                _id: decodedToken._id,
                "tokens.token":token,
                isAdmin:true
            })
            if(!userData)throw new Error("User Not Found!")
            req.user = userData
            req.token = token
            next();
        }
        catch(e){
            resHandler(res, 500, false, e.message, "Authorization Failed!")
        }
    }
    static userAuth = async(req, res, next)=>{
        try{
            const token = req.header("Authorization").replace("bearer ", "")
            const decodedToken = verify(token, process.env.TOKENKEY)
            const userData = await userModel.findOne({
                _id: decodedToken._id,
                "tokens.token":token,
                isAdmin:false
            })
            if(!userData)throw new Error("User Not Found!")
            req.user = userData;
            req.token = token;
            next();
        }
        catch(e){
            resHandler(res, 500, false, e.message, "Authorization Failed!")
        }
    }
}

module.exports = Auth;