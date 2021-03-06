import * as Nightmare from 'nightmare'
import { Context } from '../test'

describe('nightmare-jasmine', () => {

  it('should have access to params', function(this: Context) {
    expect(this.params.credentials.username).toBe('foo')
    expect(this.params.credentials.password).toBe('bar')
  })

  it('should have access to the Nightmare instance', function(this: Context) {
    expect(this.nightmare instanceof Nightmare).toBe(true)
  })

  it('should support async tests', async function(this: Context) {
    const bodies = await this.nightmare.evaluate(() => document.querySelectorAll('body').length) as any
    expect(bodies).toBe(1)
  })

})
