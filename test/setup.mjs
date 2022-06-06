import { JSDOM } from 'jsdom'

export function mochaGlobalSetup() {
  const { window } = new JSDOM(
    '<html><body></body></html>',
    {
      runScripts: 'dangerously',
      url: 'http://localhost'
    },
  )

  // Pretend Node.js is a browser (not recommended)
  // https://github.com/jsdom/jsdom#executing-scripts
  global.window = window
  global.document = window.document

  // Missing globals
  global.Element = window.Element
}

export const mochaHooks = {
  beforeEach: mochaGlobalSetup
}

// Run before first import
mochaGlobalSetup()
