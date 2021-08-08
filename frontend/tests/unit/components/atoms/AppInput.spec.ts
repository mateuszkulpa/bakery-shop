import { shallowMount } from "@vue/test-utils";
import AppInput from "@/components/atoms/AppInput.vue";
import { ref } from "vue";

describe("AppInput.vue", () => {
  it("renders input with proper type", async () => {
    const wrapper = shallowMount(AppInput, {
      props: { type: "text", modelValue: "test" },
    });

    expect(wrapper.attributes("type")).toMatch("text");

    await wrapper.setProps({ type: "number" });
    expect(wrapper.attributes("type")).toMatch("number");
  });

  it("shows correct value passed by modelValue prop", async () => {
    const wrapper = shallowMount(AppInput, {
      props: { type: "text", modelValue: "test" },
    });

    expect(wrapper.find("input").element.value).toMatch("test");
  });
});
