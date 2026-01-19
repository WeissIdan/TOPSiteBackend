import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  release_year: Number,
  type: { type: String, enum: ['Studio Album', 'Live Album', 'Special Session'] },
  tracks: [String]
});

module.exports = mongoose.model('Album', albumSchema);