<template>
  <div class="text-center">
    <section-title>Cukiernia</section-title>
    <app-button tag="router-link" :to="{ name: 'Products' }">
      Zobacz nasze torty
    </app-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/atoms/app-button/AppButton.vue";
import SectionTitle from "@/components/atoms/section-title/SectionTitle.vue";

export default defineComponent({
  components: { AppButton, SectionTitle },
});
</script>
