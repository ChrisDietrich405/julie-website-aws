import { Document } from "mongoose";

interface AvailableWorksDocument extends Document {
  price: Number;
  image: String;
  title: String;
  measurements: String;
}

export default AvailableWorksDocument;
