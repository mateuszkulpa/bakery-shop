import AppInput from "../../components/atoms/AppInput.vue";
import { TemplateFn } from "../types";

export default {
  title: "Atoms/AppInput",
  component: AppInput,
  argTypes: {
    "onUpdate:modelValue": { action: "onUpdate:modelValue" },
    type: {
      options: ["text", "number", "date", "color"],
      control: "select",
    },
  },
};

const Template: TemplateFn = (args) => ({
  components: { AppInput },
  setup() {
    return { args };
  },
  template: `<app-input v-bind="args" />`,
});

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  modelValue: "test content",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",
  modelValue: 1,
};

export const DateInput = Template.bind({});
DateInput.args = {
  type: "date",
  modelValue: "2021-01-01",
};

export const ColorInput = Template.bind({});
ColorInput.args = {
  type: "color",
  modelValue: "#FF00FF",
};
