import { shallowMount } from "@vue/test-utils";
import AppButton from "@/components/atoms/AppButton.vue";

describe("AppButton.vue", () => {
  it("renders button with correct content", () => {
    const msg = "button content";
    const wrapper = shallowMount(AppButton, {
      slots: { default: msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });

  it("shows loader when loading is enabled", async () => {
    const wrapper = shallowMount(AppButton, { props: { loading: true } });

    expect(wrapper.find("[data-test='loader']").exists()).toBe(true);

    await wrapper.setProps({ loading: false });
    expect(wrapper.find("[data-test='loader']").exists()).toBe(false);
  });
});
