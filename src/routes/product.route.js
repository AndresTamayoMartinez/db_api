import { Router } from "express";
import { getProducts, getProduct, getProductbyName, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const productRouter = Router()

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.get("/name/:nombre", getProductbyName);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;