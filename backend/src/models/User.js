import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : true,
        unique : true,
    },
    passwordHash : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        enum : ['admin', 'college'],
        required : true,
    },
    collegeId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "college",
        default : null,
    },
}, {timestamps : true}
)

export const User = new mongoose.model("User", userSchema);