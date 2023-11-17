import { Document } from "mongoose";

interface UserDocument extends Document {
    firstName: String,
    lastName: String,
    streetAddress: String,
    city: String,
    email: String,
    password: String,

}

export default UserDocument;