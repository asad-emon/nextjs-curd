import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

function dbConnection() {
    try {
        mongoose.connect(uri);
        console.log("MongoDB connected");
    }
    catch(ex) {
        console.log(ex);
    }
}
export default dbConnection;