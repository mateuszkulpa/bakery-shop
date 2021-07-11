import { defineComponent, h } from "vue";

export default defineComponent({
  setup(_, { slots }) {
    return () => h("a", {}, slots.default ? slots.default() : undefined);
  },
});
