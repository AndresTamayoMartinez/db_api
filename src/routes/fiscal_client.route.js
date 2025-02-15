import { Router } from "express";
import { getFiscalClients, getFiscalClient, createFiscalClient, updateFiscalClient, deleteFiscalClient } from "../controllers/fiscal_client.controller.js";

const fiscalClientRouter = Router()

fiscalClientRouter.get("/", getFiscalClients);
fiscalClientRouter.get("/:id", getFiscalClient);
fiscalClientRouter.post("/",createFiscalClient);
fiscalClientRouter.put("/:id", updateFiscalClient);
fiscalClientRouter.delete("/:id", deleteFiscalClient);

export default fiscalClientRouter;