import mongoose from "@/lib/mongoose";
const { Schema } = mongoose;

if (!mongoose.models.available_works) {
  const availableWorksSchema = new Schema({
    _id: Number,
    price: Number,
    image: String,
  });
  mongoose.model("available_works", availableWorksSchema);
}
export const AvailableWorksModel = mongoose.models.available_works;
