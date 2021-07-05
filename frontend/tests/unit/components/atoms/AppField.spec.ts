import { mount, shallowMount } from "@vue/test-utils";
import AppField from "@/components/atoms/AppField.vue";

describe("AppField.vue", () => {
  it("renders label based on label prop", () => {
    const label = "label content";
    const wrapper = shallowMount(AppField, {
      props: { label },
    });

    expect(wrapper.find("label").text()).toMatch(label);
  });

  it("renders a slot label correctly based on label prop", () => {
    const label = "label content";
    const wrapper = mount(AppField, {
      props: { label },
      slots: {
        label: `<template #label="{label}">
          <label class="custom-label">{{ label }}</label>  
        </template>`,
      },
    });

    expect(wrapper.find("label").classes()).toContain("custom-label");
  });
});
