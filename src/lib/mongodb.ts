import { MongoClient } from "mongodb";

const uri: string = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("Add Mongo URI to .env.local");
}

let client: MongoClient; // Define the client variable with the appropriate type.
let clientPromise: Promise<MongoClient>; // Define the clientPromise variable with the appropriate type.

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise
