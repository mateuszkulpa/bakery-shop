import MarkdownContent from "../../components/atoms/MarkdownContent.vue";
import { TemplateFn } from "../types";

export default {
  title: "Atoms/MarkdownContent",
  component: MarkdownContent,
};

const Template: TemplateFn = (args) => ({
  components: { MarkdownContent },
  setup() {
    return { args };
  },
  template: `<div class="prose">
    <markdown-content v-bind="args" />
  </div>`,
});

export const Primary = Template.bind({});
Primary.args = {
  content: `
# h1
## h2
### h3
#### h4
##### h5
###### h6
- list item 1
- list item 2
  - list nested item
`,
};
