import { Router } from "express";
import { getBillDetails, getBillDetail, createBillDetail, updateBillDetail, deleteBillDetail } from "../controllers/bill_detail.controller.js";

const billDetailRouter = Router()

billDetailRouter.get("/", getBillDetails);
billDetailRouter.get("/:id", getBillDetail);
billDetailRouter.post("/", createBillDetail);
billDetailRouter.put("/:id", updateBillDetail);
billDetailRouter.delete("/:id", deleteBillDetail);

export default billDetailRouter;