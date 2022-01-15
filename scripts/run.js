const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('FunGame');
    const gameContract = await gameContractFactory.deploy(
        [
            "Skully", "Subzero", "Scorpion"
        ],
        [
            "https://dlpng.com/png/1670173", 
            "https://dlpng.com/png/6893905",
            "https://www.pngall.com/?p=77369"
        ],
        [100, 200, 300],
        [100, 50, 25]
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