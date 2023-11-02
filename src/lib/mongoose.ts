import mongoose from "mongoose";

const uri: string = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("Add Mongo URI to .env.local");
}

mongoose.connect(uri).catch((error) => console.log(error));

export default mongoose;
