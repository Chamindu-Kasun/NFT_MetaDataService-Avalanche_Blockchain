import { MetaData } from "../services/metaData.js";

const GetMetaData = async (contractAddress, tokenId) => {
  try {
    const metaData = await MetaData(contractAddress, tokenId);
    return metaData;
  } catch (error) {
    log.errorLog("Meta Data Fetching Error", error);
    return "Meta Data Fetching Error";
  }
};

export { GetMetaData };
