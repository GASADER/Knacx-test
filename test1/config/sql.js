import * as dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2";

const sql = mysql.createConnection({
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
      database: process.env.SQL_DATABASE,
    });

export default sql;
