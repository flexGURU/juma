<template>
  <section id="contact" class="py-20 bg-slate-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          Get In
          <span
            class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >Touch</span
          >
        </h2>
        <p class="text-slate-400 text-lg">
          Have a project in mind? Let's talk!
        </p>
      </div>

      <!-- Contact Info -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="p-8 bg-slate-800/50 border border-slate-700 rounded-lg">
          <div class="flex items-center gap-4 mb-4">
            <div
              class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-white mb-1">Email</h3>
              <a
                href="mailto:james.sindani1@gmail.com"
                class="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                james.sindani1@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div class="p-8 bg-slate-800/50 border border-slate-700 rounded-lg">
          <div class="flex items-center gap-4 mb-4">
            <div
              class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-white mb-1">Phone</h3>
              <a
                href="tel:+254748031882"
                class="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                +254 748 031882
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div
        class="bg-slate-800/50 border border-slate-700 rounded-lg p-8 md:p-12"
      >
        <h3 class="text-2xl font-bold text-white mb-8">Send Me a Message</h3>

        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-white font-semibold mb-2"
              >Name</label
            >
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Your name"
              class="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-white font-semibold mb-2"
              >Email</label
            >
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="your.email@example.com"
              class="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>

          <!-- Subject -->
          <div>
            <label for="subject" class="block text-white font-semibold mb-2"
              >Subject</label
            >
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              placeholder="What is this about?"
              class="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              required
            />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-white font-semibold mb-2"
              >Message</label
            >
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Your message here..."
              rows="6"
              class="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full px-8 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-600 text-slate-950 font-semibold rounded-lg transition-colors duration-200"
          >
            {{ isSubmitting ? "Sending..." : "Send Message" }}
          </button>

          <!-- Success Message -->
          <div
            v-if="submitMessage"
            :class="[
              'text-center py-3 rounded-lg',
              submitMessage.type === 'success'
                ? 'bg-green-500/20 text-green-400'
                : 'bg-red-500/20 text-red-400',
            ]"
          >
            {{ submitMessage.text }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

onMounted(() => {
  console.log("dddd", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
});

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref(null);

const submitForm = async () => {
  console.log("Form Data:", form.value);
  return
  isSubmitting.value = true;
  submitMessage.value = null;

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    submitMessage.value = {
      type: "success",
      text: "Message sent successfully! I'll get back to you soon.",
    };

    // Reset form
    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = null;
    }, 5000);
  } catch (error) {
    submitMessage.value = {
      type: "error",
      text: "Failed to send message. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped></style>
