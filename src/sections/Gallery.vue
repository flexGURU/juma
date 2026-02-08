<template>
  <section id="gallery" class="py-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span
            class="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >Gallery</span
          >
        </h2>
        <p class="text-slate-400 text-lg">
          Portfolio of projects and initiatives
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer h-64"
        >
          <img
            :src="image.src"
            :alt="image.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
          >
            <h3 class="text-lg font-bold text-white mb-2">{{ image.title }}</h3>
            <p class="text-slate-300 text-sm">{{ image.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const galleryImages = ref([
  {
    src: "https://github.com/flexGURU/juma/blob/main/src/assets/WhatsApp%20Image%202026-02-07%20at%2010.50.13.jpeg?raw=true",
  },
  {
    src: "https://github.com/flexGURU/juma/blob/main/src/assets/WhatsApp%20Image%202026-02-07%20at%2010.50.14.jpeg?raw=true",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/2.jpg?raw=true",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/3.jpg?raw=true",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/4.jpg?raw=true",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/5.jpg?raw=true",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/6.jpg?raw=true",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/7.jpg?raw=true",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/8.jpg?raw=true",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/about%202.jpg?raw=true",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/main/src/assets/1.jpg?raw=true",
  },
]);
</script>

<style scoped></style>
