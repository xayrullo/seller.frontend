import tools from "../../src/utils/tools"

describe('isValidDate', () => {
  it('should display FALSE in incorrect date', () => {
    expect(tools.isValidDate(32, 12, 1999)).toEqual(false)
  })
  it('Should display TRUE in correct date', () => {
    expect(tools.isValidDate(23, 11, 1999)).toEqual(true)
  })
})