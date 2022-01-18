const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('FunGame');
    const gameContract = await gameContractFactory.deploy(
        [
            "Subzero", "Scorpion", "Noob Saibot"
        ],
        [
            "QmR6LZmUNuq7jEviT6CL19TviDS4WhKwZir6hcWqs2fPSF",
            "Qmc5MPBW7U7sAuwJWm5R4okeeVbf9L9d645SHCiFgPPaHm",
            "QmaRi8HijCCWUU3CPGkK3TPaMBtyGY1XY6BJEwt3F9Sy46" 
        ],
        [100, 200, 300],
        [100, 50, 25],
        "Kotal kahn",
        "QmcDPYzWVqUfFtu2FFKdVXNjyMmRfuKdu3SQNEgsnZuwPT",
        10000,
        50
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
};
  
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
// 0xbBb02C036ab12445c03B5ec965915bD03e62E3E8