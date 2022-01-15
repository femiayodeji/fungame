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
        [100, 50, 25]
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    
    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");
  
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");
  
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");
  
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");
  
    console.log("Done deploying and minting!");
  
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