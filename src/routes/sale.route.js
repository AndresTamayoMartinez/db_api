import { Router } from "express";
import { getSales, getSale, createSale, updateSale, deleteSale } from "../controllers/sale.controller.js";

const saleRouter = Router()

saleRouter.get("/", getSales);
saleRouter.get("/:id", getSale);
saleRouter.post("/", createSale);
saleRouter.put("/:id", updateSale);
saleRouter.delete("/:id", deleteSale);

export default saleRouter;