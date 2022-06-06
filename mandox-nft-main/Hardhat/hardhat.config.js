require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "9e33e7fc1edaad3099f6788013921c5a01f418be85eff34f94a6a8923b6fc671",
        "fd9567d7e270a6f01ffcff3ec5dce5eae6d0cb4d22d356758e3e876aff846198",
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", 
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d", 
        "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a", 
        "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",
        "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a",
        "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba",
        "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e",
        "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",
        "0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97",
        "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6",
        "0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897"
      ]
    },
    hardhat: {
      // forking: {
      //   url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      //   chainId: 97,
      //   gasPrice: 20000000000,
      //   accounts: ["9e33e7fc1edaad3099f6788013921c5a01f418be85eff34f94a6a8923b6fc671"]
      // }
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 4,
      gasPrice: 20000000000,
      accounts: ["fd9567d7e270a6f01ffcff3ec5dce5eae6d0cb4d22d356758e3e876aff846198"]
    },
    kovan: {
      url: "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 42,
      gasPrice: 20000000000,
      accounts: ["fd9567d7e270a6f01ffcff3ec5dce5eae6d0cb4d22d356758e3e876aff846198"]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 4,
      gasPrice: 20000000000,
      accounts: ["9e33e7fc1edaad3099f6788013921c5a01f418be85eff34f94a6a8923b6fc671"]
    }
  },
  etherscan: {
    apiKey: 
    {
      mainnet: "B77M9DYRXMQC74ZI9N8TH5EETPMSX66MAE",
      ropsten: "B77M9DYRXMQC74ZI9N8TH5EETPMSX66MAE",
      rinkeby: "B77M9DYRXMQC74ZI9N8TH5EETPMSX66MAE",
      goerli: "B77M9DYRXMQC74ZI9N8TH5EETPMSX66MAE",
      kovan: "B77M9DYRXMQC74ZI9N8TH5EETPMSX66MAE",
      // binance smart chain
      bsc: "P5W8JCU8Q3F8CNVX69DXU8PCFVE6VGG8QT",
      bscTestnet: "P5W8JCU8Q3F8CNVX69DXU8PCFVE6VGG8QT"
    }
  },
  solidity: {
  version: "0.8.0",
  settings: {
    optimizer: {
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 200000
  }
};
