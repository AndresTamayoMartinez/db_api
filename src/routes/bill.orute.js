import { Router } from "express";
import { getBills, getBill, createBill } from "../controllers/bill.controller.js";

const billRouter = Router()

billRouter.get("/", getBills);
billRouter.get("/:id", getBill);
billRouter.post("/", createBill);

export default billRouter;