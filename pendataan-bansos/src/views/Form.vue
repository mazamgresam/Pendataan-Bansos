<template>
  <div>
    <header class="flex justify-between xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto mt-10 rounded-t-xl overflow-hidden">
      <div class="bg-green-500 w-full h-4"></div>
      <div class="bg-yellow-300 w-full h-4"></div>
      <div class="bg-blue-500 w-full h-4"></div>
    </header>
    <FormData />
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
  components: { FormData },
};
</script>
<style lang=""></style>
