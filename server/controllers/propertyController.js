// backend/controllers/propertyController.js
import Property from "../models/Property.js";

// Get all properties
export const getAllProperties = async (req, res) => {
  try {
    const props = await Property.find().sort({ createdAt: -1 });
    res.json(props);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch properties" });
  }
};

// Create new property
export const createProperty = async (req, res) => {
  try {
    const newProp = new Property(req.body);
    await newProp.save();
    res.status(201).json(newProp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add property" });
  }
};

// Update property
export const updateProperty = async (req, res) => {
  try {
    const updated = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated)
      return res.status(404).json({ error: "Property not found" });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update property" });
  }
};

// Delete property
export const deleteProperty = async (req, res) => {
  try {
    const doc = await Property.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Property not found" });
    res.json({ message: "Property deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete property" });
  }
};
