import { Router } from "express";
import providerRouter from "./provider.route.js";
import categoryRouter from "./category.route.js";
import brandRouter from "./brand.route.js";
import employeeRouter from "./employee.route.js";
import clientRouter from "./client.route.js";

const indexRouter = Router();
const prefix = "/api";

//Default Route
indexRouter.get(prefix, (req, res) => {
    res.send("Welcome to planetScale API");
});

//Provider Route
indexRouter.use(`${prefix}/provider`, providerRouter);
//Category Route
indexRouter.use(`${prefix}/category`, categoryRouter);
//Brand Route
indexRouter.use(`${prefix}/brand`, brandRouter);
//Employee Route
indexRouter.use(`${prefix}/employee`, employeeRouter);
//Client Route
indexRouter.use(`${prefix}/client`, clientRouter);

export default indexRouter;