import AppButton from "../../components/atoms/AppButton.vue";


type Args = Record<string, unknown>;
type TemplateFn = ((args: Args) => {
  components: Args;
  setup: () => { args: Args };
  template: string;
}) & { args?: Args };


export default {
  title: "Atoms/AppButton",
  component: AppButton,
  args: { type: "primary" },
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: "select",
    },
  },
};

const Template: TemplateFn = (args) => ({
  components: { AppButton },
  setup() {
    return { args };
  },
  template: `<app-button v-bind="args">
    {{ args.default }}
  </app-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  default: "Button content 123",
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  default: "Button content",
  type: "secondary",
};
