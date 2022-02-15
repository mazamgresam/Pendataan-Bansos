<template>
  <div class="bg-slate-200/50 xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto lg:p-6">
    <div>
      <h1 class="font-bold text-2xl p-4">Formulir Input Data</h1>
    </div>
    <form class="flex flex-col px-6" action="">

      <label class="text-sm font-medium" for="nama">Nama Lengkap</label>
      <input placeholder="Nama Sesuai KTP" class="rounded-lg mb-4 p-2" type="text" name="nama" id="nama">

      <label class="text-sm font-medium" for="nik">NIK</label>
      <input placeholder="Masukan NIK" class="rounded-lg mb-4 p-2" type="text" name="nik" id="nik">

      <label class="text-sm font-medium" for="kk">No Kartu Keluarga</label>
      <input placeholder="Masukan no Kartu Keluarga" class="rounded-lg mb-4 p-2" type="text" name="kk" id="kk">

      <label class="text-sm font-medium" for="umur">Umur</label>
      <input placeholder="Masukan Umur Anda" class="rounded-lg mb-4 p-2" type="text" name="umur" id="umur">

      <label class="text-sm font-medium">Jenis Kelamin</label>
      <section class="flex gap-4 mb-4 p-2">
        <p><input type="radio" name="jenisKelamin" id="jenisKelamin" value="Laki-Laki"> Laki-laki</p>
        <p><input type="radio" name="jenisKelamin" id="jenisKelamin" value="Perempuan"> Perempuan</p>
      </section>

      <label class="text-sm font-medium" for="alamat">Alamat</label>
      <textarea placeholder="Masukan Alamat Anda" class="rounded-lg mb-4 p-2" type="text" name="alamat" id="alamat"></textarea>

      <section class="flex gap-4 sm:justify-between">
        <div class="w-full">
          <label class="text-sm font-medium" for="rt">RT</label>
          <input placeholder="Masukan RT" class="rounded-lg mb-4 p-2 w-[100%]" type="text" name="rt" id="rt">
        </div>
        <div class= "w-full">
          <label class="text-sm font-medium" for="rw">RW</label>
          <input placeholder="Masukan RW" class="rounded-lg mb-4 p-2 w-[100%]" type="text" name="rw" id="rw">
        </div>
      </section>

      <label class="text-sm font-medium" for="hasil1">Penghasilan Sebelum Pandemi</label>
      <input placeholder="Masukan Penghasilan Anda Sebelum Pandemi" class="rounded-lg mb-4 p-2" type="text" name="hasil1" id="hasil1">

      <label class="text-sm font-medium" for="hasil">Penghasilan Setelah Pandemi</label>
      <input placeholder="Masukan Penghasilan Anda Setelah Pandemi" class="rounded-lg mb-4 p-2" type="text" name="hasil2" id="hasil2">

      <label class="text-sm font-medium">Alasan Membutuhkan Bantuan</label>
      <select class="text-sm p-2 rounded-lg mb-4"> Pilih
        <option disabled selected="selected">Pilih Salah Satu</option>
        <option>Kehilangan pekerjaan</option>
        <option>Kepala keluarga terdampak atau korban Covid</option>
        <option>Tergolong fakir/miskin semenjak sebelum Covid</option>
      </select>

      <section class="flex flex-col">
        <div>
          <label class="flex flex-col text-sm font-medium" for="ktp">Foto Kartu Tanda Penduduk</label>
          <input class="mb-4" type="file" name="ktp" id="ktp">
        </div>
        <div>
          <label class="flex flex-col text-sm font-medium" for="fkk">Foto Kartu Keluarga</label>
          <input class="mb-4" type="file" name="fkk" id="fkk">
        </div>
      </section>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

</style>
