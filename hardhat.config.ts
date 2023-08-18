import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const lazyImport = async(module: any) => {
  return await import(module);
}

task("deploy", "Deploys contract").setAction(async() => {
  const { main } = await lazyImport("./scripts/deploy");
  await main();
})

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/'
    }
  }
};

export default config;
