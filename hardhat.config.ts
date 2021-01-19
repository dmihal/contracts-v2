import { HardhatUserConfig } from 'hardhat/types/config'

// Plugins
import '@nomiclabs/hardhat-etherscan'

const config: HardhatUserConfig = {
  networks: {
    mainnet: {
      url: '______',
    },
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  etherscan: {
    apiKey: '______'
  }
}

export default config