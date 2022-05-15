const main = async () => {
  const proxyAddress = 'PROXY_ADDRESS_HERE'
  const TeslaV2 = await ethers.getContractFactory('TeslaPowerV2')
  const teslaV2 = await upgrades.upgradeProxy(proxyAddress, TeslaV2)
  console.log('Upgraded proxy is done: ', teslaV2.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
