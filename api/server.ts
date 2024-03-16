import express, { Application } from "express";
import dotenv from "dotenv";
import apartments from "./routes/apartment";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();
const apps: Application = express();
const port: any = 9000 || process.env.PORT;
apps.use(bodyParser.json());
apps.use(cors());
require("./database/db");
require("./database/migaration");
apps.use("/api/apartment", apartments);
apps.listen("9000", () => {
  console.log(`the server is working on port ${port}`);
});
