import mongoose from "mongoose"
import {ENV} from "./env.js"
export const connectDB = async () => {
    try {
      if(!ENV.DB_URL){
        throw new Error("DB_URL is not defined in environemnt variables")
      }
      const conn = await mongoose.connect(ENV.DB_URL)
      console.log("Connected to Mongo DB : " ,  conn.connection.host);
    } catch (error) {
        console.error(" X Error Connecting to Mongo DB" , error)
        process.exit(1)
    }
}