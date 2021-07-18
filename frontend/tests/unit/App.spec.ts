import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders navigation, router view and footer", () => {
    const wrapper = shallowMount(App, {
      global: {
        stubs: {
          "router-view": true,
        },
      },
    });

    expect(wrapper.find("app-navigation-stub").exists()).toBeTruthy();
    expect(wrapper.find("router-view-stub").exists()).toBeTruthy();
    expect(wrapper.find("app-footer-stub").exists()).toBeTruthy();
  });
});
