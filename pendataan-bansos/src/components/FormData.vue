<template>
  <div class="bg-slate-200/50 xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto lg:p-6">
    <div>
      <h1 class="font-bold text-2xl p-4">Formulir Input Data</h1>
    </div>
    
    <Form class="flex flex-col px-6" @submit="onSubmit">
      <label class="text-sm font-medium" for="nama">Nama Lengkap</label>
      <Field placeholder="Nama Sesuai KTP" class="rounded-lg mb-4 p-2" type="text" name="Nama" id="nama" />

      <label class="text-sm font-medium" for="nik">NIK</label>
      <Field placeholder="Masukan NIK" class="rounded-lg mb-4 p-2" type="text" name="NIK" id="nik" />

      <label class="text-sm font-medium" for="kartuKeluarga">No Kartu Keluarga</label>
      <Field placeholder="Masukan no Kartu Keluarga" class="rounded-lg mb-4 p-2" type="text" name="KartuKeluarga" id="kartuKeluarga" />

      <label class="text-sm font-medium" for="umur">Umur</label>
      <Field placeholder="Masukan Umur Anda" class="rounded-lg mb-4 p-2" type="text" name="Umur" id="umur" />

      <label class="text-sm font-medium">Jenis Kelamin</label>
      <section class="flex gap-4 mb-4 p-2">
        <p><Field type="radio" name="JenisKelamin" id="jenisKelamin" value="Laki-Laki" /> Laki-laki</p>
        <p><Field type="radio" name="JenisKelamin" id="jenisKelamin" value="Perempuan" /> Perempuan</p>
      </section>

      <label class="text-sm font-medium" for="alamat">Alamat</label>
      <Field placeholder="Masukan Alamat Anda" class="rounded-lg mb-4 p-2" name="Alamat" id="alamat" as="textarea">
      </Field>


      <section class="flex gap-4 sm:justify-between">
        <div class="w-full">
          <label class="text-sm font-medium" for="rt">RT</label>
          <Field placeholder="Masukan RT" class="rounded-lg mb-4 p-2 w-[100%]" type="text" name="RT" id="rt" />
        </div>
        <div class= "w-full">
          <label class="text-sm font-medium" for="rw">RW</label>
          <Field placeholder="Masukan RW" class="rounded-lg mb-4 p-2 w-[100%]" type="text" name="RW" id="rw" />
        </div>
      </section>

      <label class="text-sm font-medium" for="hasil1">Penghasilan Sebelum Pandemi</label>
      <Field placeholder="Masukan Penghasilan Anda Sebelum Pandemi" class="rounded-lg mb-4 p-2" type="text" name="HasilSebelum" id="hasil1" />

      <label class="text-sm font-medium" for="hasil">Penghasilan Setelah Pandemi</label>
      <Field placeholder="Masukan Penghasilan Anda Setelah Pandemi" class="rounded-lg mb-4 p-2" type="text" name="HasilSetelah" id="hasil2" />

      <label class="text-sm font-medium">Alasan Membutuhkan Bantuan</label>
      <Field name="Alasan" class="text-sm p-2 rounded-lg mb-4" as="select">
        <option value="" disabled selected>Pilih Salah Satu</option>
        <option value="Kehilangan pekerjaan">Kehilangan pekerjaan</option>
        <option value="Kepala keluarga terdampak atau korban Covid">Kepala keluarga terdampak atau korban Covid</option>
        <option value="Tergolong fakir/miskin semenjak sebelum Covid">Tergolong fakir/miskin semenjak sebelum Covid</option>
      </Field>

      <section class="flex flex-col">
        <div>
          <label class="flex flex-col text-sm font-medium" for="ktp">Foto Kartu Tanda Penduduk</label>
          <Field class="mb-4" type="file" name="FotoKTP" id="ktp" />
        </div>
        <div>
          <label class="flex flex-col text-sm font-medium" for="fkk">Foto Kartu Keluarga</label>
          <Field class="mb-4" type="file" name="FotoKK" id="fkk" />
        </div>
      </section>

      <button class="bg-gradient-to-r from-green-300 to-yellow-200 font-bold text-2xl rounded-lg px-4 py-2 text-blue-500 opacity-80 hover:opacity-100 border-2 hover:border-blue-500">Submit</button>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
    components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      dataBansos: null
    }
  },
  methods: {
    onSubmit(value) {
      this.dataBansos = value
      console.log(this.dataBansos.Nama)

      this.dataBansos.Nama = ''
      console.log(this.dataBansos.Nama)


    }
  },
};
</script>
<style scoped>

</style>
