import express from "express";
import { 
  getAllAlbums, 
  getAlbumByTitle, 
  getAlbumsByType, 
  updateAlbum 
} from "../controllers/albumController.js";

const router = express.Router();

// Get all albums (Sortable by year in your controller)
router.get("/", getAllAlbums);

// Filter albums by type (e.g., /albums/type/Live%20Album)
router.get("/type/:type", getAlbumsByType);

// Get a specific album by its title
router.get("/title/:title", getAlbumByTitle);

// Update album data (like adding a track name)
router.put("/update/:title", updateAlbum);

export default router;