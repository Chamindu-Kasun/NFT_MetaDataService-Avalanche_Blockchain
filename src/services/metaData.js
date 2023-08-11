import { ethers } from "ethers";
import MetaDataFinder from "../artifact/MetaDataFinder.json" assert { type: "json" };
import dotenv from "dotenv";
dotenv.config();
const provider = new ethers.providers.JsonRpcProvider(
  "https://api.avax.network/ext/bc/C/rpc"
);
import fetch from "node-fetch";

const getContract = async (contractAddress) => {
  const contractInstance = new ethers.Contract(
    contractAddress,
    MetaDataFinder.abi,
    provider
  );

  return contractInstance;
};

const FetchMetaData = async (uri) => {
  try {
    const response = await fetch(uri, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching metadata:", error.message);
  }
};

const MetaData = async (contractAddress, tokenId) => {
  try {
    const contract = await getContract(contractAddress);
    const tokenURI = await contract.tokenURI(tokenId);
    const ipfsGatewayUrl = `https://ipfs.io/ipfs/${
      tokenURI.split("ipfs://")[1]
    }`;
    const metaData = await FetchMetaData(ipfsGatewayUrl);

    return {
      tokenId,
      contractAddress,
      metaData,
    };
  } catch (error) {
    log.errorLog("Meta Data Fetching Error", error);
    return "Meta Data Fetching Error";
  }
};

export { MetaData };
