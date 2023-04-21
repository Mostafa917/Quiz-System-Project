const userModel = require("../../models/user.model");
const quizModel = require("../../models/quiz.model");
const handler = require("../handlers/handler");

class Shared{
/*static updatePimg = async(req,res)=>{
    try{
        // const fs = require("fs")
        // const ext = req.file.originalname.split(".").pop()
        // const newName = req.file.path+"."+ext
        // fs.renameSync(req.file.path, newName)
        const ext = Helper.fileHandler(req)
        req.user.image = `${process.env.APPUrl}${req.file.filename}.${ext}`
        await req.user.save()
        Helper.resHandler(res, 200, true, req.user, "done")
    }
    catch(e){
        Helper.resHandler(res, 500, false, e.message, "Error featch data")
    }
}
*/
static login = async(req, res)=>{
    try{
       
       const userData = await userModel.loginMe(req.body.email, req.body.password)
       const token = await userData.generateToken()
       handler.resHandler(res,200, true, {userData,token}, "done")
    }
    catch(e){
        handler.resHandler(res, 500, false, e, e.message)
    }
}
static logout = async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter(t => t.token != req.token );
        await req.user.save();
        handler.resHandler(res, 200, true, {}, "Logged Out!");
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "An Error has Occured during Logout!");
    }
}
static getTokenId  = async(req,res)=>{
    try{
    const currToken = req.body.token;
      const users = await userModel.find();
      let userData;
      for (let user of users){
        for (let token of user.tokens){
         if(token.token == currToken){
            userData = user;
            break;
         }
        
        }
      }
      handler.resHandler(res,200,true,userData,"userId Fetched");
    }
    catch(e){
        handler.resHandler(res,500,false,e.message,"Error getting token id");
    }
}
static logoutAll = async(req,res)=>{
    try{
        req.user.tokens = [];
        await req.user.save()
        handler.resHandler(res, 200, true, req.user, "All User Tokens cleared Logout Complete")
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error Logging All Out")
    }
}
static viewProfile = async(req,res)=>{
    try{
        const profileData = await userModel.findById(req.params.id);
        for(let index in profileData.tokens){
            if(profileData.tokens[index].token == req.token){
                handler.resHandler(res, 200, true, profileData, "Data Fetched!");
                return;
            }
        }
           handler.resHandler(res, 403, false, {}, "Unauthorized!");
        
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error Fetching Data");
    }

}
static showAllUsers = async(req,res)=>{
    try{
        const userData = await userModel.find();
        handler.resHandler(res, 200, true, userData, "Users Fetched!")
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error Fetching Users")
    }
}
static showSubjects = async (req,res)=>{
    try{
        const qModel = await quizModel.find();
        const subjects = [];

        for(let key in qModel){
            const subject ={
                name:"",
                id:""
            };
            if(qModel[key].subject){
                subject.name=qModel[key].subject;
                subject.id=qModel[key].id;
               subjects.push(subject);
            }
        }
        handler.resHandler(res, 200, true,subjects, "Subjects Fetched!")
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error Fetching Subjects")
    }
  }
  static activation = async(req,res)=>{
    try{
        const profileData = await userModel.findById(req.params.id);
        for(let index in profileData.tokens){
            if(profileData.tokens[index].token == req.token){
                if(profileData.activeStatus == false){
                    profileData.activeStatus = true;
                    await profileData.save();
                    handler.resHandler(res, 200, true, profileData, "Activity Editted");
                  
                return;
                }
                if(profileData.activeStatus == true){
                    profileData.activeStatus = false
                    await profileData.save();
                    handler.resHandler(res, 200, true, profileData, "Activity Editted");
                      return;
                }               
                
            }
        }
           handler.resHandler(res, 200, true, {}, "Unauthorized!");
        
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error During Activation/Deactivation")
    }
  }
  static editUser = async(req,res)=>{
    try{
        const userData = await userModel.findById(req.params.id);
        const users = await userModel.find();
        const userName =  users.find(u=>u.username == req.body.username);
        const userEmail =  users.find(u=>u.email == req.body.email);
        let usernameFlag = false;
        let emailFlag = false; 
        
        if(req.body.username.toLowerCase().includes("admin") && userData.username !="mainadmin"){
            handler.resHandler(res, 403, false, {},"Username can't include admin");
        }
        else{
          
        if(userName){
            if(userName._id==req.params.id){
                usernameFlag = false;
             }
             else{
                usernameFlag = true;
             }
        }
         if(userEmail){
            if(userEmail._id == req.params.id){
                emailFlag = false;
             }
             else{
                emailFlag = true;
             }
         }

       
      if(usernameFlag&&emailFlag){
        handler.resHandler(res, 403, false, {}, "Username and Email are Already Registered");
      }
      else if(usernameFlag&&!emailFlag){
        handler.resHandler(res, 403, false, {}, "Username is Already Taken");
      }
      else if(!usernameFlag&&emailFlag){
        handler.resHandler(res, 403, false, {}, "Email is Already Registered");
      }
      else if(!usernameFlag&&!emailFlag){
        for(let key in req.body){
            if(req.body[key] != ""){ 
                userData[key]= req.body[key]
            }
           
        }
        await userData.save()
        handler.resHandler(res, 200, true, userData, "User Edited!")
      }}
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error Editting User")
    }
}


}
module.exports = Shared;