<template>
  <section id="achievements" class="py-20 bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span
            class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >Achievements</span
          >
        </h2>
        <p class="text-slate-400 text-lg">Milestones and recognitions</p>
      </div>

      <div class="flex justify-center mt-4 md:mt-8">
        <iframe
          src="https://drive.google.com/file/d/1mmEAh2Dt9cCWiSDHQqfjUUsEVJXRd0MX/preview"
          class="rounded-lg w-full md:w-1/2 h-64 md:h-80 lg:h-96 mb-4"
          allow="autoplay"
        ></iframe>
      </div>
      <hr class="mx-auto w-3/4 border-t-2 border-b-2 border-cyan-500 my-4" />

      <!-- Resource Cloud Academy Featured Card -->
      <div class="mb-16">
        <div
          class="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-500/60 transition-colors"
        >
          <div class="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div class="flex items-center justify-center">
              <img
                src="https://github.com/flexGURU/Juma-Portfolio/blob/main/src/assets/rca.jpeg?raw=true"
                alt="Resource Cloud Academy"
                class="rounded-lg object-cover w-72 h-72 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h3 class="text-4xl font-bold text-white mb-4">
                Resource Cloud Academy
              </h3>
              <p class="text-slate-300 text-lg mb-8">
                Co-founded and scaled a premier cloud education platform
                dedicated to empowering professionals across Africa with
                industry-leading cloud skills and certifications.
              </p>

              <!-- Stats -->
              <div class="grid grid-cols-3 gap-6 mb-8">
                <div class="text-center">
                  <div class="text-4xl font-bold text-cyan-400 mb-2">1.2K+</div>
                  <p class="text-slate-400">Students</p>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <p class="text-slate-400">Workshops</p>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                  <p class="text-slate-400">Partners</p>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.linkedin.com/company/resource-cloud-academy/"
                  target="_blank"
                >
                  <button
                    class="cursor-pointer px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-colors"
                  >
                    Follow
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const otherAchievements = ref([
  {
    icon: "🎯",
    title: "Industry Recognition",
    description:
      "Recognized as a thought leader in cloud solutions with speaking engagements at major tech conferences",
  },
  {
    icon: "📚",
    title: "Certification Leader",
    description:
      "Maintained multiple cloud certifications including AWS Solutions Architect, Azure Administrator, and GCP Associate",
  },
  {
    icon: "🤝",
    title: "Community Builder",
    description:
      "Founded and led AWS User Groups serving 500+ cloud professionals in East Africa",
  },
  {
    icon: "🏆",
    title: "Awards & Honors",
    description:
      "Recipient of Cloud Professional of the Year award for exceptional contributions to cloud adoption",
  },
  {
    icon: "💡",
    title: "Innovation Leader",
    description:
      "Led 15+ innovation projects implementing cutting-edge cloud technologies and architectural patterns",
  },
  {
    icon: "📈",
    title: "Business Impact",
    description:
      "Delivered solutions generating $50M+ in value for clients through cost optimization and efficiency gains",
  },
]);
</script>

<style scoped></style>
