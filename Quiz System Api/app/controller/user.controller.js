const userModel = require("../../models/user.model");
const handler = require("../handlers/handler");
const quizModel = require("../../models/quiz.model");
const resultModel = require("../../models/result.model");
const _ = require('lodash');

class User{
    static register = async(req,res)=>{
        try{
            const userData = new userModel(req.body);
           if(!req.body.isAdmin||req.body.username == "MainAdmin"){
            await userData.save();
            handler.resHandler(res, 200, true, userData, "User Has Been Added!");
           }
           else{
             userData.request = true;
             userData.isAdmin = false;
             await userData.save();
            handler.resHandler(res, 200, true, userData, "admin Request Sent");
           }
          
        }
        catch(e){
            handler.resHandler(res, 500, false, e, "Error Adding data");
        }
    }
    static single = async(req,res)=>{
        try{
            const userData = await userModel.findById(req.params.id)
            handler.resHandler(res, 200, true, userData, "users featched")
        }
        catch(e){
            handler.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }

    static delSingle = async(req,res)=>{
        try{
            const userData = await userModel.findByIdAndDelete(req.params.id)
            handler.resHandler(res, 200, true, userData, "users featched")
        }
        catch(e){
            handler.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
    static editSingle = async(req,res)=>{
        try{
            const userData = await userModel.findById(req.params.id)
            for(let key in req.body){
                userData[key]= req.body[key]
            }
            await userData.save()
            handler.resHandler(res, 200, true, userData, "User Editted!")
        }
        catch(e){
            handler.resHandler(res, 500, false, e.message, "Error Editing User")
        }
    }
    
    static generateQuiz = async(req,res)=>{
        try{
            const subject= await quizModel.findById(req.params.id);
            const subName = subject.subject;
            //const token = subject.filter(t=>t.tokens.token == req.user.token);
            let quizRandomizedQuestions = [];
            quizRandomizedQuestions = _.shuffle(subject.question).splice(0, 5);
            const generatedQuiz = new resultModel();

            generatedQuiz.subject = subName;
            generatedQuiz.quizTaken = quizRandomizedQuestions;
            await generatedQuiz.save();
            handler.resHandler(res, 200, true, generatedQuiz, "Quiz Generated!");
        }
        catch(e){
            handler.resHandler(res, 500, false, e.message, "Error Generating Exam");
        }
    
  }
  static generateResult = async(req,res)=>{
    try{
       const quizData = await resultModel.findById(req.params.resId);
       const userData = await userModel.findById(req.params.userId);
       let totalMark = 0;
       let currentMark = 0;
       let index = 0;
       for(let key of quizData.quizTaken){
        totalMark = totalMark + key.mark;
       
        if(key.answer == req.body.submittedAnswers[index]){
           currentMark = currentMark + key.mark ;
        }
        index++;
    }

    quizData.result = `${currentMark} / ${totalMark}`;
    await quizData.save();
    const result = {
        "subject" : quizData.subject,
        "mark" : quizData.result
    }
    for(let sub of userData.quizResults){
        if(sub.subject == quizData.subject){
           handler.resHandler(res,200,true,{},"You've Already Taken This Quiz Retakes Are not Allowed!");
           return;
        }
    }
    userData.quizResults.push(result);
    await userData.save();
    handler.resHandler(res, 200, true, {currentMark,totalMark}, "Result Generated Redirecting to your Profile in 5...");
    
      
    }
    catch(e){
        handler.resHandler(res, 500, false, e.message, "Error Generating Result");
    }
}

}
module.exports= User;