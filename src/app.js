import express from "express";
import db from "./config/db.js";
import indexRouter from "./routes/index.route.js";
import cors from "cors";
import { PORT } from "./config/config.js";

const app = express();

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Routes
app.use("/", indexRouter);

//Start server
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

//Connect to database
db.connect().then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Error ", err);
});