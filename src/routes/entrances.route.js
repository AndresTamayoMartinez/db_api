import { Router } from "express";
import { getEntrances, getEntrance, createEntrance, updateEntrance, deleteEntrance } from "../controllers/entrance.controller.js";

const entranceRouter = Router()

entranceRouter.get("/", getEntrances);
entranceRouter.get("/:id", getEntrance);
entranceRouter.post("/", createEntrance);
entranceRouter.put("/:id", updateEntrance);
entranceRouter.delete("/:id", deleteEntrance);

export default entranceRouter;