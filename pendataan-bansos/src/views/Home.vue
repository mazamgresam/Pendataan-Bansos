<template>
  <div
    class="lg:flex lg:justify-between gap-8 items-center 2xl:w-3/4 pt-28 pb-6 px-16 mx-auto text-lg"
  >
    <p>
      Selamat Datang !
      <span
        ><br />
        <h1
          class="bg-gradient-to-r from-green-300 via-yellow-300 to-blue-500 text-transparent bg-clip-text font-bold text-5xl py-4"
        >
          Sistem Pendataan Bantuan Sosial
        </h1>
        <p>
          Komplek Panghegar adalah sebuah area di wilayah Kelurahan Cipadung
          Kulon, Kecamatan Panyileukan, yang terdiri dari 9 Rukun Warga (RW) dan
          13 Rukun Tetangga (RT). Guna memastikan bantuan tersalurkan kepada
          orang yang tepat, proses verifikasi dapat dilakukan dengan mudah, dan
          data yang masuk bersifat valid, dibutuhkan sejumlah data yang
          dilaporkan oleh RW.
        </p></span
      >
    </p>

    <img
      class="xl:h-72 lg:h-56 w-11/12 sm:w-7/12 mx-auto"
      src="../assets/bantuan.png"
      alt="bansos"
    />
  </div>
  <div class="xl:w-1/6 mx-auto text-center">
    <button
      @click="move"
      class="bg-gradient-to-r from-green-300 to-yellow-200 font-bold text-2xl rounded-lg px-4 py-2 text-blue-500 opacity-80 hover:opacity-100 border-2 hover:border-blue-500"
    >
      Verifikasi Disini
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    move() {
      this.$router.push({
        name: "Form",
      });
    },
  },
};
</script>
