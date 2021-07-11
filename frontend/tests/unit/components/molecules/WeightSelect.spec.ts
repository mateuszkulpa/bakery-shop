import { mount } from "@vue/test-utils";
import WeightSelect from "@/components/molecules/WeightSelect.vue";
import { getSingleProductMock } from "../../../mocks/products";

describe("WeightSelect.vue", () => {
  it("renders correct allowed weights based on product", () => {
    const productMock = { ...getSingleProductMock(), minKg: 1, maxKg: 3 };

    const wrapper = mount(WeightSelect, {
      props: {
        id: "weight-select",
        product: productMock,
      },
    });

    const options = wrapper.findAll("option");

    expect(options.length).toBe(5);
    expect(options[0].text()).toMatch("1 KG");
    expect(options[4].text()).toMatch("3 KG");
  });

  it("shows a correct value based on v-model", () => {
    const productMock = { ...getSingleProductMock(), minKg: 1, maxKg: 3 };
    const selectedValue = 2;

    const wrapper = mount(WeightSelect, {
      props: {
        id: "weight-select",
        product: productMock,
        modelValue: selectedValue,
      },
    });

    expect(wrapper.find("select").element.value).toBe(selectedValue.toString());
  });
});
