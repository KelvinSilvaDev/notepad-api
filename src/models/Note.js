import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    id: { type: String },
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const notes = mongoose.model("notes", noteSchema);

export default notes;
