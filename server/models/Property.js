import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, default: "Apartment" },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);
export default Property;