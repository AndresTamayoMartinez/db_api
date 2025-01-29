import { Router } from "express";
import { getFiscalClients, getFiscalClient, createFiscalClient, updateFiscalClient, deleteFiscalClient } from "../controllers/fiscal_client.controller.js";

const fiscalClientRouter = Router()

fiscalClientRouter.get("/", getFiscalClients);
fiscalClientRouter.get("/:id", getFiscalClient);
fiscalClientRouter.get("/",createFiscalClient);
fiscalClientRouter.get("/:id", updateFiscalClient);
fiscalClientRouter.get("/:id", deleteFiscalClient);

export default fiscalClientRouter;