const mongoose = require("mongoose");
const resultSchema = mongoose.Schema({
    subject:{
        type:String,
        trim:true,
        required:true
    },
 userID:{
    type:String,
    trim:true
 },
 quizTaken:[{
        questionContent:{
            type:String,
            minLength:3,
            maxLength:400,
            required:true
         },
         answer:{
            type:String,
            minLength:1,
            maxLength:40,
            required:true
         },
        submittedAnswer:{
            type:String,
            minLength:1,
            maxLength:40,
           },
        options:[{
            type:String,
                required:true,
                minLength:1,
                maxLength:40
           }],
           mark:{
            type:Number,
            required:true
           }
        }],
    result:{
        type:String
    }
},{timestamps:true});

const resultModel = mongoose.model("QuizResults", resultSchema);
module.exports = resultModel;