import { Router } from "express";
import { getBrandProviders, getBrandProvider, createBrandProvider, updateBrandProvider, deleteBrandProvider } from "../controllers/brand_provider.controller.js";

const brandProviderRouter = Router()

brandProviderRouter.get("/", getBrandProviders);
brandProviderRouter.get("/:id", getBrandProvider);
brandProviderRouter.post("/", createBrandProvider);
brandProviderRouter.put("/:id", updateBrandProvider);
brandProviderRouter.delete("/:id", deleteBrandProvider);

export default brandProviderRouter;