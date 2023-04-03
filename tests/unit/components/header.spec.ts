import { mount } from "@vue/test-utils"
import Header from "../../../src/components/header.vue"

describe('Header.vue', () => {
  it('Renders text: Hello World', ()=> {
    const wrapper = mount(Header)
    console.log(wrapper)
    expect(wrapper.text()).toBe('Hello World')
  })
})