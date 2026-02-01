<template>
  <footer class="bg-slate-950 border-t border-slate-800 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div>
          <h3
            class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
          >
            J<small>uma</small> S<small>indani</small>
          </h3>
          <p class="text-slate-400">
            Cloud Solutions Architect dedicated to transforming businesses
            through innovative cloud technologies.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-white mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#home"
                class="text-slate-400 hover:text-cyan-400 transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="text-slate-400 hover:text-cyan-400 transition-colors"
                >About</a
              >
            </li>
            <li>
              <a
                href="#work"
                class="text-slate-400 hover:text-cyan-400 transition-colors"
                >Work</a
              >
            </li>
            <li>
              <a
                href="#skills"
                class="text-slate-400 hover:text-cyan-400 transition-colors"
                >Skills</a
              >
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="font-semibold text-white mb-4">Connect</h4>
          <div class="flex gap-4">
            <a
              href="https://www.linkedin.com/in/james-juma-sindani/"
              class="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 hover:border-cyan-500 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-800 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-slate-400 text-sm">
            © {{ date.getFullYear() }} James Juma. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const date = new Date();
</script>

<style scoped></style>
