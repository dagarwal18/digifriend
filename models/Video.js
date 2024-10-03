import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    username:{//username
        type:String,
        unique:true,
        required:true,
    },
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
    },
    imgURL:{
        type:String,
        required:true,
    },
    vidURL:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    tags:{
        type:[String]
    },
    uploadedAt:{
        type:Date,
        default:Date.now()
    }},
{timestamps:true}
);

export default mongoose.model("Video",VideoSchema);