const { ethers } = require("hardhat")

async function main() {
    const coinFlip = await ethers.getContract("CoinFlip")
    const flipGuesser = await ethers.getContract("FlipGuesser")

    const consecutiveWins = await coinFlip.consecutiveWins()
    console.log(`Consecutive Wins: ${consecutiveWins.toString()}`)

    const attackTx = await flipGuesser.guess()
    await attackTx.wait(1)

    const consecutiveWins2 = await coinFlip.consecutiveWins()
    console.log(`Consecutive Wins: ${consecutiveWins2.toString()}`)
}

main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
