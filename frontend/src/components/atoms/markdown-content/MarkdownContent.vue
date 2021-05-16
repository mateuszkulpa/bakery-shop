<template>
  <div v-html="renderedContent"></div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import MarkdownIt from "markdown-it";

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const renderedContent = computed(() =>
      new MarkdownIt().render(props.content)
    );

    return {
      renderedContent,
    };
  },
});
</script>
