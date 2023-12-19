import { Router } from "express";
import providerRouter from "./provider.route.js";
import categoryRouter from "./category.route.js";

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

export default indexRouter;