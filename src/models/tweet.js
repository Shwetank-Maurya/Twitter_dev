import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250, 'Tweet cannot be more that 250 charachters.']
    },
},{timestamps:true});


const Tweet = mongoose.model('Tweet',tweetSchema);
export default Tweet;