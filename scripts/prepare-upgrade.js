const main = async () => {
  const proxyAddress = 'PROXY_ADDRESS_HERE'
  const TeslaV2 = await ethers.getContractFactory('TeslaPowerV2')
  const teslaV2Address = await upgrades.prepareUpgrade(proxyAddress, TeslaV2)
  console.log('TeslaV2 at: ', teslaV2Address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
