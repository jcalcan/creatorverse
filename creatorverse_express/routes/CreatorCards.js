import express from "express";
import {
  getCreatorCards,
  getCreatorById,
  addCreator,
  updateCreator,
  deleteCreator
} from "../controllers/creatorCards.js";

const router = express.Router();
//get all creators
router.get("/creator-cards", getCreatorCards);
//get a single creator
router.get("/creator-cards/:id", getCreatorById);

//POST new creator
router.post("/creator-cards", addCreator);
//PUT update creator
router.put("/creator-cards/:id", updateCreator);

//DELETE creator
router.delete("/creator-cards/:id", deleteCreator);

export default router;
