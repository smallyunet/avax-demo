require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { LOCAL_RPC_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    local: {
      url: LOCAL_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
