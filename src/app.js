import express from "express";
import db from "./config/db.js";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use("/", (req, res) => {
    res.send("Welcome to API");
});

app.listen(app.get("port"), () => {
    console.log("server is running on port ", app.get("port"));
});