import { shallowMount } from "@vue/test-utils";
import MarkdownContent from "@/components/atoms/MarkdownContent.vue";

describe("AppInput.vue", () => {
  it("renders rendered markdown correctly", async () => {
    const wrapper = shallowMount(MarkdownContent, {
      props: {
        content: "## a second level heading",
      },
    });

    expect(wrapper.find("h2").text()).toMatch("a second level heading");
  });
});
