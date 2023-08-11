import express from "express";
import dotenv from "dotenv";
dotenv.config();
import routes from "./src/routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
