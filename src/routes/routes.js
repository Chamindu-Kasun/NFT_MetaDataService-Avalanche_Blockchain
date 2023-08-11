import express from "express";
const router = express.Router();
import homeRoute from "./homeRoute.js";
import metaDataRoute from "./metaDataRoute.js";

router.use("/", homeRoute);
router.use("/meta-data", metaDataRoute);
router.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

export default router;
