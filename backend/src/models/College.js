import mongoose from "mongoose"

const collegeSchema = new mongoose.Schema({
    collegeName : {
        type : String,
        required : true,
    },
    collegeCode : {
        type : String,
        required : true,
        unique : true,
    },
    principalName : String,
    pricipalMobile : String,
    principalEmail : String,
    coordinatorName : String,
    coordinatorMobile : String,
    coordinatorEmail : String,
},
{timestamps : true},
);


export const College = new mongoose.model("College", collegeSchema);