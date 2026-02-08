<template>
  <section id="gallery" class="py-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span
            class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Gallery
          </span>
        </h2>
        <p class="text-slate-400 text-lg">
          Portfolio of projects and initiatives
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          @click="openLightbox(image)"
          class="group relative overflow-hidden rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer h-64"
        >
          <img
            :src="image.src"
            :alt="image.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
          >
            <h3 class="text-lg font-bold text-white mb-1">
              {{ image.title || "View Project" }}
            </h3>
            <p class="text-slate-300 text-sm">
              {{ image.description || "Click to enlarge" }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
        @click="selectedImage = null"
      >
        <button
          class="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors z-[60]"
          @click="selectedImage = null"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          class="relative max-w-5xl w-full flex flex-col items-center"
          @click.stop
        >
          <img
            :src="selectedImage.src"
            :alt="selectedImage.title"
            class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-slate-800"
          />
          <div class="mt-4 text-center">
            <h3 class="text-xl font-bold text-white">
              {{ selectedImage.title }}
            </h3>
            <p class="text-slate-400">{{ selectedImage.description }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from "vue";

// State to track which image is clicked
const selectedImage = ref(null);

const openLightbox = (image) => {
  selectedImage.value = image;
};

const galleryImages = ref([
  {
    src: "https://github.com/flexGURU/juma/blob/main/src/assets/WhatsApp%20Image%202026-02-07%20at%2010.50.13.jpeg?raw=true",
    title: "Project Milestone",
    description: "Detailed view of the initial phase.",
  },
  {
    src: "https://github.com/flexGURU/juma/blob/main/src/assets/WhatsApp%20Image%202026-02-07%20at%2010.50.14.jpeg?raw=true",
    title: "Community Outreach",
    description: "Engaging with local stakeholders.",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/2.jpg?raw=true",
    title: "Workshop Session",
    description: "Hands-on technical training.",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/3.jpg?raw=true",
    title: "Strategy Planning",
    description: "Quarterly review and goal setting.",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/4.jpg?raw=true",
    title: "Field Research",
    description: "Data collection and analysis.",
  },

  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/6.jpg?raw=true",
    title: "Technical Setup",
    description: "Infrastructure development.",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/7.jpg?raw=true",
    title: "Presentation",
    description: "Showcasing project results.",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/8.jpg?raw=true",
    title: "Collaboration",
    description: "Team brainstorming session.",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/about%202.jpg?raw=true",
    title: "About The Work",
    description: "A look behind the scenes.",
  },
  {
    src: "https://github.com/flexGURU/Juma-Portfolio/blob/main/src/assets/1.jpg?raw=true",
    title: "Final Launch",
    description: "Project completion and handover.",
  },
]);
</script>

<style scoped>
/* Smooth fade transition for the lightbox */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Prevent scrolling when modal is open (optional) */
body.modal-open {
  overflow: hidden;
}
</style>
