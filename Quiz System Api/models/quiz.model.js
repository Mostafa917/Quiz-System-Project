const { min } = require("lodash");
const mongoose = require("mongoose");
const quizSchema = mongoose.Schema({
    subject:{
        type:String,
        trim:true,
        required:true,
        minLength:2,
        maxLength:20
    },
    question:[{
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
        options:[{
            type:String,
                required:true,
                minLength:1,
                maxLength:40
           }],
           mark:{
            type:Number,
            required:true,
            min:1,
            max:100
           }
        }]
    },{
        timestamps:true
    });

const quizModel = mongoose.model("Quiz", quizSchema);
module.exports = quizModel;