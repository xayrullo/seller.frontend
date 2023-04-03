import tools from "../../src/utils/tools"

describe('isValidDate', () => {
  it('should display FALSE in incorrect date', () => {
    expect(tools.isValidDate(32, 12, 1999)).toEqual(false)
  })
})