const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const quizModel=require("../models/quiz.model");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        minLength:5,
        maxLength:20

    },
    fname:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        minLength:5,
        maxLength:20
    }, 
    lname:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        minLength:5,
        maxLength:20
    },
    age:{
        type:Number,
        min:12,
        max:100,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)) 
                throw new Error("invalid email format")
        }
    }, 
    password:{
        type:String,
        trim:true,
        required:true,
        minLength:5,
        maxLength:60
    },
    mainAdmin:{
        type:Boolean,
        default:false
    },
    activeStatus:{
        type:Boolean,
        default:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }, 
    gender:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        enum:["male", "female"]
    },
    request:{
        type:Boolean,
        default:false
    },
    quizResults:[{
        subject:{
            type:String
        },
        mark:{
            type:String
        }
    }],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
},{
    timestamps:true
});

userSchema.virtual("quizzes", {
    ref:"Quiz",
    localField:"_id",
    foreignField:"userId"
});

userSchema.methods.toJSON = function(){
    const data = this.toObject();
    delete data.__v;
    return data;
}

userSchema.pre("save", async function(){
    if(this.isModified("password"))
        this.password = await bcrypt.hash(this.password, 12);
});
userSchema.pre("findByIdAndDelete", async function(){
    await quizModel.deleteOne({userId:this._id});

})
userSchema.statics.loginMe = async (email, password) => {
    const userData = await userModel.findOne( { email } );
    if(!userData) throw new Error ("Invalid Email!");

    const matched = await bcrypt.compare(password, userData.password);
    if(!matched) throw new Error ("Invalid Password!");
    return userData;
}

userSchema.methods.generateToken = async function(){
    const token = jwt.sign({_id: this._id}, process.env.TOKENKEY)
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token
}

const userModel = mongoose.model("User", userSchema)
module.exports = userModel