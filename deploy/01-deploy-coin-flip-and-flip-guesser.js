const { network } = require("hardhat")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log("-----------------------------")

    const coinFlip = await deploy("CoinFlip", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    log("-----------------------------")

    const flipGuesser = await deploy("FlipGuesser", {
        from: deployer,
        args: [coinFlip.address],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
}

module.exports.tags = ["all"]
