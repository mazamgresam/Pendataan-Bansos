<template>
  <div>
    <header class="flex justify-between xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto mt-10 rounded-t-xl overflow-hidden">
      <div class="bg-green-500 w-full h-4"></div>
      <div class="bg-yellow-300 w-full h-4"></div>
      <div class="bg-blue-500 w-full h-4"></div>
    </header>
    <FormData />
    <div class="text-center font-semibold text-gray-200 text-xl xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto mb-4 p-2 rounded-lg" id="flashMessage" v-show="GStore.flashMessage" >{{ GStore.flashMessage }}</div>
    <footer class="flex justify-between xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto mb-10 rounded-b-xl overflow-hidden">
      <div class="bg-green-500 w-full h-4"></div>
      <div class="bg-yellow-300 w-full h-4"></div>
      <div class="bg-blue-500 w-full h-4"></div>
    </footer>
  </div>
</template>
<script>
import FormData from "../components/FormData.vue";

export default {
  inject: ['GStore'],
  components: { FormData },
};
</script>
<style>

@keyframes yellowfade {
  from {
    background: rgb(233, 50, 50);
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 5s;
}
</style>
