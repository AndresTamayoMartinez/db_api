import { Router } from "express";
import { getPaymentsForms, getFiscalRegimens, getCfdiUses } from "../controllers/facturama.controller.js";

const facturamaRouter = Router()

facturamaRouter.get('/payments/', getPaymentsForms);
facturamaRouter.get('/regimens/', getFiscalRegimens);
facturamaRouter.get('/cfdi/', getCfdiUses);

export default facturamaRouter;