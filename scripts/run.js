const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('FunGame');
    const gameContract = await gameContractFactory.deploy(
        [
            "Subzero", "Scorpion", "Noob Saibot"
        ],
        [
            "https://www.pngall.com/wp-content/uploads/9/Mortal-Kombat-Game-Transparent.png",
            "https://www.pngall.com/wp-content/uploads/9/Mortal-Kombat-Characters-PNG-Free-Download.png",
            "https://pngimage.net/wp-content/uploads/2018/06/noob-saibot-png-7.png" 
        ],
        [100, 200, 300],
        [100, 50, 25],
        "Kotal kahn",
        "https://i.pinimg.com/originals/e4/16/ee/e416ee066fcd01f5927ea408b8f58759.png",
        10000,
        50
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
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