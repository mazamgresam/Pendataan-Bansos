<template>
  <div class="bg-slate-200/50 xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto lg:p-6">
    <div>
      <h1 class="font-bold text-2xl p-4">Formulir Input Data</h1>
    </div>
    
    <Form class="flex flex-col px-6" @submit="onSubmit">
      <label class="text-sm font-medium" for="nama">Nama Lengkap</label>
      <Field v-model="nama" placeholder="Nama Sesuai KTP" class="rounded-lg mb-4 p-2" type="text" name="Nama" id="nama" />

      <label class="text-sm font-medium" for="nik">NIK</label>
      <Field v-model="nik" placeholder="Masukan NIK" class="rounded-lg mb-4 p-2" type="text" name="NIK" id="nik" />

      <label class="text-sm font-medium" for="kartuKeluarga">No Kartu Keluarga</label>
      <Field v-model="noKartuKel" placeholder="Masukan no Kartu Keluarga" class="rounded-lg mb-4 p-2" type="text" name="KartuKeluarga" id="kartuKeluarga" />

      <label class="text-sm font-medium" for="umur">Umur</label>
      <Field v-model="umur" placeholder="Masukan Umur Anda" class="rounded-lg mb-4 p-2" type="text" name="Umur" id="umur" />

      <label class="text-sm font-medium">Jenis Kelamin</label>
      <section class="flex gap-4 mb-4 p-2">
        <p><Field v-model="jenisKelamin" type="radio" name="JenisKelamin" id="jenisKelamin" value="Laki-Laki" /> Laki-laki</p>
        <p><Field v-model="jenisKelamin" type="radio" name="JenisKelamin" id="jenisKelamin" value="Perempuan" /> Perempuan</p>
      </section>

      <label class="text-sm font-medium" for="alamat">Alamat</label>
      <Field v-model="alamat" placeholder="Masukan Alamat Anda" class="rounded-lg mb-4 p-2" name="Alamat" id="alamat" as="textarea" />


      <section class="flex gap-4 sm:justify-between">
        <div class="w-full">
          <label class="text-sm font-medium" for="rt">RT</label>
          <Field v-model="rt" placeholder="Masukan RT" class="rounded-lg mb-4 p-2 w-[100%]" type="text" name="RT" id="rt" />
        </div>
        <div class= "w-full">
          <label class="text-sm font-medium" for="rw">RW</label>
          <Field v-model="rw" placeholder="Masukan RW" class="rounded-lg mb-4 p-2 w-[100%]" type="text" name="RW" id="rw" />
        </div>
      </section>

      <label class="text-sm font-medium" for="hasil1">Penghasilan Sebelum Pandemi</label>
      <Field v-model="hasilSebelum" placeholder="Masukan Penghasilan Anda Sebelum Pandemi" class="rounded-lg mb-4 p-2" type="text" name="HasilSebelum" id="hasil1" />

      <label class="text-sm font-medium" for="hasil">Penghasilan Setelah Pandemi</label>
      <Field v-model="hasilSetelah" placeholder="Masukan Penghasilan Anda Setelah Pandemi" class="rounded-lg mb-4 p-2" type="text" name="HasilSetelah" id="hasil2" />

      <label class="text-sm font-medium">Alasan Membutuhkan Bantuan</label>
      <Field v-model="alasan" name="Alasan" class="text-sm p-2 rounded-lg mb-2" as="select">
        <option value="" disabled selected>Pilih Salah Satu</option>
        <option value="Kehilangan pekerjaan">Kehilangan pekerjaan</option>
        <option value="Kepala keluarga terdampak atau korban Covid">Kepala keluarga terdampak atau korban Covid</option>
        <option value="Tergolong fakir/miskin semenjak sebelum Covid">Tergolong fakir/miskin semenjak sebelum Covid</option>
        <option @submit="change" value="Lainnya">Lainnya</option>
      </Field>

      <Field placeholder="Masukan Alasan Membutuhkan Bantuan" type="text" name="alasan" v-show="other" class="rounded-lg mb-4 p-2" />

      <section class="flex flex-col mt-2">
        <div>
          <label class="flex flex-col text-sm font-medium" for="ktp">Foto Kartu Tanda Penduduk</label>
          <Field v-model="fotoKTP" class="mb-4" type="file" name="FotoKTP" id="ktp" />
        </div>
        <div>
          <label class="flex flex-col text-sm font-medium" for="fkk">Foto Kartu Keluarga</label>
          <Field v-model="fotoKK" class="mb-4" type="file" name="FotoKK" id="fkk" />
        </div>
      </section>

      <p class="rounded-lg mb-4 p-2 flex gap-4">
        <Field class="" type="checkbox" name="setuju" value="" />
        <p class="font-semibold text-justify">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</p>
      </p>

      <button class="bg-gradient-to-r from-green-300 to-yellow-200 font-bold text-2xl rounded-lg px-4 py-2 text-blue-500 opacity-80 hover:opacity-100 border-2 hover:border-blue-500">Submit</button>
    </Form>

  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import NProgress from 'nprogress'

export default {
    inject: ['GStore'],
    components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      dataBansos: null,
      nama: '',
      nik: null,
      noKartuKel: null,
      umur: null,
      jenisKelamin: '',
      alamat: '',
      rt: null,
      rw: null,
      hasilSebelum: '',
      hasilSetelah: '',
      alasan: '',
      fotoKTP: null,
      fotoKK: null,
      other: false,
    }
  },
  methods: {
    onSubmit(value) {
      console.log(value)
      const wait = Math.floor(Math.random() * 10)

      if (wait >= 5) {
        NProgress.start()
        setTimeout(() => {
          NProgress.done()
          this.GStore.flashMessage = 'Mohon Maaf Terjadi Kesalahan Server Silahkan Verifikasi Ulang' 
        }, 1500);

        setTimeout(() => {
          this.GStore.flashMessage = ''
        }, 3500);      

      } else {
        NProgress.start()
        setTimeout(() => {
          this.$router.push({
            name: 'Success'
          })
          NProgress.done()
        }, 1500);
      }
    },
  },
  watch: {
    alasan() {
      if (this.alasan !== 'Lainnya') {
        this.other = false
        console.log(this.other)
      } else if(this.alasan === "Lainnya") {
        this.other = true
        console.log(this.other)
      }
    }
  },
};
</script>
<style scoped>

</style>
