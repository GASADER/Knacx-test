import * as dotenv from 'dotenv'
dotenv.config()
import mysql from "mysql2"


const connectionDB = async () => {
    
    console.log("connecting to database");
    try {
       await mysql.createConnection({
            host: process.env.SQL_HOST,
            user: process.env.SQL_USER,
            database: process.env.SQL_DATABASE,
          });
      console.log("Database connected.");
    } catch (err) {
      console.error("connect db failed", err.message);
      process.exit(1);
    }
  };

export default connectionDB