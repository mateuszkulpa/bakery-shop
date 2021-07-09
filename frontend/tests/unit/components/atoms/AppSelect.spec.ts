import { shallowMount } from "@vue/test-utils";
import AppSelect from "@/components/atoms/AppSelect.vue";
import { h } from "vue";

describe("AppSelect.vue", () => {
  it("renders select with id attribute", async () => {
    const selectId = "gender";
    const wrapper = shallowMount(AppSelect, {
      attrs: { id: selectId },
    });

    expect(wrapper.attributes("id")).toMatch(selectId);
  });

  it("updates model value on value changes", () => {
    const options = ["first", "second"];
    const wrapper = shallowMount(AppSelect, {
      props: { modelValue: options[0] },
      slots: {
        default: () =>
          options.map((option) => h("option", { value: option }, option)),
      },
    });

    const selectElement = wrapper.element as HTMLSelectElement;
    const optionsElements = wrapper.findAll<HTMLOptionElement>("option");

    expect(selectElement.value).toBe(options[0]);

    optionsElements[1].element.selected = true;
    wrapper.trigger("change");

    expect(selectElement.value).toBe(options[1]);
  });
});
