*Fitur: Data Master Konten*
Description
Fitur yang diperuntukkan bagi Admin, untuk melakukan setting dan update konten yang ditampilkan pada aplikasi mobile ADAMEDS. 
Fitur ini terpisah dari ADAMEDS Web maupun mobile, dan akan berupa web sendiri khusus untuk master konten

User Story
Sebagai Admin, saya dapat melakukan custom setting dan update terkait konten yang akan ditampilkan pada mobile apps ADAMEDS

Acceptance Criteria
Setting enable/disable konten dari field status
Tersedia dalam aplikasi website sendiri untuk custom konten
Jenis konten menentukan data tersebut ditampilkan di card News atau Advertisement
Jika jenis_konten=Ads, maka kolom yang muncul hanya title, konten, file pendukung, dan statusx`

*Flow Data Master Konten*
1. Start
   - Alur dimulai ketika pengguna mengakses sistem

2. Decision Point: Create?
   - Pengguna memutuskan apakah akan membuat konten baru atau tidak
   - Jika Ya: Lanjut ke pembuatan konten baru
   - Jika Tidak: Lanjut ke modifikasi data yang ada

3. Buat Konten
   - Proses pembuatan konten baru dimulai
   - Informasi yang dimasukkan:
     - Title
     - Meta description
     - Konten
     - Creator
     - URL posting
     - Upload file pendukung

4. Ubah Data Sesuaikan Data News
   - Proses modifikasi data yang sudah ada
   - Penyesuaian dilakukan sesuai kebutuhan

5. Simpan
   - Penyimpanan data baik untuk konten baru maupun data yang dimodifikasi

6. Tindakan Lanjutan
   - Setelah penyimpanan, beberapa tindakan dilakukan:
     - Status data untuk editing
     - Mobilisasi konten di home page
     - Penentuan letak konten berdasarkan jenisnya

7. End
   - Alur selesai setelah semua proses dilakukan

Rangkuman:
- Data yang Diproses: Sistem memproses pembuatan konten baru atau modifikasi data yang ada
- Fleksibilitas: Pengguna dapat memilih antara membuat konten baru atau mengubah data yang sudah ada
- Pengelolaan Konten: Sistem mengatur penempatan dan status konten setelah penyimpanan

*Struktur Direktori*
/node_modules
/src
	/configurations
		sequalize-instance.js
	/controllers
		konten-controller.js
	/errors
		notfound-404.js
        authorization-403.js
	/helpers
	/middlewares
		validateSchema.js
	/models
		konten-model.js
	/repositories
		konten-repository.js
	/responses
	/routes
		konten-route.js
	/seeders
	/services
		konten-service.js
	/utils
		epoch.js
	/validations
		konten-validation.js
server.js
.env
package-lock.json
package.json

*Background*
Dengan meningkatkan perkembangan teknologi digital, ADAMEDS hadir untuk memenuhi kebutuhan fasilitas kesehatan agar akses masyarakat di bidang kesehatan semakin mudah. Selain dalam bentuk website, ADAMEDS hadir dalam bentuk aplikasi mobile.
Aplikasi mobile ini bertujuan untuk mempermudah pasien dalam melakukan pendaftaran pemeriksaan tanpa harus mengunjungi faskes secara langsung. Sehingga diharapkan dengan melakukan pendaftaran melalui aplikasi mobile, proses pelayanan pasien akan menjadi lebih cepat dan efektif. Dengan adanya mobile aplikasi, penumpukan antrian pendaftaran di faskes dapat berkurang dan  menyusut.

*Visi*
	Visi dari modul ini adalah dapat membantu dalam memberikan layanan yang cepat, tepat, dan efektif pada proses pendaftaran pasien, dalam menunjang proses booking pendaftaran pada faskes terkait. 

*Goals*
		Tujuan dari modul ini adalah : 
Meningkatkan efisiensi proses pendaftaran
Memudahkan booking jadwal dokter 
Monitoring ketersediaan jadwal praktek dokter

*Release*
Name  
	Mobile ADAMEDS V1

Date
		2024

*Milestone*
Identifikasi dan Analisa Kebutuhan : melakukan survey kepada user untuk mendapatkan kebutuhan dan gambaran kondisi umum yang biasa dilakukan. Yang kemudian dilakukan analisa pada kebutuhan tersebut.
Menyelesaikan Desain Produk : menentukan desain sistem dan mockup sesuai dengan tujuan yang ditentukan.
Memulai pengembangan : mulai melakukan pengembangan sesuai dengan kebutuhan yang dibuat
Proses Pengujian : dilakukan uji coba oleh tim QA untuk memastikan bahwa produk telah sesuai dengan perencanaan dan kebutuhan, serta tidak ada kendala penggunaan
Rilis produk : merilis produk ke user dan memastikan dapat berjalan dengan baik
Evaluasi produk : melakukan evaluasi pasca rilis apakah produk sudah sesuai harapan atau belum dan apa yang perlu diperbarui
Pembaruan produk : setelah mendapatkan feedback user maka dilakukan pembaruan produk dengan harapan dapat mencapai tujuan dan memenuhi kebutuhan user
Pemantauan produk : memantau dan mengukur tingkat keberhasilan dari tujuan yang telah ditentukan

*Release criteria*
Functionality
Secara fungsional, modul Mobile Appointment dapat berfungsi sebagai berikut :
Booking Pendaftaran
Monitoring ketersediaan jadwal praktek Dokter 

Usability 
Secara penggunaan, modul ini diharapkan dapat memudahkan dalam melakukan booking pendaftaran dan monitoring ketersediaan jam praktek dokter

Reliability (optional)
-

Performance and supportability (optional)
-

*Additional Notes*
Alasan data masih ada meskipun sudah di-delete melalui POSTMAN adalah karena kita menggunakan metode soft delete dengan mengisi kolom deletedAt dengan epoch timestamp, bukan menghapus secara fisik dari database. Soft delete adalah teknik yang tidak benar-benar menghapus data dari database, melainkan menandai data sebagai "terhapus" dengan mengisi kolom tertentu (deletedAt) dengan waktu penghapusan. Data ini masih ada di database, tetapi dianggap "terhapus".