<template>
  <div class="bg-slate-100/50 text-center rounded-2xl xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto my-40 lg:p-6 border-8 border-blue-500">
    <h1 class="bg-gradient-to-r from-green-400 via-yellow-300 to-blue-500 text-transparent bg-clip-text font-bold text-6xl py-2 mb-8">Verifikasi Berhasil</h1>
    <button class="bg-gradient-to-r from-green-300 to-yellow-200 font-bold text-2xl rounded-lg px-4 py-2 text-blue-500 opacity-80 hover:opacity-100 border-2 hover:border-blue-500" @click="dashboard">Kembali ke Dashboard</button>
  </div>
</template>
<script>
import NProgress from 'nprogress'

export default {
  methods: {
    dashboard() {
      NProgress.start()
      setTimeout(() => {
        this.$router.push({
          name: 'Home'
        })
        NProgress.done()
      }, 1500);
    }
  },
}
</script>