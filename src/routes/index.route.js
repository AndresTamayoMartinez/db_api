import { Router } from "express";
import providerRouter from "./provider.route.js";
import categoryRouter from "./category.route.js";
import brandRouter from "./brand.route.js";
import employeeRouter from "./employee.route.js";
import clientRouter from "./client.route.js";
import presentationRouter from "./presentation.route.js";
import productRouter from "./product.route.js";
import brandProviderRouter from "./brans_provider.routes.js";
import entranceRouter from "./entrances.route.js";
import saleRouter from "./sale.route.js";

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
//Presentation Route
indexRouter.use(`${prefix}/presentation`, presentationRouter);
//Product Route
indexRouter.use(`${prefix}/product`, productRouter);
//Product Route
indexRouter.use(`${prefix}/brand_provider`, brandProviderRouter);
//Entrance Route
indexRouter.use(`${prefix}/entrance`, entranceRouter);
//Sale Route
indexRouter.use(`${prefix}/sale`, saleRouter);

export default indexRouter;