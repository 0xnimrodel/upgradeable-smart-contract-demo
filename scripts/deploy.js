const main = async () => {
  const Tesla = await ethers.getContractFactory('TeslaPower')
  const proxy = await upgrades.deployProxy(Tesla, [600], {
    initializer: 'setHorsePower',
  })
  console.log('Proxy of TeslaPower deployed to: ', proxy.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
