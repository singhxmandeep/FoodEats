import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://singhxmandeep:mandeep1@cluster0.vwocesa.mongodb.net/foodEats').then(()=>{console.log("DB connected");}) 
  
}; 