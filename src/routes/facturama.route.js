import { Router } from "express";
import { getPaymentsForms, getFiscalRegimens, getCfdiUses, getCfdiContent, createCfdi } from "../controllers/facturama.controller.js";

const facturamaRouter = Router()

facturamaRouter.get('/payments/', getPaymentsForms);
facturamaRouter.get('/regimens/', getFiscalRegimens);
facturamaRouter.get('/cfdi/', getCfdiUses);
facturamaRouter.get('/cfdi/:cfdiId', getCfdiContent);
facturamaRouter.post('/cfdi/', createCfdi);

export default facturamaRouter;