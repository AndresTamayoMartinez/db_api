import { Router } from "express";
import { getSaleDetails, getSaleDetail, createSaleDetail, updateSaleDetail, deleteSaleDetail } from "../controllers/sale_detail.controller.js";

const saleDetailRouter = Router()

saleDetailRouter.get("/:id_sale", getSaleDetails);
saleDetailRouter.get("/:id_sales/:id_products", getSaleDetail);
saleDetailRouter.post("/", createSaleDetail);
saleDetailRouter.put("/:id_sales/:id_products", updateSaleDetail);
saleDetailRouter.delete("/:id_sales/:id_products", deleteSaleDetail);

export default saleDetailRouter;