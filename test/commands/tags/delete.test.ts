import { expect } from 'chai'
import { runCommand } from '@oclif/test'


describe('tags:delete', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['tags:noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(15000)
})
