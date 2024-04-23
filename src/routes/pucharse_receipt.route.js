import { Router } from "express";
import { getSale, getSaleDetails } from "../controllers/pucharse_receipt.contoller.js"

const pucharseReceiptRouter = Router()

pucharseReceiptRouter.get("/sale/:id", getSale);
pucharseReceiptRouter.get("/sale_details/:id", getSaleDetails);

export default pucharseReceiptRouter;