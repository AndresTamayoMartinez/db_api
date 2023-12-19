import { Router } from "express";
import { getProviders, getProvider, createProvider, updateProvider, deleteProvider } from "../controllers/provider.controller.js";

const providerRouter = Router()

providerRouter.get("/", getProviders);
providerRouter.get("/:id", getProvider);
providerRouter.get("/", createProvider);
providerRouter.get("/:id", updateProvider);
providerRouter.get("/:id", deleteProvider);

export default providerRouter;