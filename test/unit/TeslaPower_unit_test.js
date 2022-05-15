const { assert, expect } = require('chai')

let Tesla, tesla

describe('Tesla (proxy)', () => {
  beforeEach(async () => {
    Tesla = await ethers.getContractFactory('TeslaPower')
    tesla = await upgrades.deployProxy(Tesla, [600], {
      initializer: 'setHorsePower',
    })
  })
  it('retrieve a value previously initialized', async () => {
    expect((await tesla.retrieveHorsePower()).toString()).to.equal('600')
  })
})
