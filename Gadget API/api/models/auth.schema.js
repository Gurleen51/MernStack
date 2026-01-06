import mongoose from "mongoose";


const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,

    },
    password: {
        type: String,
        required: true
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
}, 
{
    timestamps: true
})

export const Auth= mongoose.model("Auth",authSchema)