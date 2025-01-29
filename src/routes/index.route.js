import { Router } from "express";
import saleRouter from "./sale.route.js";
import billRouter from "./bill.orute.js";
import loginRouter from './login.route.js'
import brandRouter from "./brand.route.js";
import clientRouter from "./client.route.js";
import productRouter from "./product.route.js";
import providerRouter from "./provider.route.js";
import categoryRouter from "./category.route.js";
import employeeRouter from "./employee.route.js";
import entranceRouter from "./entrances.route.js";
import saleDetailRouter from "./sale_detail.route.js";
import fiscalClientRouter from "./fiscal_client.route.js"
import presentationRouter from "./presentation.route.js";
import brandProviderRouter from "./brans_provider.routes.js";
import entranceDetailRouter from "./entrance_detail.routes.js";
import pucharseReceiptRouter from "./pucharse_receipt.route.js"
import { validateToken } from "./login.route.js";

const indexRouter = Router();
const prefix = "/api";

//Default Route
indexRouter.get(prefix, (req, res) => {
    res.send("Welcome to planetScale API");
});

//Login Route
indexRouter.use('/login', loginRouter);
//Provider Route
indexRouter.use(`${prefix}/provider`, validateToken, providerRouter);
//Category Route
indexRouter.use(`${prefix}/category`, validateToken, categoryRouter);
//Brand Route
indexRouter.use(`${prefix}/brand`, validateToken, brandRouter);
//Employee Route
indexRouter.use(`${prefix}/employee`, validateToken, employeeRouter);
//Client Route
indexRouter.use(`${prefix}/client`, validateToken, clientRouter);
//Presentation Route
indexRouter.use(`${prefix}/presentation`, validateToken, presentationRouter);
//Product Route
indexRouter.use(`${prefix}/product`, validateToken, productRouter);
//Product Route
indexRouter.use(`${prefix}/brand_provider`, validateToken, brandProviderRouter);
//Entrance Route
indexRouter.use(`${prefix}/entrance`, validateToken, entranceRouter);
//Sale Route
indexRouter.use(`${prefix}/sale`, validateToken, saleRouter);
//Sale_Detail Route
indexRouter.use(`${prefix}/sale_detail`, validateToken, saleDetailRouter);
//Entrance_Detail Route
indexRouter.use(`${prefix}/entrance_detail`, validateToken, entranceDetailRouter);
//Pucharse_Receipt Route
indexRouter.use(`${prefix}/pucharse_receipt`, validateToken, pucharseReceiptRouter);
//Bill Route
indexRouter.use(`${prefix}/bill`, validateToken, billRouter);
//Fiscal_Client Route
indexRouter.use(`${prefix}/fiscal_client`, validateToken, fiscalClientRouter);
export default indexRouter;