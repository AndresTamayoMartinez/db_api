import { Router } from "express";
import { getBrands, getBrand, createBrand, updateBrand, deleteBrand } from "../controllers/brand.controller.js";

const brandRouter = Router()

brandRouter.get("/", getBrands);
brandRouter.get("/:id", getBrand);
brandRouter.post("/", createBrand);
brandRouter.put("/:id", updateBrand);
brandRouter.delete("/:id", deleteBrand);

export default brandRouter;