<template>
  <section id="blogs" class="py-20 bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span class="text-white"> Latest </span>
          <span
            class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >Blogs</span
          >
        </h2>
        <p class="text-slate-400 text-lg">
          Insights and thoughts on cloud architecture and technology
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col"
        >
          <!-- Blog Image -->
          <div
            class="h-48 overflow-hidden bg-gradient-to-br from-cyan-900/20 to-blue-900/20 flex items-center justify-center"
          >
            <img
              :src="blog.imgPath"
              alt="Blog Image"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Blog Content -->
          <div class="p-8 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-4">
              <span
                class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium"
              >
                {{ blog.title }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-white mb-3 leading-tight flex-1">
              {{ blog.title }}
            </h3>

            <p class="text-slate-400 mb-4 flex-1">
              {{ blog.content }}
            </p>

            <div
              class="flex items-center justify-between pt-6 border-t border-slate-700"
            >
              <span class="text-slate-400 text-sm"
                >{{ blog.time }} min read</span
              >

              <a :href="blog.route" target="_blank" rel="noopener noreferrer">
                <button
                  class="cursor-pointer text-cyan-400 hover:text-cyan-300 font-semibold transition-colors flex items-center gap-2"
                >
                  Read More
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg></button
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const blogs = ref([
  {
    title: "The Azubi Africa Cloud Wave",
    time: "4 min",
    imgPath:
      "https://media.licdn.com/dms/image/v2/C4E12AQGPrMAZhHa8HQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1649314276366?e=1771459200&v=beta&t=IsuNZZf3pX_As2QWB-VUgVfvQXyGLG-nbknAfVjGzGM",
    route:
      "https://www.linkedin.com/pulse/azubi-africa-cloud-wave-james-juma-sindani/",
    content: `The cloud is a powerful tool that can help you accomplish your goals and missions. 
      But it's not just about the technology—you need to understand how the cloud can fit into your 
      business and what types of benefits are available. The cloud has different roles. 
      These roles include Cloud Architect, AWS Solutions Architect, Cloud Engineer, and AWS Developer.`,
  },
  {
    title: "Aws Cloud Roles",
    time: "3 min",
    imgPath:
      "https://media.licdn.com/dms/image/v2/D4D12AQHkfz2IoF0HMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1664130099434?e=1771459200&v=beta&t=gLQzgFMX04_NGFl4bEFJFFQQwfu3rzWnbBTeF5ZrjTg",
    route: "https://www.linkedin.com/pulse/aws-cloud-roles-james-juma-sindani/",
    content: `The cloud has changed how we work. It's no longer just a place where you can store your files. 
      It's a tool that allows you to create and grow your business, from anywhere in the world. 
      There are many different roles in AWS, and each of them plays a vital role in making sure that your organization is successful. 
      But what does it mean to be a cloud architect?`,
  },
  {
    title: "Traditional Monolithic vs 3-Tier Architectures",
    time: "5 min",
    imgPath:
      "https://media.licdn.com/dms/image/v2/D5612AQHJFBFQltqsVA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1674487408223?e=1771459200&v=beta&t=RQytrC8AwkCPx6j0XgqAT6SrPMMNxdljIaXDsMCfHnw",
    route:
      "https://www.linkedin.com/pulse/traditional-monolithic-vs-3-tier-architectures-james-juma-sindani/",
    content: `When it comes to building and deploying software, there are a variety of architectural patterns to choose from. 
      One popular option is the 3-tier architecture, which is a variation of the traditional monolithic architecture. In this post, we'll discuss the two architectures, highlighting their pros and cons.`,
  },
]);
</script>

<style scoped></style>
