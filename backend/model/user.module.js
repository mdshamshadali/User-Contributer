import mongoose from "mongoose";

const userShcema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
        require: true
    }
},{timestamps:true})

export const User = new mongoose.model('User', userShcema);