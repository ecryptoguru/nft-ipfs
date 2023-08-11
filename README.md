# AnkitPunks NFT collection

10 Exclusive AnkitPunks NFT collection has been created using Solidity, JS using Openzeppelin libraries in a hardhat dev env and deployed on Polygon Mumbai Testnet.
All 10 NFTs have custom metadata, which is uploaded to IPFS using Pinata.
A Frontend has also been created for the NFT minting page using Next.js@12 React Framework with the help of Web3Modal and ethers.js

Anyone can use this opensource code to create their custom NFT Collection.

Try running some of the following tasks:

```shell
mkdir nft-ipfs
cd nft-ipfs
mkdir hardhat
cd hardhat
npm init --yes
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts
npm install dotenv
npx hardhat compile
npx hardhat run scripts/deploy.js --network mumbai
npx create-next-app@12
cd my-app
npm run dev
npm install web3modal
npm i ethers@5
npm run dev
```
