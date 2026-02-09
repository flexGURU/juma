<template>
  <section id="skills" class="py-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-2 sm:px-2 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span class="text-white">My </span>
          <span
            class="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >Skills</span
          >
        </h2>
        <p class="text-slate-400 text-lg">
          Technical expertise and competencies
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div
          v-for="(category, index) in skillCategories"
          :key="index"
          class="p-8 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-colors"
        >
          <h3
            class="text-2xl font-bold text-white mb-4 flex items-center gap-3"
          >
            <span class="text-cyan-400 text-3xl">{{ category.icon }}</span>
            {{ category.name }}
          </h3>
          <p class="text-slate-400 mb-6">{{ category.description }}</p>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="(skill, idx) in category.skills"
              :key="idx"
              class="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <div
        class="bg-slate-800/50 border border-slate-700 rounded-lg p-4 lg:p-12"
      >
        <h3 class="text-3xl font-bold text-white mb-8 text-center">
          Cloud Platforms Expertise
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(platform, index) in cloudPlatforms"
            :key="index"
            class="flex flex-col items-center justify-center p-6 rounded-lg bg-slate-900 hover:bg-slate-900 hover:border border-cyan-500/50 transition-all"
          >
            <div class="text-6xl mb-4">{{ platform.icon }}</div>
            <h4 class="text-xl font-semibold text-white text-center">
              {{ platform.name }}
            </h4>
            <p class="text-slate-400 text-sm mt-2 text-center">
              {{ platform.level }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const skillCategories = ref([
  {
    name: "Enterprise Architecture",
    icon: "🏢",
    description:
      "Aligning business strategy with IT systems and enterprise-wide architecture",
    skills: [
      "Enterprise Architecture Frameworks (TOGAF)",
      "Business Capability Modeling",
      "Application Architecture",
      "Data Architecture",
      "Integration Architecture",
      "Technology Roadmapping",
      "Legacy System Modernization",
      "Solution Governance",
    ],
  },

  {
    name: "Cloud Architecture & Design",
    icon: "🏗️",
    description: "Designing scalable, secure, and resilient cloud solutions",
    skills: [
      "AWS Architecture",
      "Azure Solutions",
      "GCP Design",
      "Multi-cloud Strategy",
      "Infrastructure as Code",
      "Terraform",
      "CloudFormation",
    ],
  },
  {
    name: "Cloud-Native Applications",
    icon: "⚙️",
    description:
      "Building modern, containerized applications on cloud platforms",
    skills: [
      "Kubernetes",
      "Docker",
      "Microservices",
      "Serverless",
      "API Gateway",
      "Lambda Functions",
      "Container Registry",
    ],
  },
  {
    name: "Cloud Cost Optimization",
    icon: "💰",
    description: "Optimizing cloud spending and improving cost efficiency",
    skills: [
      "Cost Analysis",
      "Reserved Instances",
      "Spot Instances",
      "Right-sizing",
      "Budget Monitoring",
      "Tagging Strategy",
    ],
  },
  {
    name: "Cloud Security & Compliance",
    icon: "🔒",
    description: "Implementing security frameworks and compliance requirements",
    skills: [
      "IAM Management",
      "Encryption",
      "HIPAA",
      "ISO 27001",
      "GDPR",
      "Security Audit",
      "Threat Modeling",
    ],
  },
]);

const cloudPlatforms = ref([
  {
    name: "Amazon AWS",
    icon: "☁️",
    level: "Expert",
  },
  {
    name: "Microsoft Azure",
    icon: "🔵",
    level: "Advanced",
  },
  {
    name: "Google Cloud",
    icon: "🌐",
    level: "Advanced",
  },
  {
    name: "Huawei Cloud",
    icon: "⛅",
    level: "Expert",
  },
]);
</script>

<style scoped></style>
