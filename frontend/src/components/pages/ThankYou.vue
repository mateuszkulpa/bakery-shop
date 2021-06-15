<template>
  <section-title>Dziękujemy</section-title>
  <div class="mt-4 text-center text-lg">
    Twoje zamówienie zostało poprawnie złożone! <br />
    Wkrótce otrzymasz e-maila z potwierdzeniem.
  </div>

  <div class="text-center mt-12">
    <app-button tag="router-link" :to="{ name: 'Home' }">
      Wróć na stronę główną
    </app-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "@/components/atoms/SectionTitle.vue";
import AppButton from "@/components/atoms/AppButton.vue";

export default defineComponent({
  components: { SectionTitle, AppButton },
});
</script>
