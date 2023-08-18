import { ethers } from "hardhat";

export async function main() {
  const limeToken = await ethers.deployContract("LimeToken");

  await limeToken.waitForDeployment();

  console.log(
    `LimeToken contract deployed to ${limeToken.target}`
  );
}
