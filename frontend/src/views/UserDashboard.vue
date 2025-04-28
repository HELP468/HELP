<template>
  <div class="bg-gradient-to-br from-orange-100 to-orange-50 p-8 min-h-screen">
    <div class="max-w-4xl mx-auto space-y-8">
      <h1 class="text-4xl font-bold text-orange-500 text-center animate-text-focus-in">
        My Questions
      </h1>
      <p class="text-gray-600 text-lg text-center animate-fade-in">
        View your questions and their answers.  Ask a new question below.
      </p>

      <div class="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-orange-100 animate-slide-in-bottom">
        <h2 class="text-2xl font-semibold text-orange-500 mb-4">Ask a New Question</h2>
        <form class="space-y-6">
          <label for="title" class="block text-sm font-medium text-gray-700">Question Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter your question title"
            class="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
          />
          <label for="question-body" class="block text-sm font-medium text-gray-700">Your Question</label>
          <textarea
            id="question-body"
            placeholder="Enter your question details..."
            rows="4"
            class="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
          ></textarea>
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Submit Question
            </button>
          </div>
        </form>
      </div>

      <div class="space-y-6">
        <div class="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-orange-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
          <h2 class="text-xl font-semibold text-orange-500 mb-2">Example Question Title</h2>
          <p class="text-gray-700 leading-relaxed">
            This is the body of the question...  It might be a longer question that needs a detailed answer.
          </p>

          <div class="mt-4 bg-green-50/50 border border-green-200 p-4 rounded-xl" v-if="true">
            <h3 class="font-semibold text-green-600">Answer:</h3>
            <p class="text-gray-700">This is the admin's answer to your question.  It can be multiple lines long.</p>
          </div>
          <div class="mt-4 bg-blue-50/50 border border-blue-200 p-4 rounded-xl" v-else>
             <h3 class="font-semibold text-blue-600">Answer:</h3>
             <p class="text-gray-700">Your question is currently awaiting an answer from our admins.</p>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDashboard",
};
</script>

<style scoped>
/* Animations */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-bottom {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-in-bottom {
  animation: slide-in-bottom 0.8s ease-out 0.3s;
}

.animate-text-focus-in {
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

/* Custom Styles */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, #fef3c7, #fde68a);
}

.text-orange-500 {
  color: #f97316;
}

.text-orange-600 {
  color: #ed8936;
}

.text-orange-700 {
  color: #c85e0e;
}

.bg-orange-500 {
  background-color: #f97316;
}

.hover\:bg-orange-600:hover {
  background-color: #ed8936;
}

.text-white {
  color: #fff;
}

.font-bold {
  font-weight: 600;
}

.font-semibold {
  font-weight: 600;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.w-full {
  width: 100%;
}

.p-8 {
  padding: 2rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.bg-white {
  background-color: #fff;
}

.p-6 {
  padding: 1.5rem;
}

.rounded-2xl {
  border-radius: 1.25rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.mt-4 {
  margin-top: 1rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.text-gray-700 {
  color: #4b5563;
}

.leading-relaxed {
    line-height: 1.625; /* Tailwind's leading-relaxed */
}

.border {
  border-width: 1px;
}

.border-orange-300 {
  border-color: #fdba74;
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\:ring-2:focus {
  --tw-ring-inset: var(--tw-empty, );
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #f97316;
  --tw-ring-offset-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:border-transparent:focus {
  border-color: transparent;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.text-center {
  text-align: center;
}

.mt-8 {
  margin-top: 2rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.max-w-4xl {
  max-width: 56rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.space-y-8 > * + * {
  margin-top: 2rem;
}

.border-orange-100 {
    border-color: #ffe5b4;
}

.hover\:shadow-xl:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
}

.hover\:scale-\[1\.01\]:hover {
    transform: scale(1.01);
}

.bg-green-50\/50{
  background-color: rgba(220, 252, 231, 0.5); /* #dcfce7 with 50% opacity */
}

.border-green-200{
    border-color: #bbf7d0;
}

.text-green-600{
    color: #16a34a;
}

.bg-blue-50\/50{
    background-color: rgba(224, 242, 254, 0.5);
}

.border-blue-200{
    border-color: #bfdbfe;
}

.text-blue-600{
    color: #0369a1;
}
</style>
