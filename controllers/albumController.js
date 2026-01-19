import albumModel from "../models/Album.js";

// 1. Get all albums (The full list for your homepage)
export const getAllAlbums = async (req, res) => {
  try {
    const albums = await albumModel.find().sort({ release_year: 1 });
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: "Error fetching albums", error: error.message });
  }
};

// 2. Get a single album by Title (Useful for an album details page)
export const getAlbumByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const album = await albumModel.findOne({ title: title });
    
    if (!album) {
      return res.status(404).json({ message: "Album not found." });
    }
    
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ message: "Error fetching album", error: error.message });
  }
};

// 3. Get albums by Type (e.g., Only show "Live Album")
export const getAlbumsByType = async (req, res) => {
  try {
    const { type } = req.query; // e.g., /albums/filter?type=Live Album
    const albums = await albumModel.find({ type: type });
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: "Error filtering albums", error: error.message });
  }
};

// 4. Update an album (Useful if you want to add a track later)
export const updateAlbum = async (req, res) => {
  try {
    const { title } = req.params;
    const updatedAlbum = await albumModel.findOneAndUpdate(
      { title: title },
      req.body,
      { new: true } // Returns the updated document
    );
    res.status(200).json(updatedAlbum);
  } catch (error) {
    res.status(500).json({ message: "Error updating album", error: error.message });
  }
};