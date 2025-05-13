const hre = require("hardhat");

async function main() {
  const initialSupply = "1000000"; 

  const AVDOG = await hre.ethers.getContractFactory("AVDOG");
  const avdog = await AVDOG.deploy(initialSupply);

  console.log(`AVDOG deployed to: ${avdog.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
