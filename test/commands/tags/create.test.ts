import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('tags:create', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['tags:noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(15000)
})
