<template>
  <footer class="py-4 px-4 bg-gray-100 font-bold">
    <div class="max-w-screen-xl mx-auto">
      Torty na zamówienie &copy; {{ currentYear }}
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const currentYear = new Date().getFullYear();
    return { currentYear };
  },
});
</script>
