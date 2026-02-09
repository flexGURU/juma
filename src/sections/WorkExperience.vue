<template>
  <section id="work" class="py-20 bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span class="text-white">Work </span>
          <span
            class="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >Experience</span
          >
        </h2>
        <p class="text-slate-400 text-lg">
          Journey through my professional career
        </p>
      </div>

      <div class="space-y-6">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="p-8 bg-slate-900 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
        >
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4"
          >
            <div>
              <h3 class="text-2xl font-bold text-white">{{ job.title }}</h3>
              <p class="text-cyan-400 font-semibold">{{ job.company }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <span
                class="px-4 py-1 bg-slate-800 text-slate-300 rounded-full text-sm inline-block w-fit"
              >
                {{ job.type }}
              </span>
              <span class="text-slate-400 text-sm">{{ job.duration }}</span>
            </div>
          </div>

          <ul class="space-y-2">
            <li
              v-for="(achievement, idx) in job.achievements"
              :key="idx"
              class="flex items-start gap-3 text-slate-300"
            >
              <span class="text-cyan-400 mt-1">✓</span>
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const jobs = ref([
  {
    title: "Solution Architect",
    company: "Rainforest Alliance",
    type: "Full-time",
    duration: "2025 - Present",
    achievements: [
      "Supported the development and maintenance of Enterprise Solution Architecture aligned with business strategy and value objectives.",
      "Applied structured architecture methodologies to design and deliver scalable digital solutions across the organization.",
      "Collaborated with cross-functional teams (Product, Business, DevOps, and Engineering) to drive effective solution adoption.",
      "Defined and governed solution domains and inter-domain integrations (APIs, microservices) to ensure modularity and reuse.",
      "Contributed to information and data architecture, including logical data models and enterprise information flows.",
      "Ensured functional and non-functional requirements were met, with solutions fully tested and quality-reviewed before handover.",
    ],
  },
  {
    title: "Cloud Solutions Architect",
    company: "Huawei",
    type: "Full-time",
    duration: "2024 - 2025",
    achievements: [
      "Architected enterprise-grade cloud solutions for Fortune 500 clients",
      "Designed hybrid cloud strategies integrating Huawei Cloud with on-premises infrastructure",
      "Led successful cloud migration projects with 99.9% uptime SLA",
      "Established center of excellence for cloud architecture practices",
    ],
  },
  {
    title: "Cloud Solutions Architect",
    company: "Silicon Overdrive",
    type: "Full-time",
    duration: "2022 - 2024",
    achievements: [
      "Developed comprehensive cloud adoption roadmaps for enterprise clients",
      "Designed serverless architectures reducing operational overhead by 40%",
      "Implemented cloud security frameworks compliant with HIPAA and ISO 27001",
      "Built internal training program for 50+ engineers on cloud technologies",
    ],
  },
  {
    title: "Co-Founder & Partnership Manager",
    company: "Resource Cloud Academy",
    type: "Self-employed",
    duration: "2022 - Present",
    achievements: [
      "Founded cloud education initiative serving 1,200+ students",
      "Developed and delivered 50+ technical workshops and bootcamps",
      "Established partnerships with AWS, Azure, and Google Cloud",
      "Built thriving community of cloud professionals in East Africa",
    ],
  },
  {
    title: "Cloud Engineer",
    company: "Spartec Consortium-Africa",
    type: "Full-time",
    duration: "2021 - 2022",
    achievements: [
      "Deployed and managed AWS infrastructure for 20+ enterprise clients",
      "Implemented automated CI/CD pipelines reducing deployment time by 50%",
      "Designed disaster recovery and backup strategies",
      "Provided 24/7 cloud operations support and incident management",
    ],
  },
  {
    title: "AWS Architect (Apprenticeship)",
    company: "Azubi Africa",
    type: "Apprenticeship",
    duration: "2020 - 2021",
    achievements: [
      "Completed intensive AWS certification program",
      "Assisted in architecting solutions for African tech startups",
      "Gained hands-on experience with AWS services and best practices",
      "Built foundation for cloud architecture expertise",
    ],
  },
]);
</script>

<style scoped></style>
