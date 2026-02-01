<template>
  <nav
    class="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="shrink-0">
          <a
            href="#"
            class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            J<small>uma</small> S<small>indani</small>
          </a>
        </div>

        <div class="hidden md:flex items-center space-x-6">
          <a href="#home" @click.prevent="scrollTo('home')" class="nav-link"
            >Home</a
          >
          <a href="#about" @click.prevent="scrollTo('about')" class="nav-link"
            >About</a
          >
          <a href="#work" @click.prevent="scrollTo('work')" class="nav-link"
            >Work</a
          >
          <a href="#skills" @click.prevent="scrollTo('skills')" class="nav-link"
            >Skills</a
          >
          <a
            href="#achievements"
            @click.prevent="scrollTo('achievements')"
            class="nav-link"
            >Awards</a
          >
          <a href="#blogs" @click.prevent="scrollTo('blogs')" class="nav-link"
            >Blogs</a
          >

          <button
            @click="scrollTo('contact')"
            class="ml-4 px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all active:scale-95"
          >
            Let's Connect
          </button>
        </div>

        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-slate-300 hover:text-white p-2"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <transition name="slide">
        <div
          v-if="isOpen"
          class="md:hidden bg-slate-900 border-t border-slate-800 absolute left-0 w-full px-4 py-6 space-y-4 shadow-xl"
        >
          <a
            v-for="item in items"
            :key="item"
            :href="'#' + item"
            @click.prevent="handleMobileClick(item)"
            class="block text-slate-300 hover:text-cyan-400 capitalize text-lg font-medium"
          >
            {{ item }}
          </a>
          <a href="#contact">
            <button
              @click="handleMobileClick('contact')"
              class="w-full text-center px-4 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg"
            >
              Let's Connect
            </button></a
          >
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const items = ["home", "about", "work", "skills", "achievements", "blogs"];

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleMobileClick = (id) => {
  scrollTo(id);
  isOpen.value = false;
};
</script>

<style scoped>
/* THIS IS THE MISSING PIECE */
.nav-link {
  color: rgb(203 213 225);
  font-weight: 500;
  transition-property: color;
  transition-duration: 200ms;
}

.nav-link:hover {
  color: rgb(34 211 238);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
