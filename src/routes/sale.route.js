import { Router } from "express";
import { getSales, getSale, createSale, updateSale, updateSaleSubtotal, deleteSale, deleteSalesDetails } from "../controllers/sale.controller.js";

const saleRouter = Router()

saleRouter.get("/", getSales);
saleRouter.get("/:id", getSale);
saleRouter.post("/", createSale);
saleRouter.put("/:id", updateSale);
saleRouter.put("/:id/:subtotal", updateSaleSubtotal);
saleRouter.delete("/:id", deleteSale);
saleRouter.delete("/details/:id", deleteSalesDetails);

export default saleRouter;