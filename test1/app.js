import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


import routers from "./router/router.js";

const ipAddress = process.env.API_IPADDRESS;
const port = process.env.API_PORT;
const app = express();


const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };

async function run() {

  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true }));


  routers(app)

  await app.listen(port, ipAddress, () => {
    console.log(
      `Web Application Server is running on ${ipAddress} port ${port}`
    );
    console.log(`Address: http://${ipAddress}:${port}`);
  });
}
run()
