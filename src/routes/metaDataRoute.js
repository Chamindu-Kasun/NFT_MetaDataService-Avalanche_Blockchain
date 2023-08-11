import express from "express";
const router = express.Router();
import { GetMetaData } from "../controllers/metaData.js";

router.get("/", async (req, res) => {
  const contractAddress = req.query.contractAddress;
  const tokenID = req.query.tokenID;

  if (!contractAddress || !tokenID) {
    return res
      .status(400)
      .json({ error: "contractAddress and tokenID are required" });
  }

  try {
    const metaData = await GetMetaData(contractAddress, tokenID);
    res.status(200).json(metaData);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
