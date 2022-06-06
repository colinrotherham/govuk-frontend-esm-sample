import { expect } from 'chai'
import { initAll, Accordion } from '../src/index.mjs'

describe('GOV.UK Frontend', function () {
  it('Package import', function () {
    expect(initAll).to.be.ok
    expect(Accordion).to.be.ok
  })

  it('Package import (dynamic)', async function () {
    const { initAll, Accordion } = await import('../src/index.mjs')

    expect(initAll).to.be.ok
    expect(Accordion).to.be.ok
  })
})
