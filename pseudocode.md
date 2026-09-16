# COURSE APP FITUR FLOW

## $Login User

- mulai
- user masuk ke halaman login
- user mengisi form login
- user click login
- sistem verifikasi
- if username & password terdaftar:
  - sistem memberikan token
  - sistem menyimpan token di client & dan database seusai dengan user yang melakukan login
  - redirect ke halaman beranda
- else:
  - sistem mengirim pesan "username or password salah"
- selesai

## $Register User

- mulai
- user masuk ke halaman register
- user mengisi form register
- user click register
- sistem verifikasi
- if form diisi dengan benar:
  - sistem mengirim kode ke email yang diberikan
  - redirect ke halaman validate-otp
  - user melakukan proses $validate_kode
- else:
  - sistem kirim pesan "form harus diisi dengan benar"
- selesai

## $Validate Kode

- mulai
- user melakukan proses $register_user
- user memasukkan kode yang valid
- sistem memverifikasi
- if kode valid:
  - sistem menyimpan data user ke database
  - redirect ke halaman login
  - user melakukan proses $login
- else:
  - sistem kirim pesan "Kode yang dimasukkan tidak valid"
- user meminta kode ulang
- sistem mengirim kode ulang ke email
- user masukkan kode yang valid
- sistem verifikasi
- selesai

## $Buy Course User

- mulai
- user masuk ke halaman list course
- user memilih course
- user dialihkan kehalaman course yang dipilih
- user click buy
- sistem validasi
- if user login:
  - sistem memasukkan data transaksi ke database dengan status pending
  - redirect ke halaman payment
  - user melakukan proses $payment
- else:
  - redirect ke halaman login
- selesai

## $Payment

- mulai
- user memilih metode pembayaran
- user click pembayaran
- user melakukan pembayaran sesuai dengan metode yang dipilih
- sistem melakukan verifikasi
- if pembayaran sudah dilakukan:
  - sistem memperbarui data transaksi user menjadi status lunas
  - sistem kirim pesan "pembayaran sukses"
  - redirect ke halaman course user
- else if user tidak melakukan pembayaran sesuai tenggat waktu yang ditentukan :
  - sistem membatalkan pembelian & menghapus data transaksi yang sesuai
- else:
  - sistem membatalkan pembelian
- selesai

## $Logout

- mulai
- user click logout
- sistem menghapus token pada sisi client & pada database user
- selesai

## $User Finish Materi

- mulai
- user mengakses materi course
- if user menyelesaikan materi sampai selesai:
    - sistem memperbarui data penyelesaian user didatabase
    - redirect ke materi selanjutnya
- else if user click tandai selesai:
    - sistem memperbarui data penyelesaian user didatabase
    - redirect ke materi selanjutnya
- else if user checklist materi pada detail materi:
    - sistem memperbarui data penyelesaian user didatabase
    - redirect ke materi selanjutnya
- selesai