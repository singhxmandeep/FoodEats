import mongoose from "mongoose"

const userScheema = new mongoose.Schema({
    name: {type: String, required: true},
    email:{type:String, required: true, unique: true},
    password:{type:String, required:true},
    cartData: { type: Object, default: {} }
}, {minimize:false})

const userModel = mongoose.models.user || mongoose.model("user", userScheema)

export default userModel;