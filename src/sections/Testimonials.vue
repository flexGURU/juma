<template>
  <section id="testimonials" class="py-20 bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span
            class="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >Testimonials</span
          >
        </h2>
        <p class="text-slate-400 text-lg">
          What clients and colleagues say about working with me
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="p-8 bg-slate-900 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <span v-for="i in 5" :key="i" class="text-yellow-400">★</span>
          </div>

          <!-- Quote -->
          <p class="text-slate-300 text-lg mb-6 leading-relaxed italic">
            "{{ testimonial.content }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <div
              class="w-14 h-14 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg"
            >
              <img
                :src="testimonial.imgPath"
                alt=""
                class="w-14 h-14 rounded-full"
              />
            </div>
            <div>
              <p class="text-slate-200 font-bold text-sm">
                {{ testimonial.title }}
              </p>

              <p class="text-slate-400 text-sm">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const testimonials = ref([
  {
    title: "Samson Wanjala",
    position: "Technical Consultant @ BUI",
    imgPath:
      "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/samson.jpeg?raw=true",
    content: `James Juma Sindani is a true cloud transformation expert. 
      His ability to design complex multi-cloud architectures while maintaining robust security 
      is exceptional. He doesn't just implement solutions; he architects entire digital ecosystems.`,
  },
  {
    title: "Albert Sitati",
    position: "Cloud Engineer @ BUI",
    imgPath:
      "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/albert.jpeg?raw=true",
    content: `Working with James was a transformative experience. 
      He seamlessly integrated our legacy systems with cutting-edge cloud infrastructure, 
      reducing our operational costs by 35% and dramatically improving our overall 
      system performance.`,
  },
  {
    title: "Awadh Said",
    position: "Software Developer @ Kindred",
    imgPath:
      "https://github.com/flexGURU/Juma-Portfolio/blob/71e760be4ef74964c9edb6fd5622db1b18a46eff/src/assets/Awadh.jpeg?raw=true",
    content: `James's expertise in AWS, Azure, and Google Cloud is remarkable. 
      He brought a level of strategic thinking to our cloud migration that went far beyond 
      technical implementation. His hybrid cloud solutions have been game-changing for our 
      organization.`,
  },
  {
    title: "Nganga John Mukuna",
    position: "Software Developer",
    imgPath:
      "https://navari.co.ke/wp-content/uploads/2025/07/Nganga-Mukuna-200x267-jpg.webp",
    content: `What sets James apart is his holistic approach to cloud architecture. 
      He doesn't just focus on technical details, but understands how cloud strategy impacts 
      business outcomes. His solutions are both technically brilliant and strategically aligned.`,
  },
]);
</script>

<style scoped></style>
