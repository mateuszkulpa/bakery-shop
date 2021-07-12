import { shallowMount } from "@vue/test-utils";
import AppFooter from "@/components/organisms/AppFooter.vue";

describe("AppFooter.vue", () => {
  it("displays current year on footer", async () => {
    const wrapper = shallowMount(AppFooter);
    expect(wrapper.text()).toMatch(new Date().getFullYear().toString());
  });
});
