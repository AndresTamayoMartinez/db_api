import express from "express";
import db from "./config/db.js";
import indexRouter from "./routes/index.route.js";

const app = express();

app.set("port", process.env.PORT || 3000);

//middleware
app.use(express.json());

//Routes
app.use("/", indexRouter);
app.use("*", (req, res) => {
    res.send("404 - not found")
});

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