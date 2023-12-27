import { Router } from "express";
import { getEntranceDetails, getEntranceDetail, createEntranceDetail, updateEntranceDetail, deleteEntranceDetail } from "../controllers/entrance_detail_controller.js";

const entranceDetailRouter = Router()

entranceDetailRouter.get("/", getEntranceDetails);
entranceDetailRouter.get("/:id_sales/:id_products", getEntranceDetail);
entranceDetailRouter.post("/", createEntranceDetail);
entranceDetailRouter.put("/:id_sales/:id_products", updateEntranceDetail);
entranceDetailRouter.delete("/:id_sales/:id_products", deleteEntranceDetail);

export default entranceDetailRouter;