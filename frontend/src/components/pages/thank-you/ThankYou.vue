<template>
  <section-title>Dziękujemy</section-title>
  <div class="mt-4 text-center text-lg">
    Twoje zamówienie zostało poprawnie złożone! <br />
    Wkrótce otrzymasz e-maila z potwierdzeniem.
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "@/components/atoms/section-title/SectionTitle.vue";

export default defineComponent({
  components: { SectionTitle },
});
</script>
