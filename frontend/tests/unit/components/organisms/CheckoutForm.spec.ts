import { mount } from "@vue/test-utils";
import CheckoutForm from "@/components/organisms/CheckoutForm.vue";
import DeliveryType from "@/types/deliveryType";

describe("CheckoutForm.vue", () => {
  it("displays required fields on form", async () => {
    const wrapper = mount(CheckoutForm, {
      props: { cartItems: [] },
    });

    expect(wrapper.find("#client-name").exists()).toBe(true);
    expect(wrapper.find("#client-phone-number").exists()).toBe(true);
    expect(wrapper.find("#client-address").exists()).toBe(true);
    expect(wrapper.find("#delivery-type").exists()).toBe(true);
  });

  it("shows pickup location when delivery type is pickup", async () => {
    const wrapper = mount(CheckoutForm, {
      props: { cartItems: [] },
    });

    expect(wrapper.find("#pickup-location").exists()).toBe(false);

    await wrapper.find("#delivery-type").setValue(DeliveryType.Pickup);

    expect(wrapper.find("#pickup-location").exists()).toBe(true);
  });

  it("shows validation errors when fields are not filled", async () => {
    const wrapper = mount(CheckoutForm, {
      props: { cartItems: [] },
    });

    await wrapper.find("form").trigger("submit");

    expect(wrapper.findAll("[data-test-id='validation-error']").length).toBe(3);
  });

  it("emits a sent event after form submitted", async () => {
    const wrapper = mount(CheckoutForm, {
      props: { cartItems: [] },
    });

    wrapper.find("#client-name").setValue("Jan Kowalski");
    wrapper.find("#client-phone-number").setValue("12345");
    wrapper.find("#client-address").setValue("address..");
    wrapper.find("#delivery-type").setValue(DeliveryType.Delivery);
    await wrapper.find("form").trigger("submit");

    expect(wrapper.emitted("sent")).toBeTruthy();
  });
});
