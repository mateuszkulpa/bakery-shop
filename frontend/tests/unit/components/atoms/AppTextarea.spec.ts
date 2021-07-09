import { shallowMount } from "@vue/test-utils";
import AppTextarea from "@/components/atoms/AppTextarea.vue";

describe("AppTextarea.vue", () => {
  it("renders a textarea with rows attribute", async () => {
    const rows = 4;
    const wrapper = shallowMount(AppTextarea, {
      props: {
        modelValue: 'test'
      },
      attrs: {
        rows
      }
    });

    expect(wrapper.attributes("rows")).toMatch(rows.toString());
  });
});
