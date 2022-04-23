# 🔎 `Moralis NFT Snapshot` 

Moralis NFT API will only return 500 itens at a time when its is called. For that reason, a simple logic is needed to fetch all data from a given NFT collection. This script uses a simple logic to loop through all itens in an NFT collection and write out the balances of each unique holder from that collection.

# 🚀 `Quick Start`

1. Sign up at [Moralis](https://moralis.io?utm_source=GitHub&utm_medium=NFT+API&utm_campaign=Moralis+Web3+Docs)
2. Read full docs: https://docs.moralis.io/moralis-server/web3-sdk for more about Moralis' NFT API;

Once you are registered on Moralis.io, you will need two parameters to get the script up and running, `Server URL` and `Application ID`, both can be found when a new server is created in the `View Details` option: 

<p align="center">
  <img src="https://github.com/menezesphill/moralis-snapshot/blob/master/img/moralis-serv.png" alt="Moralis Server Info"/>
</p>

### ✅ Install dependencies using Yarn

```sh
yarn install
```

### ✅ Create Secrets.json file

Using Moralis' server info, create a secrets.json file:

```sh
touch secrets.json
```

With the following contents:

```jsx
{
    "serverUrl": "YOUR_SERVER_URL",
    "appId" : "YOUR_APPLICATION_ID"
}
```

Make sure to hide your `secrets.json` file in case you plan to publish or share your working directory:

```sh
echo secrets.json >> .gitignore
```

### ✅ Configure NFT address and chain ID

Inside `snapshot.js`, configure the section `options`:

```jsx
const options = {
  address: "0xc99c679c50033bbc5321eb88752e89a93e9e83c5",  // Paste the NFT address you want to fetch
  chain: "0x1", // Paste the NFT chain ID (Hexadecimal)
};
```

A list of all supported chains can be found [Here!](https://docs.moralis.io/moralis-dapp/web3-sdk/supported-chains)

### ✅ Run the script

You can run the script by writing:

```sh
node snapshot.js
```

the expected output is a `data.txt` file in the following format:

```jsx
{
  '0x0ac174b33b70b2deedd944e73798b5aaeaed0d09': 3,
  '0x6c736b2b6b33ad5fd162e85b5ee59ff281d4a66a': 1,
  '0xc8ded7b172c72a6800b01dae272f74c796107366': 1,
  '0x67d67c342bb6cca9844024658931d0bf1c8757f4': 1,
  '0x0a91d55399e0eda82b4d80fbfe57f25ad7a3d25c': 5,
  '0xa0fe85972c662e9ff2773942fa35302327ae0859': 1,
  '0x6c7b6cb24a885fe6a480b1b8edcecb8a7e824876': 1,
  '0x9658a54d4b96a27af82c3960242fc52bf0988f93': 3,
  '0x6899c9154bdbaa0880147ca5e50a32a2cbb2e2ec': 1,
  '0x4708cdc826ca799bb9654df336d32c7df2f5df57': 3,
  '0xad0391bfb7d81a585cea54c6f0c4f782a7d6a441': 5,
  '0x59b5a5c7409f744ad7558b4a1da07b4808150098': 6,
  '0xd15f4230ec4dfc9580a01bf3e5e3b062f6fbc762': 1,
  '0x787695d59e0323498ae500fb1b75e005fc9f9aae': 15,
  '0xa7757c0e82ab1c7d3350b611a7be0921ffb5aaac': 1,
  '0x12527beb47c257a3c3ca4cec83f312ef79119108': 13,
  ...
  '0x8c33502c08fc7ca57ee0d4f416b2da3b703f7d32': 8,
  '0xfc85c6ac6df5f8a3fbe27cb4c575cef5f8f24bbd': 4,
  '0x07b5c013febefa0d810474612a826411eca18931': 4
}
```


