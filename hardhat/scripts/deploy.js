const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a AnkitPunks
  const metadataURL = "https://ipfs.io/ipfs/QmQuZ1nv66Lyi77fTaaeVt9ZXwNBaGAYz3EKzVLG1vaU58/";
  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so AnkitPunksContract here is a factory for instances of our AnkitPunks contract.
  */
  // here we deploy the contract
 const AnkitPunksContract = await hre.ethers.deployContract("AnkitPunks", [
   metadataURL
 ]);

  await AnkitPunksContract.waitForDeployment();

 // print the address of the deployed contract
  console.log("AnkitPunks Contract Address:", AnkitPunksContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });