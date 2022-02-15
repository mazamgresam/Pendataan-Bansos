<template>
  <div id="bg-image" class="bg-gray-100 min-h-screen pb-8">
    <header
      class="flex justify-between sticky top-0 bg-gray-200 px-10 py-4 md:px-16 lg:px-24"
    >
      <div class="w-28">
        <img src="./assets/logo_jds.png" alt="logo JDS" />
      </div>
      <div class="flex gap-8 items-center">
        <div class="flex gap-3 lg:gap-6">
          <router-link
            :to="{ name: 'Home' }"
            class="lg:text-xl font-bold text-gray-600 opacity-60 hover:opacity-100 hover:text-gray-800"
            :class="{
              'opacity-100 text-gray-700 border-b-2 border-gray-700':
                $route.name == 'Home',
            }"
            >Beranda</router-link
          >
          <router-link
            :to="{ name: 'Form' }"
            class="lg:text-xl font-bold text-gray-600 opacity-60 hover:opacity-100 hover:text-gray-800"
            :class="{
              'opacity-100 text-gray-700 border-b-2 border-gray-700':
                $route.name == 'Form',
            }"
            >Verifikasi</router-link
          >
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#bg-image {
  background-image: url("./assets/bg.png");
  background-size: cover;
}
</style>
