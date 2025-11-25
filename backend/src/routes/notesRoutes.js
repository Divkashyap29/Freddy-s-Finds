import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router = express.Router();

//all functions in notesController.js
router.get("/", getAllNotes); 
router.post("/", createNote); 
router.put("/", updateNote);
router.delete("/", deleteNote);

export default router;

// (controller-based handlers are registered above)

router.post("/", (req, res) => {
  res.status(201).json({message: "post creaeteed"});
});

router.put("/", (req, res) => {
  res.status(200).json({message: "post updated"});
});

router.delete("/", (req, res) => {
  res.status(200).json({message: "post deleted"});
});

//5WWuQKVSeDrvrVgw
//mongodb+srv://innovationhub:5WWuQKVSeDrvrVgw@cluster0.iunhkcb.mongodb.net/?appName=Cluster0