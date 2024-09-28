import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://santhoshganesh1023:Ganesh$9803@cluster0.60e1x.mongodb.net/Hungry-delevery').then(()=>console.log("DataBase Connected"));
}