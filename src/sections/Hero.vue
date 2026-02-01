<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pt-20"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div
      class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <div class="mb-6 inline-block">
        <span
          class="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
        >
          👋 Welcome to my portfolio
        </span>
      </div>

      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span class="text-white">Hey! I'm </span>
        <span
          class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          JUMA</span
        >
      </h1>

      <h2 class="text-2xl sm:text-3xl text-slate-300 mb-6 font-semibold">
        Cloud Solutions Architect
      </h2>

      <p class="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
        Empowering businesses with seamless, scalable, and secure cloud
        solutions that drive innovation and efficiency.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#contact">
          <button
            class="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Get in Touch
          </button>
        </a>
        <a href="#skills">
          <button
            class="px-8 py-3 border border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 font-semibold rounded-lg transition-colors duration-200"
          >
            View My Work
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

section {
  animation: fadeInUp 0.8s ease-out;
}
</style>
