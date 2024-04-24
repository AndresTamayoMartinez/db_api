import mysql from "mysql2";
import dotenv from "dotenv";
import { DATABASE_URL } from "./config.js";

dotenv.config();

const connection = mysql.createConnection(DATABASE_URL);

export default connection.promise();