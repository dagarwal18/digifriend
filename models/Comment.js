import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    username:{//username
        type:String,
        required:true,
    },
    videoId:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    }},
    {timestamps:true}
);

export default mongoose.model("Comment",CommentSchema);