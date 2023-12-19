import { Router } from "express";
import { getProviders, getProvider, createProvider, updateProvider, deleteProvider } from "../controllers/provider.controller.js";

const providerRouter = Router()

providerRouter.get("/", getProviders);
providerRouter.get("/:id", getProvider);
providerRouter.post("/", createProvider);
providerRouter.put("/:id", updateProvider);
providerRouter.delete("/:id", deleteProvider);

export default providerRouter;