import mongoose from "mongoose";

const talkschema = new mongoose.Schema({
    username: {
        type : String,
        required : [true, "It is required sir"],
        unique : true
    },
    email: {
        type : String,
        required : [true, "It is required sir"],
        unique : true
    },
    message: {
        type : String,
        required : [true, "It is required sir"],
        unique : true
    },
    timed: {
        type : String,
        required : [true, "It is required sir"],
        unique : true
    },

})

const Talk = mongoose.models.talks || mongoose.model("talks", talkschema)

export default Talk;