import { Router } from "express";
import providerRouter from "./provider.route.js";

const indexRouter = Router();
const prefix = "/api";

//Default Route
indexRouter.get(prefix, (req, res) => {
    res.send("Welcome to planetScale API");
});

//Provider Route
indexRouter.use(`${prefix}/provider`, providerRouter);

export default indexRouter;