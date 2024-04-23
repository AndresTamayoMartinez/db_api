import express from "express";
import db from "./config/db.js";
import indexRouter from "./routes/index.route.js";
import cors from "cors";

const app = express();

app.set("port", process.env.PORT || 3000);

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Routes
app.use("/", indexRouter);

//Start server
app.listen(app.get("port"), () => {
    console.log("Server is running on port", app.get("port"));
});

//Connect to database
db.connect().then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Error ", err);
});