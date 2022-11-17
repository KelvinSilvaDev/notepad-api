import express from "express";
import NoteController from "../controllers/notepadController.js";

const router = express.Router();

router
  .get("/notes", NoteController.getNotes)
  .post("/notes", NoteController.addNote);

export default router;
