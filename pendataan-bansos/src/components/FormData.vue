<template>
  <div class="bg-slate-200/50 xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto lg:p-6">
    <div>
      <h1 class="font-bold text-2xl p-4">Formulir Input Data</h1>
    </div>
    
    <Form name="form" class="flex flex-col px-6" @submit="onSubmit">
      <label class="text-sm font-medium" for="nama">Nama Lengkap</label>
      <Field placeholder="Nama Sesuai KTP" class="rounded-lg p-2 mb-4" type="text" name="Nama" id="nama" :rules="validateNama" />
      <ErrorMessage class="mb-4 mt-[-1rem] px-2 text-xs font-semibold text-red-600" name="Nama" />

      <label class="text-sm font-medium" for="nik">NIK</label>
      <Field placeholder="Masukan NIK" class="rounded-lg mb-4 p-2" type="number" name="NIK" id="nik" :rules="validateNIK" />
      <ErrorMessage class="mb-4 mt-[-1rem] px-2 text-xs font-semibold text-red-600" name="NIK" />

      <label class="text-sm font-medium" for="kartuKeluarga">No Kartu Keluarga</label>
      <Field placeholder="Masukan no Kartu Keluarga" class="rounded-lg p-2 mb-4" type="number" name="KartuKeluarga" id="kartuKeluarga" :rules="validateKK" />
      <ErrorMessage class="mb-4 px-2 mt-[-1rem] text-xs font-semibold text-red-600" name="KartuKeluarga" />

      <label class="text-sm font-medium" for="umur">Umur</label>
      <Field placeholder="Masukan Umur Anda" class="rounded-lg mb-4 p-2" type="number" name="Umur" id="umur"  :rules="validateUmur"  />
      <ErrorMessage class="mb-4 px-2 text-xs mt-[-1rem] font-semibold text-red-600" name="Umur" />

      <label class="text-sm font-medium">Jenis Kelamin</label>
      <section class="flex gap-4 mb-4 p-2">
        <p><Field type="radio" name="JenisKelamin" id="jenisKelamin" value="Laki-Laki" :rules="validateJenisKelamin" /> Laki-laki</p>
        <p><Field type="radio" name="JenisKelamin" id="jenisKelamin" value="Perempuan" :rules="validateJenisKelamin" /> Perempuan</p>
      </section>
      <ErrorMessage class="mb-4 px-2 mt-[-1rem] text-xs font-semibold text-red-600" name="JenisKelamin" />

      <label class="text-sm font-medium" for="alamat">Alamat</label>
      <Field placeholder="Masukan Alamat Anda" class="rounded-lg mb-4 p-2" name="Alamat" id="alamat" as="textarea" :rules="validateAlamat" />
      <ErrorMessage class="mb-4 px-2 mt-[-1rem] text-xs font-semibold text-red-600" name="Alamat" />


      <section class="flex gap-4 sm:justify-between mb-4">
        <div class="w-full">
          <label class="text-sm font-medium" for="rt">RT</label>
          <Field placeholder="Masukan RT" class="rounded-lg p-2 w-[100%]" type="number" name="RT" id="rt" :rules="validateRT" />
          <ErrorMessage class="px-2 text-xs font-semibold text-red-600" name="RT" />
        </div>
        <div class= "w-full">
          <label class="text-sm font-medium" for="rw">RW</label>
          <Field placeholder="Masukan RW" class="rounded-lg p-2 w-[100%]" type="number" name="RW" id="rw" :rules="validateRW" />
          <ErrorMessage class="px-2 text-xs font-semibold text-red-600" name="RW" />
        </div>
      </section>

      <label class="text-sm font-medium" for="hasil1">Penghasilan Sebelum Pandemi</label>
      <Field placeholder="Masukan Penghasilan Anda Sebelum Pandemi" class="rounded-lg p-2 mb-4" type="number" name="HasilSebelum" id="hasil1" :rules="validateHasilAwal" />
      <ErrorMessage class="mb-4 mt-[-1rem] px-2 text-xs font-semibold text-red-600" name="HasilSebelum" />

      <label class="text-sm font-medium" for="hasil">Penghasilan Setelah Pandemi</label>
      <Field placeholder="Masukan Penghasilan Anda Setelah Pandemi" class="rounded-lg p-2 mb-4" type="number" name="HasilSetelah" id="hasil2" :rules="validateHasilAkhir" />
      <ErrorMessage class="mb-4 mt-[-1rem] px-2 text-xs font-semibold text-red-600" name="HasilSetelah" />

      <label class="text-sm font-medium">Alasan Membutuhkan Bantuan</label>
      <Field v-model="alasan" :rules="validateAlasan" name="Alasan" class="text-sm p-2 rounded-lg mb-4" as="select">
        <option value="" disabled>Pilih Salah Satu</option>
        <option value="Kehilangan pekerjaan">Kehilangan pekerjaan</option>
        <option value="Kepala keluarga terdampak atau korban Covid">Kepala keluarga terdampak atau korban Covid</option>
        <option value="Tergolong fakir/miskin semenjak sebelum Covid">Tergolong fakir/miskin semenjak sebelum Covid</option>
        <option value="Lainnya">Lainnya</option>
      </Field>

      <Field :rules="validateAlasan" placeholder="Masukan Alasan Membutuhkan Bantuan" type="text" name="AlasanLain" v-show="other" class="rounded-lg mb-4 p-2" />
      <ErrorMessage class="mb-4 px-2 mt-[-1rem] text-xs font-semibold text-red-600" name="AlasanLain" />

      <section class="flex flex-col mt-2">
        <div>
          <label class="flex flex-col text-sm font-medium" for="ktp">Foto Kartu Tanda Penduduk</label>
          <Field class="mb-4" type="file" name="FotoKTP" id="ktp" :rules="validateFotoKTP" />
          <ErrorMessage class="mb-4 mt-[-1rem] px-2 text-xs font-semibold text-red-600" name="FotoKTP" />
        </div>
        <div>
          <label class="flex flex-col text-sm font-medium" for="fkk">Foto Kartu Keluarga</label>
          <Field class="mb-4" type="file" name="FotoKK" id="fkk" :rules="validateFotoKK" />
          <ErrorMessage class="mb-4 mt-[-1rem] px-2 text-xs font-semibold text-red-600" name="FotoKK" />
        </div>
      </section>

      <p class="rounded-lg mb-4 p-2 flex gap-4">
        <Field type="checkbox" name="setuju" value="setuju" :rules="validatePernyataan" />
        <p class="font-semibold text-justify">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</p>
      </p>
      <ErrorMessage class="mb-4 mt-[-1rem] px-2 text-xs font-semibold text-red-600" name="setuju" />

      <button class="bg-gradient-to-r from-green-300 to-yellow-200 font-bold text-2xl rounded-lg px-4 py-2 text-blue-500 opacity-80 hover:opacity-100 border-2 hover:border-blue-500">Verifikasi</button>
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
      alasan: null,
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
    validateNama(value) {
      // if the field is empty
      if (!value) {
        return 'Form Nama Tidak Boleh Kosong';
      }
      // if the field is not a valid name
      const regex = /^[a-zA-Z\s'-]{1,100}$/i;
      if (!regex.test(value)) {
        return 'Form Nama Harus Menggunakan Format Yang Benar';
      }
      // All is good
      return true;
    },
    validateNIK(value) {
      // if the field is empty
      if (!value) {
        return 'Form NIK Tidak Boleh Kosong';
      }
      // if the field is not a valid name
      const regex = /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/i;
      if (!regex.test(value)) {
        return 'Form NIK Harus Menggunakan Format Yang Benar';
      }
      // All is good
      return true;
    },
    validateKK(value) {
      // if the field is empty
      if (!value) {
        return 'Form No KK Tidak Boleh Kosong';
      }
      // if the field is not a valid name
      const regex = /^\d{16}$/i;
      if (!regex.test(value)) {
        return 'Form No KK Harus 16 Angka';
      }
      // All is good
      return true;
    },
    validateUmur(value) {
      // if the field is empty
      if (!value) {
        return 'Form Umur Tidak Boleh Kosong';
      }
      // if the field is not a valid name
      if (value < 0 || value > 200) {
        return 'Form Umur Harus Berupa Angka antara 0 sampai 200';
      }
      // All is good
      return true;
    },
    validateJenisKelamin(value) {
      // if the field is empty
      if (!value) {
        return 'Form Jenis Kelamin Tidak Boleh Kosong';
      }
      // All is good
      return true;
    },
    validateAlamat(value) {
      // if the field is empty
      if (!value) {
        return 'Form Alamat Tidak Boleh Kosong';
      }
      // All is good
      return true;
    },
    validateRT(value) {
      // if the field is empty
      if (!value) {
        return 'Form No RT Tidak Boleh Kosong';
      }
      // if the field is not a valid name
      const regex = /^\d{3}$/i;
      if (!regex.test(value)) {
        return 'Form No RT Harus Terdiri 3 Angka';
      }
      // All is good
      return true;
    },
    validateRW(value) {
      // if the field is empty
      if (!value) {
        return 'Form No RW Tidak Boleh Kosong';
      }
      // if the field is not a valid name
      const regex = /^\d{3}$/i;
      if (!regex.test(value)) {
        return 'Form No RW Harus Terdiri 3 Angka';
      }
      // All is good
      return true;
    },
    validateHasilAwal(value) {
      // if the field is empty
      if (!value) {
        return 'Form Penghasilan Sebelum Pandemi Tidak Boleh Kosong';
      }
      // All is good
      return true;
    },
    validateHasilAkhir(value) {
      // if the field is empty
      if (!value) {
        return 'Form Penghasilan Sebelum Pandemi Tidak Boleh Kosong';
      }
      // All is good
      return true;
    },
    validateAlasan(value) {
      // if the field is empty
      if (!value) {
        return 'Form Alasan Tidak Boleh Kosong';
      }
      // All is good
      return true;
    },
    validateFotoKTP(value) {
      // if the field is empty
      if (!value) {
        return 'Form Foto KTP Tidak Boleh Kosong';
      }
      // if the field is not a valid name
      if (value[0].size > 2097152) {
        return 'Size File Tidak Boleh Lebih dari 2MB';
      }
      // All is good
      return true;
    },
    validateFotoKK(value) {
      // if the field is empty
      if (!value) {
        return 'Form Foto KTP Tidak Boleh Kosong';
      }
      // if the field is not a valid name
      if (value[0].size > 2097152) {
        return 'Size File Tidak Boleh Lebih dari 2MB';
      }
      // All is good
      return true;
    },
    validatePernyataan(value) {
      // if the field is empty
      if (!value) {
        return 'Form ini Harus di Setujui';
      }
      // All is good
      return true;
    },
  },
  watch: {
    alasan() {
      if (this.alasan !== 'Lainnya') {
        this.other = false
      } else if(this.alasan === "Lainnya") {
        this.other = true
      }
    }
  },
};
</script>
<style scoped>
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
