# NFT_MetaDataService-Avalanche_Blockchain
This repository contains a project created to retrieve metadata of NFTs on the Avalanche blockchain. Similar to established providers like Moralis, this project offers a streamlined solution for obtaining NFT metadata, all built on the Avalanche blockchain.


1. `ethers` library is used to interact with Ethereum smart contracts.
2.  create an Ethereum provider using `ethers.providers.JsonRpcProvider` with the Avalanche JSON-RPC URL.
3.  ABI defines how different parts of a smart contract can interact with each other, as well as how external entities can communicate with the contract.
4.  Smart contracts consist of functions that can be called from outside. The ABI defines the function signatures, which include the function's name, input parameters (if any), and the return values. This allows applications to know how to structure the data when sending requests to the contract.
5.  Many NFT contracts follow the ERC721 standard.
6.  The `tokenURI` function is a part of the ERC721 standard, and it's used to retrieve the URI associated with a specific token. Since this function is common across many ERC721 contracts, we can use it with confidence to retrieve metadata for most NFTs.
7.  By using a common ABI, interacted with various NFT contracts without needing to know their specific ABIs.

 API endpoint => https://nft-metadataservice-avalanche.uc.r.appspot.com/meta-data?contractAddress={CONTRACT_ADDRESS_OF_AVALANCHE_NFT}&tokenID={TOKEN_ID}

 example => https://nft-metadataservice-avalanche.uc.r.appspot.com/meta-data?contractAddress=0xA0219742881Ca333657fD1873e25F5CC15EdBEab&tokenID=1
   
