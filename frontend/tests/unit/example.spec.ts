import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("renders home page", () => {
    const msg = "homepage";
    const wrapper = shallowMount(Home);
    expect(wrapper.text()).toMatch(msg);
  });
});
