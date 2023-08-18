import { ethers } from "hardhat";
import dotenv from "dotenv";

async function main() {
    dotenv.config();
    const INFURA_KEY = process.env.INFURA_KEY;
    const OWNER_PK: string = String(process.env.OWNER_PK);

    const provider = new ethers.InfuraProvider(
        "sepolia",
        INFURA_KEY
    );
    const wallet = new ethers.Wallet(
        OWNER_PK,
        provider
    );
    const balance = await provider.getBalance(wallet.getAddress());
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });