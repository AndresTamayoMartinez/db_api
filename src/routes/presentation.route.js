import { Router } from "express";
import { getPresentations, getPresentation, createPresentation, updatePresentation, deletePresentation } from "../controllers/presentation.controller.js";

const presentationRouter = Router()

presentationRouter.get("/", getPresentations);
presentationRouter.get("/:id", getPresentation);
presentationRouter.post("/", createPresentation);
presentationRouter.put("/:id", updatePresentation);
presentationRouter.delete("/:id", deletePresentation);

export default presentationRouter;