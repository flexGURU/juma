<template>
  <section id="media" class="py-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span
            class="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >Media</span
          >
          <span class="text-white"> & Highlights</span>
        </h2>
        <p class="text-slate-400 text-lg">Featured events and press coverage</p>
      </div>

      <!-- Featured Event -->
      <div class="mb-16">
        <div
          class="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors"
        >
          <div class="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div
              class="flex items-center justify-center overflow-hidden rounded-lg"
            >
              <img
                src="https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/huawei%20juma.png?raw=true"
                alt="Huawei UNESCO Forum"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="flex flex-col justify-center">
              <div class="inline-block mb-4">
                <span
                  class="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold"
                >
                  Featured
                </span>
              </div>
              <h3 class="text-3xl font-bold text-white mb-3">
                Huawei Showcases AI Innovations at UNESCO East Africa Forum
              </h3>
              <p class="text-slate-400 mb-4">
                Keynote speaker at the UNESCO East Africa Technology Forum
                discussing AI integration in cloud solutions and digital
                transformation strategies for educational institutions across
                the region.
              </p>
              <div class="flex items-center gap-2 text-slate-400 mb-6">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>Nairobi, Kenya | November 2023</span>
              </div>

              <a
                href="https://www.theeastafrican.co.ke/tea/business-tech/phone-firms-turn-to-software-vending-4824524"
                target="_blank"
              >
                <button
                  class="cursor-pointer px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-colors w-fit"
                >
                  Read More
                </button></a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Event Gallery -->
      <div class="mt-24">
        <h3 class="text-3xl font-bold text-white mb-12 text-center">
          Event Gallery
        </h3>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Video Card -->
          <div
            class="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition group"
          >
            <div class="aspect-video overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/FyYHRPCrpMo"
                class="w-full h-full group-hover:scale-105 transition-transform duration-300"
                frameborder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                "
                allowfullscreen
              ></iframe>
            </div>

            <div class="p-6">
              <span
                class="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-400"
              >
                Bootcamp
              </span>
              <h4 class="text-lg font-semibold text-white mb-2">
                CloudForceSky Bootcamp
              </h4>
              <p class="text-slate-400 text-sm">
                Guiding aspiring engineers on the pathway to becoming AWS
                Solution Architects.
              </p>
            </div>
          </div>

          <!-- Video Card -->
          <div
            class="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition group"
          >
            <div class="aspect-video overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/9st7RVY7kdA"
                class="w-full h-full group-hover:scale-105 transition-transform duration-300"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div class="p-6">
              <span
                class="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400"
              >
                Meetup
              </span>
              <h4 class="text-lg font-semibold text-white mb-2">
                AWS User Group – Part One
              </h4>
              <p class="text-slate-400 text-sm">
                Community-driven discussion on AWS architecture and best
                practices.
              </p>
            </div>
          </div>

          <!-- Video Card -->
          <div
            class="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition group"
          >
            <div class="aspect-video overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/btA7H5m6sIQ"
                class="w-full h-full group-hover:scale-105 transition-transform duration-300"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div class="p-6">
              <span
                class="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-400"
              >
                Meetup
              </span>
              <h4 class="text-lg font-semibold text-white mb-2">
                AWS User Group – Part Two
              </h4>
              <p class="text-slate-400 text-sm">
                Deeper dive into real-world AWS use cases and cloud careers.
              </p>
            </div>
          </div>

          <!-- Video Card -->
          <div
            class="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition group"
          >
            <div class="aspect-video overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/tyFfmFSAQwQ"
                class="w-full h-full group-hover:scale-105 transition-transform duration-300"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div class="p-6">
              <span
                class="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400"
              >
                Career Talk
              </span>
              <h4 class="text-lg font-semibold text-white mb-2">
                IT Career Session with Kevin
              </h4>
              <p class="text-slate-400 text-sm">
                Practical career advice and industry insights for tech
                professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
  {
    title: "Cloud Force Sky Bootcamp",
    date: "September 2023",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    title: "AWS User Group - Part 1",
    date: "August 2023",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    title: "AWS User Group - Part 2",
    date: "October 2023",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    title: "IT Career Sessions",
    date: "July 2023",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    title: "Cloud Architecture Workshop",
    date: "June 2023",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    title: "Tech Community Meetup",
    date: "May 2023",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
]);
</script>

<style scoped></style>
