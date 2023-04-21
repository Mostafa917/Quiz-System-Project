const userModel = require("../../models/user.model");
const quizModel = require("../../models/quiz.model");
const handler = require("../handlers/handler");

class Admin{
  //User Functions//

    static showSingleUser = async(req,res)=>{
        try{
            const userData = await userModel.findById(req.params.id)
            handler.resHandler(res, 200, true, userData, `User ${req.params.id} Data has been Fetched Successfully!`)
        }
        catch(e){
            handler.resHandler(res, 500, false, e.message, `Error Fetching ${req.params.id} Data`)
        }
    }
    static delAllUsers = async(req,res)=>{
        try{
            await userModel.deleteMany({isAdmin:false});
            handler.resHandler(res, 200, true, {}, "Users Deleted");
        }
        catch(e){
            handler.resHandler(res, 500, false, e.message, "Error Deleting all Users");
        }
    }
    static delUser = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id);
            if(user.username=="mainadmin"){
                handler.resHandler(res, 200, true, user.username, "Main Admin Must not be Deleted!")
            }
            else{
                await userModel.findByIdAndDelete(req.params.id);
                handler.resHandler(res, 200, true, {}, "User Deleted!")
            }
            
        }
        catch(e){
            handler.resHandler(res, 500, false, e.message, "Error Deleting User");
        }
    }
    static viewRequests = async(req,res)=>{
    try{
        const adminRequests = await userModel.find({request:true});
        handler.resHandler(res, 200, true, adminRequests, "Requests Fetched!");
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error Fetching Requests");
    }
    }
    static manageRequest = async(req,res)=>{
 
        try{
            const user = await userModel.findById(req.params.id);
            if(req.params.accept == "true"){
                user.isAdmin = true;
                user.request = false;
                user.save();
                handler.resHandler(res, 200, true, user, "Request Accepted!");
            }
            else{
                user.request = false;
                user.save();
                handler.resHandler(res, 200, true, user, "Request Declined!");
            }

        }
        catch(e){
            handler.resHandler(res, 500, false, e.message, "Error Managing Request");
        }
    }
//User Functions//

//

//Quiz Functions//


//Question-Related//

static addQuestions = async(req,res)=>{
    try{
        const subjectCheck = await quizModel.find({subject:req.body.subject});
        if(subjectCheck.length == 0){
            const quizData = new quizModel(req.body);
            await quizData.save();
            handler.resHandler(res, 200, true, quizData, "Questions has been Added!");
        }
        else{
           const data = {
            "questionContent":req.body.question[0].questionContent,
            "answer":req.body.question[0].answer,
            "options":req.body.question[0].options,
            "mark":req.body.question[0].mark
          }
           await subjectCheck[0].question.push(data);
           await subjectCheck[0].save();
            handler.resHandler(res, 200, true, subjectCheck, "Questions has been Added!");
        } 
     }
     catch(e){
         handler.resHandler(res, 500, false, e, "Error Adding data");
     }
 }
static showSingleQuestion = async(req,res)=>{
    try{
        const sub= await quizModel.findById(req.params.id);
        const quest = await sub.question.find(x=>x.id==req.params.questId);
        handler.resHandler(res, 200, true, quest, `Data has been Fetched Successfully!`);
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, `Error Fetching ${req.params.id} Data`);
    }
}
static showSingleQuestionWithSubject = async(req,res)=>{
    try{
        const sub= await quizModel.findById(req.params.id);
        const subject = sub.subject;
        const quest = await sub.question.find(x=>x.id==req.params.questId);
        const question = [];
        question.push(quest);
        handler.resHandler(res, 200, true, {subject,question}, `Data has been Fetched Successfully!`);
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, `Error Fetching ${req.params.id} Data`);
    }
}
static editQuestion = async(req,res)=>{
    try{
        const subject= await quizModel.findById(req.params.id);
        const questionData = await subject.question.find(x=>x.id==req.params.questId);

        for(let key in req.body){
            if(key == "question"){
                for(let i = 0; i<req.body[key].length;i++){
                    for(let questKey in req.body[key][i]){
                        questionData[questKey] = req.body[key][i][questKey];
                    }
                }             
            }
            else{
                subject[key]= req.body[key];
            }             
        }
        await subject.save();      
        handler.resHandler(res, 200, true, subject, "Question Edited!");
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error Editing Question");
    }
}
static showAllQuestions = async(req,res)=>{
    const questions= await quizModel.find();

        if(!questions) {
            handler.resHandler(res, 500, false, {}, "Questions Don't Exist");
        }
        else{
           
            handler.resHandler(res, 200, true, questions , "All Questions Fetched!");
        }
        
    }

static delQuestion = async(req,res)=>{
        try{
            const subject= await quizModel.findById(req.params.id);
            const questionData = await subject.question.filter(x=>x.id==req.params.questId);
            if(questionData.length == 0){
                handler.resHandler(res, 200, true, questionData, "Question Not Found!");
            }
            else{
                subject.question.splice(subject.question.indexOf(questionData[0]),1);
                await subject.save();
                handler.resHandler(res, 200, true, subject, "Question Deleted");
            }

        }
        catch(e){
            handler.resHandler(res, 500, false, e.message, "Error Deleting Question");
        }
    }
//Subject-Related//

static showSubjectQuestions = async(req,res)=>{
    try{
        const quizData = await quizModel.findById(req.params.id);
        handler.resHandler(res, 200, true, quizData, `Quiz ${req.params.id} Data has been Fetched Successfully!`);
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, `Error Fetching ${req.params.id} Data`);
    }
}
static delSubject = async(req,res)=>{
    try{
       await quizModel.findByIdAndDelete(req.params.id);
        handler.resHandler(res, 200, true, {}, `Category Deleted!`);
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error Deleting Category");
    }
}
static delAllSubjects = async(req,res)=>{
    try{
        await quizModel.deleteMany();
        handler.resHandler(res, 200, true, {}, "Questions Deleted!");
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error Deleting Questions");
    }
}
//Question-Related//

//Quiz Functions//
//
}

module.exports = Admin;