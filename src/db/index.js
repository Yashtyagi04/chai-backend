import mongoose from "mongoose";
import{DB_NAME} from "../constants.js"

const connectdb=async()=>{
    try{
        console.log("URI being used:", process.env.MONGODB_URI);
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(` abeee betichod MongoDB connected: ${connectioninstance.connection.host}`)

    }
    catch(error){
        console.error("oooo bc fail hogya :(",error);
        process.exit(1)

    }
}
export default connectdb