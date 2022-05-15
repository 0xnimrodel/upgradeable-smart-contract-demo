require('@nomiclabs/hardhat-waffle')
require('@openzeppelin/hardhat-upgrades')
require('dotenv').config()
require('@nomiclabs/hardhat-ethers')

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 4,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.7',
      },
    ],
  },
}
