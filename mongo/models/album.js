import mongoose from "mongoose";

const albumSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  release_year: Number,
  type: { type: String, enum: ['Studio Album', 'Live Album', 'Special Session'] },
  tracks: [String]
});
const albumModel = mongoose.model('albums',albumSchema, 'albums')
export default albumModel;
