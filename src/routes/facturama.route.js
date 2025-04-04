import { Router } from "express";
import { getPaymentsForms } from "../controllers/facturama.controller.js";

const facturamaRouter = Router()

facturamaRouter.get('/payments/', getPaymentsForms);

export default facturamaRouter;