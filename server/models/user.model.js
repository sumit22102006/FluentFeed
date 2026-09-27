const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    FullName:{
        type:String,
        require:true,
        trim:true
    },
    profilePic:{
        type:String,
        default:null,
    },
    englishLevel:{
        type:String,
        require:true,
        enum:['Beginner' , 'Intermediate' , 'Advance']
    },
    learningGoal:{
        type:String,
        require:true,
        enum:['Job interview' , 'Daily communication' , 'Business English'],
    },
    prefferedSpeakingTime:{
        type:String,
        require:true,
        enum:['Moning' , 'Afternoon' ,'Evening' , 'Night'],
    },
    nativeLanguage:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    }


})

const User = mongoose.model("User" , UserSchema);

module.exports= User;