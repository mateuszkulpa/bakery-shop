<template>
  <div>homepage</div>
  <dropdown />
</template>

<script lang="ts">
import Dropdown from "@/components/base/Dropdown.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Dropdown },
});
</script>
