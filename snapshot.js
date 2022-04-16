const Moralis = require("moralis/node");
const fs = require("fs");
const util = require("util");
const { serverUrl, appId } = require("./secrets.json");

const snapshot = async () => {
  await Moralis.start({ serverUrl, appId });
  var nftOwners = null;

  const options = {
    address: "0xc99c679c50033bbc5321eb88752e89a93e9e83c5",
    chain: "0x1",
    offset: 0,
  };

  const fetchNFTOwners = async () => {
    const singleOwners = new Map();

    nftOwners = await Moralis.Web3API.token.getNFTOwners(options);

    while (options.offset < nftOwners.total) {
      for (let i = 0; i < 500; i++) {
        if (nftOwners.result[i] != undefined) {
          if (!singleOwners.has(nftOwners.result[i].owner_of)) {
            singleOwners.set(nftOwners.result[i].owner_of, 1);
          } else {
            let newCount = singleOwners.get(nftOwners.result[i].owner_of) + 1;
            singleOwners.set(nftOwners.result[i].owner_of, newCount);
          }
        }
      }
      if (options.offset + 500 > nftOwners.total) {
        options.offset = nftOwners.total - options.offset;
      } else {
        options.offset = options.offset + 500;
      }

      nftOwners = await Moralis.Web3API.token.getNFTOwners(options);
    }

    const data = Object.fromEntries(singleOwners);
    fs.writeFileSync("./data.txt", util.inspect(data), "utf-8");
  };

  fetchNFTOwners();
};

snapshot();
