<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-50 p-8">
    <div class="text-center space-y-8">
      <h1 class="text-6xl font-extrabold text-orange-500 mb-4 drop-shadow-lg animate-text-focus-in">
        Welcome to HELP
      </h1>
      <p class="text-2xl text-orange-700 max-w-2xl mx-auto animate-fade-in">
        Connect with experts, find answers to your burning questions, and contribute your knowledge to our community.
      </p>
      <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center animate-slide-in-bottom">
        <router-link
          to="/questions"
          class="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Ask a Question
        </router-link>
        <router-link
          to="/signup"
          class="bg-white/90 backdrop-blur-md hover:bg-white/80 text-orange-500 font-semibold border-2 border-orange-500 py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Join Our Community
        </router-link>
      </div>
      <div class="mt-12 pt-8 border-t border-orange-200 w-full max-w-md mx-auto text-orange-600 animate-fade-in">
        <p class="text-sm">
          Already a member?
          <router-link to="/login" class="text-orange-500 font-semibold hover:underline ml-1">
            Log in
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  animation: slide-in-bottom 0.8s ease-out 0.3s; /* Delay the animation */
}

.animate-text-focus-in {
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

/* Custom Styles (Optional - for demonstration) */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, #fef3c7, #fde68a); /* Tailwind's from-orange-100, to-orange-50 */
}

.text-orange-500 {
  color: #f97316; /* Tailwind's orange-500 */
}

.text-orange-600 {
  color: #ed8936; /* Tailwind's orange-600 */
}

.text-orange-700 {
  color: #dd6b20;
}

.bg-orange-500 {
  background-color: #f97316;
}

.hover\:bg-orange-600:hover {
  background-color: #ed8936;
}

.active\:scale-95:active {
  transform: scale(0.95);
}

.transition {
  transition-property: all;
}

.transform {
  /* For scale, translate, etc. */
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.text-white {
  color: #fff;
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

.rounded-xl {
  border-radius: 0.75rem;
}

.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05);
}

.space-x-6 {
  margin-left: 1.5rem;
  display: flex;
  gap: 1.5rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.min-h-screen {
  min-height: 100vh;
}

.p-8 {
  padding: 2rem;
}

.text-center {
  text-align: center;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.font-extrabold {
  font-weight: 800;
}

.drop-shadow-lg {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

.max-w-2xl {
  max-width: 42rem;
}

.bg-white\/90 {
  background-color: rgba(255, 255, 255, 0.9);
}

.backdrop-blur-md {
  backdrop-filter: blur(10px);
}

.border-2 {
  border-width: 2px;
}

.border-orange-500 {
  border-color: #f97316;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.rounded-full {
  border-radius: 9999px;
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, #f97316, #ed8936);
}

.hover\:from-orange-600:hover {
  --tw-gradient-from: #ed8936;
  --tw-gradient-to: #f97316;
}

.hover\:to-orange-700:hover {
  --tw-gradient-to: #c85e0e;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.mt-12 {
  margin-top: 3rem;
}

.pt-8 {
  padding-top: 2rem;
}

.border-t {
  border-top-width: 1px;
}

.border-orange-200 {
  border-color: #fecaca;
}

.w-full {
  width: 100%;
}

.max-w-md {
  max-width: 28rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.hover\:underline:hover {
  text-decoration-line: underline;
}

.ml-1 {
  margin-left: 0.25rem;
}
</style>
