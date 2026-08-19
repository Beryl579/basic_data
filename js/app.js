/* =====================================================================
   KELAS BASIC DATA + DATA LAB INTERAKTIF
   File JavaScript terpisah untuk modularitas
===================================================================== */

const MODULES = [
{ id:1, icon:"🧱", title:"Understanding Data", duration:"±10 menit", youtubeId:"HKP5cMAh9nQ",
  desc:"Memahami hakikat data, jenis-jenis data, dan mengapa data menjadi fondasi segala keputusan.",
  sections:[
    { h:"1. Apa Itu Data?", body:`<p>Data adalah <strong>fakta mentah</strong> yang belum diolah dan belum memiliki makna tersendiri. Angka <strong>250.000</strong> saja hanyalah data. Tetapi ketika diberi konteks — <em>"penjualan bulan ini Rp250.000"</em> — ia berubah menjadi <strong>informasi</strong>.</p><p>Dalam piramida <strong>DIKW</strong>: <strong>Data → Informasi → Pengetahuan → Wisdom</strong>. Semakin naik, nilainya semakin besar bagi pengambilan keputusan.</p><div class="callout callout-example"><strong>💡 Contoh data di sekitarmu:</strong> suhu harian, jumlah pengunjung toko, struk transaksi, hasil survei, log klik website.</div>` },
    { h:"2. Jenis-Jenis Data", body:`<ul class="list-disc pl-5 space-y-2"><li><strong>Kualitatif (kategorikal)</strong> — <em>Nominal</em>: tanpa urutan (kota, warna); <em>Ordinal</em>: berjenjang (rating kepuasan).</li><li><strong>Kuantitatif (numerik)</strong> — <em>Diskrit</em>: hasil menghitung (jumlah transaksi); <em>Kontinu</em>: hasil mengukur (durasi, berat, omzet).</li></ul><div class="callout callout-note"><strong>📌 Catatan:</strong> jenis data menentukan metode analisis dan jenis grafik yang tepat.</div>` },
    { h:"3. Sumber Data", body:`<ul class="list-disc pl-5 space-y-2"><li><strong>Data primer</strong> — dikumpulkan langsung: survei, wawancara, eksperimen.</li><li><strong>Data sekunder</strong> — sumber yang sudah ada: laporan BPS, database perusahaan, dataset publik.</li><li><strong>Internal vs eksternal</strong> — dari dalam organisasi vs dari luar.</li></ul><p class="mt-3">Primer lebih sesuai kebutuhan namun lambat; sekunder cepat namun kualitasnya harus dicek.</p>` },
    { h:"4. Mengapa Data Penting?", body:`<p>Data menjadi dasar keputusan objektif, alat ukur kinerja, dan detektor dini masalah maupun peluang.</p><div class="callout callout-quote">"In God we trust. All others must bring data." — W. Edwards Deming</div>` }
  ],
  points:["Data = fakta mentah; informasi = data + konteks & makna.","Kualitatif (nominal & ordinal) vs kuantitatif (diskrit & kontinu).","Sumber data: primer/sekunder, internal/eksternal.","Keputusan yang baik berdiri di atas data yang baik."],
  quiz:[
    { q:"Manakah definisi 'data' yang paling tepat?", o:["Fakta mentah yang belum diolah","Kesimpulan akhir dari sebuah analisis","Grafik yang menarik","Laporan keuangan perusahaan"], a:0, e:"Data adalah fakta mentah. Setelah diolah dan diberi konteks, barulah ia menjadi informasi." },
    { q:"Survei mengukur kepuasan dengan skala 'sangat tidak puas → sangat puas'. Ini jenis data…", o:["Kuantitatif kontinu","Kualitatif ordinal","Kualitatif nominal","Kuantitatif diskrit"], a:1, e:"Kategorinya berjenjang tetapi jaraknya tidak bisa diukur → kualitatif ordinal." },
    { q:"Jumlah produk terjual setiap bulan termasuk data…", o:["Kuantitatif diskrit","Kuantitatif kontinu","Kualitatif nominal","Kualitatif ordinal"], a:0, e:"Hasil menghitung (bilangan bulat) → kuantitatif diskrit." },
    { q:"Kamu menyebar kuesioner langsung ke pelanggan. Data yang kamu kumpulkan disebut…", o:["Data sekunder","Data eksternal","Data primer","Data historis"], a:2, e:"Dikumpulkan langsung dari sumber pertama = data primer." }
  ]},
{ id:2, icon:"🏢", title:"Understanding Business Process", duration:"±10 menit", youtubeId:"-CsylPwXdFQ",
  desc:"Mengapa orang data wajib paham proses bisnis, dan bagaimana data lahir dari aktivitas bisnis.",
  sections:[
    { h:"1. Apa Itu Business Process?", body:`<p>Rangkaian aktivitas yang saling terkait untuk menghasilkan output bernilai bagi pelanggan.</p><div class="callout callout-example"><strong>💡 Contoh 'order-to-cash':</strong> pelanggan memesan → pembayaran → dikirim → uang diterima.</div><p>Setiap proses punya unsur: <strong>input → aktivitas → output</strong>, plus owner dan KPI.</p>` },
    { h:"2. Data Lahir dari Proses Bisnis", body:`<p>Transaksi → data penjualan; pengiriman → data logistik; komplain → data layanan. <strong>Untuk memahami data, pahami proses yang melahirkannya.</strong></p>` },
    { h:"3. Mengapa Wajib Paham Proses Bisnis?", body:`<ul class="list-disc pl-5 space-y-2"><li>Bertanya hal yang benar.</li><li>Interpretasi tepat.</li><li>Rekomendasi actionable.</li><li>Dipercaya stakeholder.</li></ul>` },
    { h:"4. Cara Cepat Membaca Proses", body:`<ol class="list-decimal pl-5 space-y-2"><li>Gambar alur ujung-ke-ujung.</li><li>Identifikasi owner & KPI.</li><li>Temukan pain point.</li><li>Petakan data di tiap tahap.</li></ol>` }
  ],
  points:["Proses bisnis = rangkaian aktivitas bernilai.","Data adalah jejak digital proses bisnis.","Paham konteks = analisis tepat & dipercaya.","Alur → owner & KPI → pain point → data."],
  quiz:[
    { q:"Definisi business process yang paling tepat adalah…", o:["Rangkaian aktivitas yang menghasilkan output bernilai bagi pelanggan","Struktur organisasi perusahaan","Laporan keuangan tahunan","Jadwal kerja karyawan"], a:0, e:"Rangkaian aktivitas input → aktivitas → output yang bernilai bagi pelanggan." },
    { q:"Setiap transaksi e-commerce terekam menjadi data. Hal ini menunjukkan bahwa…", o:["Data lahir dari proses bisnis","Data tidak butuh konteks bisnis","Proses bisnis bergantung pada grafik","Data hanya urusan tim IT"], a:0, e:"Aktivitas bisnis meninggalkan jejak data." },
    { q:"Manfaat utama analis memahami proses bisnis adalah…", o:["Interpretasi data tepat dan rekomendasi relevan","Bisa melewati tahap pembersihan data","Tidak perlu bicara dengan stakeholder","Otomatis menguasai semua tools"], a:0, e:"Konteks bisnis membuat analisis menjawab masalah nyata." },
    { q:"Langkah pertama membaca sebuah proses bisnis adalah…", o:["Langsung membuat dashboard","Menggambar alur proses dari ujung ke ujung","Memilih warna grafik","Mengumpulkan semua data perusahaan"], a:1, e:"Petakan alurnya dulu, baru owner, KPI, pain point, dan data." }
  ]},
{ id:3, icon:"📖", title:"Data Story", duration:"±8 menit", youtubeId:"dMq6bq5Khrs",
  desc:"Seni merangkai data menjadi cerita yang menggerakkan audiens untuk bertindak.",
  sections:[
    { h:"1. Apa Itu Data Story?", body:`<p>Narasi yang memadukan <strong>data, konteks, dan visual</strong> untuk menyampaikan pesan yang menggerakkan tindakan. Manusia mengingat cerita lebih baik daripada tabel.</p>` },
    { h:"2. Tiga Elemen", body:`<ul class="list-disc pl-5 space-y-2"><li><strong>Data</strong> — bukti valid.</li><li><strong>Narrative</strong> — alur cerita.</li><li><strong>Visual</strong> — grafik yang memperjelas.</li></ul>` },
    { h:"3. Struktur Sederhana", body:`<ol class="list-decimal pl-5 space-y-2"><li><strong>Konteks</strong></li><li><strong>Konflik</strong></li><li><strong>Insight</strong></li><li><strong>Rekomendasi</strong></li></ol><div class="callout callout-example"><strong>💡 Contoh:</strong> penjualan Q3 turun → penurunan terkonsentrasi di region X → stok produk unggulan kosong 3 minggu → perbaiki alert stok.</div>` },
    { h:"4. Tips Praktis", body:`<ul class="list-disc pl-5 space-y-2"><li>Kenali audiens.</li><li>Satu pesan utama.</li><li>Grafik paling sederhana.</li><li>Sorot angka penting.</li></ul>` }
  ],
  points:["Data story = data + narasi + visual.","Struktur: konteks → konflik → insight → rekomendasi.","Satu pesan utama, kenali audiens."],
  quiz:[
    { q:"Data story adalah…", o:["Narasi yang memadukan data, konteks, dan visual untuk menggerakkan tindakan","Kumpulan semua grafik dalam satu slide","Laporan panjang berisi seluruh angka","Video animasi tentang data"], a:0, e:"Bukan tumpukan grafik, melainkan cerita berpesan jelas." },
    { q:"Tiga elemen data story adalah…", o:["Data, narrative, visual","Data, database, dashboard","Excel, SQL, Python","Judul, tabel, lampiran"], a:0, e:"Data sebagai bukti, narrative sebagai alur, visual sebagai kejelasan." },
    { q:"Urutan struktur data story yang benar adalah…", o:["Rekomendasi – insight – konteks – konflik","Konteks – konflik – insight – rekomendasi","Insight – konteks – rekomendasi – konflik","Konflik – rekomendasi – konteks – insight"], a:1, e:"Konteks → konflik → insight → rekomendasi." },
    { q:"Berapa jumlah pesan utama yang ideal dalam satu data story?", o:["Sebanyak mungkin","Satu","Tiga","Sesuai jumlah grafik"], a:1, e:"Satu pesan utama agar audiens ingat dan tergerak." }
  ]},
{ id:4, icon:"💡", title:"Data to Insight", duration:"±9 menit", youtubeId:"iJeHN2JKW5Y",
  desc:"Naik tangga dari data mentah menuju insight yang actionable dan bernilai bisnis.",
  sections:[
    { h:"1. Tangga Data → Insight", body:`<ul class="list-disc pl-5 space-y-2"><li><strong>Data:</strong> '1.204'</li><li><strong>Informasi:</strong> '1.204 transaksi minggu ini'</li><li><strong>Pengetahuan:</strong> 'Turun 15%, terutama kategori A'</li><li><strong>Insight:</strong> 'Karena stok kosong — perbaiki replenishment'</li></ul>` },
    { h:"2. Observasi vs Insight", body:`<div class="callout callout-example"><strong>💡</strong> Observasi: "Penjualan turun 20%." Insight: "Turun 20% karena produk A kosong stok di region X, terutama segmen repeat buyer."</div><p>Observasi = <em>apa</em>; insight = <em>mengapa</em> + <em>lalu harus apa</em>.</p>` },
    { h:"3. Ciri Insight Baik", body:`<ul class="list-disc pl-5 space-y-2"><li>Spesifik</li><li>Relevan</li><li>Actionable</li><li>Menjawab 'so what?'</li></ul>` },
    { h:"4. Cara Menggali Insight", body:`<ul class="list-disc pl-5 space-y-2"><li>Bertanya hal yang benar.</li><li>Bandingkan (tren, segmen, benchmark).</li><li>5 Whys.</li><li>Validasi.</li></ul>` }
  ],
  points:["Insight menjawab 'mengapa' dan 'so what'.","Insight baik: spesifik, relevan, actionable.","Gali dengan perbandingan, 5 Whys, validasi."],
  quiz:[
    { q:"'Penjualan turun 20% di bulan Maret' adalah contoh…", o:["Insight","Observasi","Rekomendasi","Wisdom"], a:1, e:"Baru menyatakan APA yang terjadi — observasi." },
    { q:"Insight berbeda dari observasi karena insight…", o:["Menjelaskan mengapa dan apa tindakannya","Selalu menggunakan persentase","Membutuhkan dashboard mahal","Berukuran lebih panjang"], a:0, e:"Insight bisa jadi dasar tindakan." },
    { q:"Yang BUKAN ciri insight yang baik adalah…", o:["Spesifik","Actionable","Umum dan ambigu","Relevan dengan tujuan"], a:2, e:"Insight umum tidak bisa ditindaklanjuti." },
    { q:"Teknik bertanya 'mengapa' berulang disebut…", o:["5 Whys","A/B Testing","Brainstorming","Benchmarking"], a:0, e:"5 Whys menembus gejala sampai akar penyebab." }
  ]},
{ id:5, icon:"⚖️", title:"Data Story vs Dashboard", duration:"±8 menit", youtubeId:"dDFBt9YdeWE",
  desc:"Kapan memakai dashboard, kapan data story — dan bagaimana keduanya saling melengkapi.",
  sections:[
    { h:"1. Dashboard: Alat Monitoring", body:`<p>Panel metrik interaktif untuk memantau kinerja. Kelebihan: banyak indikator, eksplorasi bebas. Kekurangan: tidak memberi kesimpulan.</p>` },
    { h:"2. Data Story: Alat Persuasi", body:`<p>Narasi terfokus untuk menyampaikan satu pesan dan mendorong keputusan.</p>` },
    { h:"3. Kapan Pakai yang Mana?", body:`<ul class="list-disc pl-5 space-y-2"><li>Monitoring berkala → dashboard.</li><li>Rekomendasi/keputusan → data story.</li><li>Eksplorasi bebas → dashboard.</li><li>Waktu audiens terbatas → data story.</li></ul><div class="callout callout-note"><strong>📌 Melengkapi:</strong> anomali di dashboard didalami menjadi data story.</div>` }
  ],
  points:["Dashboard = monitoring; data story = persuasi.","Pilih sesuai tujuan & audiens.","Keduanya saling melengkapi."],
  quiz:[
    { q:"Tujuan utama dashboard adalah…", o:["Monitoring dan eksplorasi metrik","Meyakinkan audiens mengambil keputusan","Menyimpan data mentah","Menggantikan rapat"], a:0, e:"Dashboard untuk memantau dan mengeksplorasi." },
    { q:"Data story paling tepat digunakan ketika…", o:["Audiens ingin eksplorasi data bebas","Menyampaikan rekomendasi ke pengambil keputusan yang waktunya terbatas","Monitoring operasional real-time","Menampilkan 20+ metrik sekaligus"], a:1, e:"Data story mengkurasi pesan agar keputusan cepat diambil." },
    { q:"Hubungan dashboard dan data story yang benar adalah…", o:["Bersaing, tidak bisa dipakai bersamaan","Melengkapi: anomali di dashboard didalami jadi data story","Dashboard hanya untuk direktur","Data story menggantikan kebutuhan data"], a:1, e:"Peran berbeda, saling melengkapi." },
    { q:"Karakteristik utama data story dibanding dashboard adalah…", o:["Interaktif dan real-time","Narasi linier terfokus pada satu pesan","Menampilkan semua metrik","Tidak memakai visual"], a:1, e:"Data story linier dan terkurasi." }
  ]},
{ id:6, icon:"🎯", title:"Data-Driven Decision", duration:"±9 menit", youtubeId:"y8i7HyjYduM",
  desc:"Mengambil keputusan berbasis data, bukan intuisi — plus jebakan yang harus dihindari.",
  sections:[
    { h:"1. Apa Itu DDD?", body:`<p>Keputusan dari <strong>analisis data</strong>, bukan intuisi atau HiPPO (<em>highest paid person's opinion</em>).</p>` },
    { h:"2. Tangga Kematangan", body:`<ol class="list-decimal pl-5 space-y-2"><li>Data-blind</li><li>Data-aware</li><li>Data-informed</li><li>Data-driven</li></ol>` },
    { h:"3. Proses", body:`<ol class="list-decimal pl-5 space-y-2"><li>Definisikan masalah.</li><li>Kumpulkan data.</li><li>Analisis → insight.</li><li>Putuskan & eksekusi.</li><li>Ukur hasil, iterasi.</li></ol>` },
    { h:"4. Jebakan", body:`<ul class="list-disc pl-5 space-y-2"><li>Korelasi ≠ kausalitas.</li><li>Confirmation bias.</li><li>Garbage in, garbage out.</li><li>Terpaku satu metrik.</li></ul>` }
  ],
  points:["Data mengalahkan 'pendapat terbayar tertinggi'.","Proses: definisi → data → analisis → keputusan → evaluasi.","Waspadai bias & data buruk."],
  quiz:[
    { q:"Data-driven decision berarti…", o:["Keputusan berbasis analisis data, bukan sekadar intuisi","Keputusan yang dibuat komputer","Keputusan tanpa rapat","Keputusan berdasarkan pendapat tertinggi"], a:0, e:"Data menjadi dasar utama." },
    { q:"'Korelasi tidak berarti…'", o:["Kausalitas","Informasi","Visualisasi","Prediksi"], a:0, e:"Bergerak bersama ≠ sebab-akibat." },
    { q:"Confirmation bias adalah…", o:["Mencari hanya data yang mendukung pendapat sendiri","Memvalidasi semua data dua kali","Menggunakan terlalu banyak data","Tidak percaya pada data"], a:0, e:"Bias yang membuat kita 'menemukan' apa yang ingin kita temukan." },
    { q:"Urutan proses pengambilan keputusan yang benar adalah…", o:["Analisis – putuskan – definisi – kumpulkan data","Definisi masalah – kumpulkan data – analisis – putuskan – ukur hasil","Kumpulkan data – definisi – putuskan – analisis","Putuskan – kumpulkan data – analisis – definisi"], a:1, e:"Mulai dari masalah, akhiri dengan pengukuran." }
  ]},
{ id:7, icon:"💰", title:"Business Value from Data", duration:"±8 menit", youtubeId:"CNIlZtYh9Nc",
  desc:"Bagaimana data menciptakan nilai: efisiensi, pendapatan, pengalaman, dan mitigasi risiko.",
  sections:[
    { h:"1. Empat Cara Data Menciptakan Nilai", body:`<ul class="list-disc pl-5 space-y-2"><li>Efisiensi operasional</li><li>Pengalaman pelanggan</li><li>Pendapatan baru</li><li>Mitigasi risiko</li></ul>` },
    { h:"2. Contoh Nyata", body:`<div class="callout callout-example"><strong>💡 Kasus ritel:</strong> 20% SKU menyumbang 80% profit → optimalkan stok → biaya gudang turun 15%.</div>` },
    { h:"3. Mengukur Nilai", body:`<p>Hubungkan ke metrik bisnis: revenue, cost, risk, speed, satisfaction.</p><div class="callout callout-note"><strong>📌 ROI:</strong> (Manfaat − Biaya) ÷ Biaya.</div>` }
  ],
  points:["Nilai: efisiensi, pengalaman, pendapatan, risiko.","Ukur dengan metrik bisnis.","ROI = (Manfaat − Biaya) ÷ Biaya."],
  quiz:[
    { q:"Yang BUKAN cara data menciptakan nilai bisnis adalah…", o:["Efisiensi operasional","Pengalaman pelanggan","Menambah dekorasi kantor","Mitigasi risiko"], a:2, e:"Nilai bisnis datang dari empat cara, bukan dekorasi." },
    { q:"Bank memakai data untuk mendeteksi transaksi palsu. Ini nilai…", o:["Mitigasi risiko","Efisiensi operasional","Pendapatan baru","Pengalaman pelanggan"], a:0, e:"Deteksi fraud = mitigasi risiko." },
    { q:"Untuk membuktikan nilai inisiatif data, kita harus…", o:["Mengaitkannya dengan metrik bisnis seperti revenue/cost/risk/speed","Membuat grafik paling rumit","Memakai tools paling mahal","Presentasi sepanjang mungkin"], a:0, e:"Nilai harus terukur dalam bahasa bisnis." },
    { q:"Rumus ROI sederhana adalah…", o:["(Manfaat − Biaya) ÷ Biaya","Manfaat + Biaya","Biaya ÷ Manfaat","Manfaat × Biaya"], a:0, e:"ROI mengukur keuntungan relatif terhadap biaya." }
  ]},
{ id:8, icon:"🗄️", title:"Business Data & Information Management", duration:"±10 menit", youtubeId:"Pj8PTztDyII",
  desc:"Kualitas data, tata kelola (governance), dan tempat penyimpanan data secara ringkas.",
  sections:[
    { h:"1. Mengapa Dikelola?", body:`<p>Garbage in, garbage out. Manajemen data membuat data mudah ditemukan, akurat, aman, siap pakai.</p>` },
    { h:"2. Enam Dimensi Kualitas", body:`<ul class="list-disc pl-5 space-y-2"><li>Accuracy</li><li>Completeness</li><li>Consistency</li><li>Timeliness</li><li>Validity</li><li>Uniqueness</li></ul>` },
    { h:"3. Data Governance", body:`<p>Owner, steward, hak akses, keamanan & privasi (UU PDP).</p>` },
    { h:"4. Penyimpanan", body:`<ul class="list-disc pl-5 space-y-2"><li>Database — transaksi.</li><li>Data warehouse — analisis.</li><li>Data lake — data mentah.</li></ul>` }
  ],
  points:["6 dimensi kualitas data.","Governance: owner, steward, akses, UU PDP.","Database vs warehouse vs lake."],
  quiz:[
    { q:"'Garbage in, garbage out' berarti…", o:["Kualitas data buruk menghasilkan keputusan buruk","Data harus dibuang berkala","Sampah juga bisa dianalisis","Komputer perlu dibersihkan"], a:0, e:"Keputusan tak lebih baik dari data dasarnya." },
    { q:"Data terbaru saat dibutuhkan memenuhi dimensi…", o:["Timeliness","Uniqueness","Validity","Consistency"], a:0, e:"Timeliness = tepat waktu." },
    { q:"'Pemilik' data dalam organisasi disebut…", o:["Data owner","Data scientist","Data lake","Data viewer"], a:0, e:"Data owner mengambil keputusan atas data." },
    { q:"Penyimpanan terintegrasi untuk analisis & pelaporan disebut…", o:["Data warehouse","Data lake","Spreadsheet","Email"], a:0, e:"Warehouse = data rapi untuk analitik." }
  ]},
{ id:9, icon:"🚀", title:"Getting Started to Data Project", duration:"±9 menit", youtubeId:"2X6WJQogrtI",
  desc:"Memulai proyek data dengan benar: dari masalah bisnis, alur kerja, hingga kolaborasi stakeholder.",
  sections:[
    { h:"1. Mulai dari Masalah", body:`<p>Bukan dari tools. Tujuan <strong>SMART</strong>.</p>` },
    { h:"2. Alur Proyek", body:`<ol class="list-decimal pl-5 space-y-2"><li>Define</li><li>Collect</li><li>Clean</li><li>Analyze</li><li>Communicate</li><li>Evaluate</li></ol><div class="callout callout-note"><strong>📌</strong> Terinspirasi framework <strong>CRISP-DM</strong>.</div>` },
    { h:"3. Stakeholder", body:`<p>Sepakati metrik sejak awal; bicara bahasa bisnis.</p>` },
    { h:"4. Penyebab Gagal", body:`<ul class="list-disc pl-5 space-y-2"><li>Tujuan tidak jelas.</li><li>Data kotor.</li><li>Mengabaikan konteks.</li><li>Hasil tidak ditindaklanjuti.</li></ul>` }
  ],
  points:["Mulai dari masalah & tujuan SMART.","Alur 6 tahap (CRISP-DM).","Libatkan stakeholder."],
  quiz:[
    { q:"Proyek data sebaiknya dimulai dari…", o:["Masalah bisnis yang jelas","Tools paling baru","Dataset terbesar yang ada","Keinginan memakai AI"], a:0, e:"Masalah jelas menentukan arah proyek." },
    { q:"Tahap paling banyak menyita waktu adalah…", o:["Membersihkan data","Membuat judul laporan","Memilih warna grafik","Presentasi"], a:0, e:"Cleaning bisa 60–80% waktu proyek." },
    { q:"Dalam SMART, huruf S berarti…", o:["Specific","Simple","Speedy","Statistical"], a:0, e:"Specific = spesifik dan jelas." },
    { q:"Penyebab umum kegagalan proyek data adalah…", o:["Tujuan tidak jelas dan mengabaikan konteks bisnis","Terlalu banyak rapat","Menggunakan SQL","Data terlalu bersih"], a:0, e:"Tanpa tujuan & konteks, analisis tidak berdampak." }
  ]},
{ id:10, icon:"🧭", title:"Preparing your Career in Data Roles", duration:"±10 menit", youtubeId:"JTIzfJQZbsw",
  desc:"Peta peran di dunia data, skill fondasi, portfolio, dan strategi menembus interview.",
  sections:[
    { h:"1. Peta Role", body:`<ul class="list-disc pl-5 space-y-2"><li>Data Analyst</li><li>Data Scientist</li><li>Data Engineer</li><li>BI Analyst/Developer</li><li>ML Engineer</li></ul>` },
    { h:"2. Skill Fondasi", body:`<ul class="list-disc pl-5 space-y-2"><li>Spreadsheet</li><li><strong>SQL</strong></li><li>Visualisasi</li><li>Statistika dasar</li><li>Komunikasi & bisnis</li><li>(Bonus) Python/R</li></ul>` },
    { h:"3. Portfolio", body:`<p>2–3 proyek end-to-end > sepuluh sertifikat. Tulis ceritanya: masalah → analisis → insight → rekomendasi.</p>` },
    { h:"4. Strategi Interview", body:`<ul class="list-disc pl-5 space-y-2"><li>Kuasai cerita proyek.</li><li>Latihan studi kasus.</li><li>Tunjukkan rasa ingin tahu.</li><li>Minta feedback.</li></ul>` }
  ],
  points:["Kenali role data.","Fondasi: spreadsheet, SQL, visualisasi, statistika, komunikasi.","Portfolio end-to-end = pembeda."],
  quiz:[
    { q:"Role yang membangun pipeline & infrastruktur data adalah…", o:["Data engineer","Data analyst","BI developer","UX designer"], a:0, e:"Data engineer menyiapkan 'jalan tol' data." },
    { q:"Bahasa wajib untuk mengambil data dari database adalah…", o:["SQL","HTML","CSS","PHP"], a:0, e:"SQL = bahasa standar database relasional." },
    { q:"Yang lebih berharga daripada banyak sertifikat adalah…", o:["2–3 proyek portfolio end-to-end","Profil LinkedIn yang panjang","Laptop mahal","Jumlah follower"], a:0, e:"Portfolio membuktikan kemampuan nyata." },
    { q:"Saat interview, hal terpenting tentang proyek portfolio adalah…", o:["Mampu menceritakan masalah, proses, dan hasil","Menghafal semua kode","Menyembunyikan kegagalan","Menampilkan hasil saja"], a:0, e:"Pewawancara menilai cara berpikir." }
  ]}
];

const HERO_IMG = "https://image.qwenlm.ai/public_source/8b73d3a4-793a-428f-9bee-7a4d2e5dc2cf/10163f8ed-2178-47ec-a905-d93b7189a0f6.png";
const PASS_SCORE = 70;
const STORAGE_KEY = "kelasBasicDataV1";

let progress = loadProgress();
let quizState = null;

function loadProgress(){
  try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) return JSON.parse(raw); } catch(e){}
  const init = {}; MODULES.forEach(m => init[m.id] = { lesson:false, best:null }); return init;
}
function saveProgress(){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }catch(e){} }
function resetProgress(){ if (confirm("Yakin ingin menghapus semua progres belajar?")) { try{localStorage.removeItem(STORAGE_KEY);}catch(e){} progress = loadProgress(); showDashboard(); } }
function isCompleted(id){ return progress[id].best !== null && progress[id].best >= PASS_SCORE; }
function modulePct(id){ return (progress[id].lesson?50:0) + (isCompleted(id)?50:0); }
function overallPct(){ return Math.round(MODULES.reduce((s,m)=>s+modulePct(m.id),0)/MODULES.length); }
function statusOf(id){ if (isCompleted(id)) return {label:"Selesai"}; if (progress[id].lesson||progress[id].best!==null) return {label:"Berlangsung"}; return {label:"Belum"}; }
function nextModule(){ return MODULES.find(m=>!isCompleted(m.id)); }

function renderSidebar(){
  document.getElementById("overallPct").textContent = overallPct()+"%";
  document.getElementById("overallBar").style.width = overallPct()+"%";
  document.getElementById("overallLabel").textContent = MODULES.filter(m=>isCompleted(m.id)).length+" dari "+MODULES.length+" modul selesai";
  document.getElementById("moduleNav").innerHTML = MODULES.map(m=>`
    <button onclick="openModule(${m.id})" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm hover:bg-slate-800 transition text-left">
      <span>${isCompleted(m.id)?"✅":(statusOf(m.id).label==="Berlangsung"?"🟡":"📄")}</span>
      <span class="flex-1 truncate">${m.id}. ${m.title}</span>
      <span class="text-[10px] font-bold text-slate-400">${modulePct(m.id)}%</span>
    </button>`).join("");
}
function setActiveNav(name){
  document.getElementById("navHome").classList.toggle("bg-slate-800", name==="home");
  document.getElementById("navLab").classList.toggle("bg-slate-800", name==="lab");
}
function switchView(name){
  ["dashboard","module","quiz","lab"].forEach(v=>document.getElementById("view-"+v).classList.toggle("hidden", v!==name));
  window.scrollTo({top:0, behavior:"smooth"});
}
function toggleSidebar(show){
  document.getElementById("sidebar").classList.toggle("-translate-x-full", !show);
  document.getElementById("overlay").classList.toggle("hidden", !show);
}
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg; t.style.opacity = 1; t.style.transform = "translate(-50%, -6px)";
  clearTimeout(t._h); t._h = setTimeout(()=>{ t.style.opacity = 0; t.style.transform = "translate(-50%, 0)"; }, 2400);
}

/* ---------- DASHBOARD ---------- */
function showDashboard(){
  toggleSidebar(false); renderSidebar(); setActiveNav("home");
  const done = MODULES.filter(m=>isCompleted(m.id)).length;
  const taken = MODULES.filter(m=>progress[m.id].best!==null);
  const avg = taken.length ? Math.round(taken.reduce((s,m)=>s+progress[m.id].best,0)/taken.length) : 0;
  const nxt = nextModule();
  document.getElementById("view-dashboard").innerHTML = `
  <div class="fade-up space-y-8">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-slate-900 text-white shadow-xl">
      <div class="relative z-10 p-8 sm:p-10 max-w-xl">
        <span class="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-bold tracking-widest mb-4">🎓 MEDIA PEMBELAJARAN INTERAKTIF</span>
        <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">Dalami <span class="text-amber-300">Basic Data</span> dari nol sampai paham.</h1>
        <p class="text-emerald-50/90 mb-6">10 modul interaktif + <strong>Data Lab</strong> ala Excel untuk praktik CRUD, rumus otomatis, dan visualisasi real-time. Progres tersimpan otomatis.</p>
        <div class="flex flex-wrap gap-3">
          ${nxt ? `<button onclick="openModule(${nxt.id})" class="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg transition pop">${done===0?"🚀 Mulai Belajar":"▶️ Lanjutkan"} — Modul ${nxt.id}</button>` : `<div class="bg-white/15 rounded-xl px-5 py-3 font-bold">🏆 Semua modul selesai!</div>`}
          <button onclick="showLab()" class="bg-white/10 hover:bg-white/20 border border-white/30 font-bold px-6 py-3 rounded-xl transition">🧪 Buka Data Lab</button>
        </div>
      </div>
      <img src="${HERO_IMG}" alt="Ilustrasi belajar data" class="hidden md:block absolute right-0 bottom-0 h-full w-auto object-contain opacity-90 pointer-events-none select-none" style="max-width:46%">
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-200"><div class="text-3xl mb-1">✅</div><div class="text-2xl font-extrabold">${done}<span class="text-slate-400 text-base font-semibold">/${MODULES.length}</span></div><div class="text-sm text-slate-500 font-medium">Modul Selesai</div></div>
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-200"><div class="text-3xl mb-1">📝</div><div class="text-2xl font-extrabold">${taken.length?avg+"%":"—"}</div><div class="text-sm text-slate-500 font-medium">Rata-rata Skor Kuis</div></div>
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-200"><div class="text-3xl mb-1">📈</div><div class="text-2xl font-extrabold">${overallPct()}%</div><div class="text-sm text-slate-500 font-medium">Progres Keseluruhan</div></div>
    </div>

    <div>
      <h2 class="text-xl font-extrabold mb-4">🗺️ Peta Belajar — 10 Modul Basic Data</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${MODULES.map(m=>{
          const st = statusOf(m.id);
          const badge = st.label==="Selesai" ? '<span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">SELESAI</span>' : st.label==="Berlangsung" ? '<span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">BERLANGSUNG</span>' : '<span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">BELUM DIMULAI</span>';
          return `<button onclick="openModule(${m.id})" class="text-left bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-xl font-extrabold shrink-0">${m.id}</div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2 mb-1"><h3 class="font-bold truncate">${m.icon} ${m.title}</h3>${badge}</div>
                <p class="text-sm text-slate-500 mb-3">${m.desc}</p>
                <div class="flex items-center gap-3"><div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" style="width:${modulePct(m.id)}%"></div></div><span class="text-xs font-bold text-slate-500">${modulePct(m.id)}%</span></div>
              </div>
            </div>
          </button>`;}).join("")}
      </div>
    </div>
  </div>`;
  switchView("dashboard");
}

/* ---------- MODULE & QUIZ ---------- */
function openModule(id){
  toggleSidebar(false); renderSidebar(); setActiveNav("");
  const m = MODULES.find(x=>x.id===id); const p = progress[id];
  document.getElementById("view-module").innerHTML = `
  <div class="fade-up space-y-6 max-w-4xl mx-auto">
    <button onclick="showDashboard()" class="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition">← Kembali ke Beranda</button>
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
      <div class="flex items-center gap-2 text-xs font-bold text-emerald-600 tracking-widest mb-2">MODUL ${m.id} • BASIC DATA</div>
      <h1 class="text-2xl sm:text-3xl font-extrabold mb-2">${m.icon} ${m.title}</h1>
      <p class="text-slate-500 mb-4">${m.desc}</p>
      <div class="flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
        <span class="bg-slate-100 px-3 py-1.5 rounded-full">⏱️ ${m.duration}</span>
        <span class="bg-slate-100 px-3 py-1.5 rounded-full">📚 ${m.sections.length} bagian</span>
        <span class="bg-slate-100 px-3 py-1.5 rounded-full">📝 ${m.quiz.length} soal</span>
        <span class="bg-slate-100 px-3 py-1.5 rounded-full">🎯 KKM ${PASS_SCORE}%</span>
      </div>
      ${m.youtubeId ? `<div class="mt-6"><div class="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200"><iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/${m.youtubeId}" title="Video ${m.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div><div class="mt-3 text-center"><a href="https://youtu.be/${m.youtubeId}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-emerald-600 hover:text-emerald-700 underline">📺 Tonton di YouTube (tab baru)</a></div></div>` : ''}
    </div>
    ${m.sections.map(s=>`<section class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200"><h2 class="text-lg sm:text-xl font-extrabold mb-3">${s.h}</h2><div class="text-slate-600 leading-relaxed space-y-3">${s.body}</div></section>`).join("")}
    <section class="bg-amber-50 rounded-3xl p-6 sm:p-8 border-2 border-amber-200"><h2 class="text-lg font-extrabold text-amber-800 mb-3">🔑 Poin Penting</h2><ul class="space-y-2">${m.points.map(pt=>`<li class="flex gap-2 text-amber-900"><span>✔</span><span>${pt}</span></li>`).join("")}</ul></section>
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
      <div><div class="font-bold">Status modul ini</div><div class="text-sm text-slate-500">Materi: ${p.lesson?"✅ sudah dibaca":"⬜ belum dibaca"} • Kuis: ${p.best===null?"⬜ belum":"🏅 "+p.best+"%"}</div></div>
      <div class="flex gap-3 w-full sm:w-auto">
        ${!p.lesson?`<button onclick="markLesson(${id})" class="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl transition">✅ Selesai Membaca</button>`:""}
        <button onclick="startQuiz(${id})" class="flex-1 sm:flex-none bg-slate-900 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl transition">📝 ${p.best===null?"Kerjakan Kuis":"Perbaiki Skor"}</button>
      </div>
    </div>
  </div>`;
  switchView("module");
}
function markLesson(id){ progress[id].lesson = true; saveProgress(); startQuiz(id); }

function startQuiz(id){ toggleSidebar(false); quizState = { moduleId:id, idx:0, score:0, answered:false }; renderQuizQuestion(); switchView("quiz"); }
function renderQuizQuestion(){
  const m = MODULES.find(x=>x.id===quizState.moduleId);
  const q = m.quiz[quizState.idx]; const total = m.quiz.length;
  document.getElementById("view-quiz").innerHTML = `
  <div class="fade-up max-w-2xl mx-auto space-y-5">
    <div class="flex items-center justify-between">
      <button onclick="openModule(${m.id})" class="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition">← Keluar</button>
      <span class="text-sm font-bold text-slate-500">Soal ${quizState.idx+1} / ${total}</span>
    </div>
    <div class="h-2.5 bg-slate-200 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-500" style="width:${Math.round(quizState.idx/total*100)}%"></div></div>
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 pop">
      <div class="text-xs font-bold text-emerald-600 tracking-widest mb-2">MODUL ${m.id} • ${m.title.toUpperCase()}</div>
      <h2 class="text-lg font-extrabold mb-6">${q.q}</h2>
      <div class="space-y-3">
        ${q.o.map((opt,i)=>`<button onclick="answer(${i})" id="opt-${i}" class="opt-btn w-full text-left p-4 rounded-2xl border-2 border-slate-200 bg-slate-50 hover:border-emerald-400 hover:bg-emerald-50 font-medium flex items-center gap-3"><span class="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sm font-extrabold text-slate-500 shrink-0">${"ABCD"[i]}</span><span>${opt}</span></button>`).join("")}
      </div>
      <div id="feedback" class="hidden mt-5"></div>
      <div id="nextWrap" class="hidden mt-5"><button onclick="nextQuestion()" class="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-3.5 rounded-xl transition">${quizState.idx+1<total?"Soal Berikutnya →":"Lihat Hasil 🏁"}</button></div>
    </div>
  </div>`;
}
function answer(i){
  if (quizState.answered) return; quizState.answered = true;
  const m = MODULES.find(x=>x.id===quizState.moduleId); const q = m.quiz[quizState.idx];
  const correct = i === q.a; if (correct) quizState.score++;
  q.o.forEach((_,idx)=>{
    const btn = document.getElementById("opt-"+idx); btn.disabled = true;
    btn.classList.remove("hover:border-emerald-400","hover:bg-emerald-50");
    if (idx===q.a) btn.className = btn.className.replace("border-slate-200 bg-slate-50","") + " border-emerald-500 bg-emerald-50 text-emerald-900";
    else if (idx===i) btn.className = btn.className.replace("border-slate-200 bg-slate-50","") + " border-rose-400 bg-rose-50 text-rose-900";
    else btn.classList.add("opacity-50");
  });
  const fb = document.getElementById("feedback"); fb.classList.remove("hidden");
  fb.innerHTML = `<div class="callout ${correct?"callout-example":"callout-note"}" style="margin:0"><div class="font-extrabold ${correct?"text-emerald-700":"text-rose-600"} mb-1">${correct?"🎉 Benar!":"❌ Belum tepat."}</div><div class="text-sm text-slate-700"><strong>Pembahasan:</strong> ${q.e}</div></div>`;
  document.getElementById("nextWrap").classList.remove("hidden");
}
function nextQuestion(){
  const m = MODULES.find(x=>x.id===quizState.moduleId);
  quizState.idx++; quizState.answered = false;
  if (quizState.idx < m.quiz.length) renderQuizQuestion(); else finishQuiz();
}
function finishQuiz(){
  const m = MODULES.find(x=>x.id===quizState.moduleId);
  const score = Math.round(quizState.score/m.quiz.length*100);
  const prev = progress[m.id].best;
  progress[m.id].best = prev===null ? score : Math.max(prev, score);
  saveProgress(); renderSidebar();
  const pass = score >= PASS_SCORE; const nxt = MODULES.find(x=>x.id===m.id+1);
  let msg, emo;
  if (score===100){msg="Sempurna! Kamu menguasai modul ini sepenuhnya.";emo="🏆";}
  else if (pass){msg="Hebat! Kamu lulus modul ini.";emo="🎉";}
  else if (score>=40){msg="Sedikit lagi! Baca ulang materi lalu coba lagi ya.";emo="💪";}
  else {msg="Jangan menyerah — pelajari materinya pelan-pelan, lalu kuis lagi.";emo="📚";}
  document.getElementById("view-quiz").innerHTML = `
  <div class="fade-up max-w-xl mx-auto"><div class="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 text-center pop">
    <div class="text-6xl mb-4">${emo}</div>
    <div class="text-sm font-bold tracking-widest text-slate-400 mb-1">HASIL KUIS • MODUL ${m.id}</div>
    <h2 class="text-2xl font-extrabold mb-2">${m.title}</h2>
    <div class="text-5xl font-extrabold ${pass?"text-emerald-600":"text-rose-500"} my-4">${score}%</div>
    <p class="text-slate-500 mb-1">Benar ${quizState.score} dari ${m.quiz.length} soal.</p>
    <p class="font-semibold mb-6">${msg}</p>
    ${pass?`<div class="bg-emerald-50 border-2 border-emerald-200 text-emerald-700 font-bold rounded-2xl px-4 py-3 mb-6">✅ Modul ditandai SELESAI</div>`:`<div class="bg-slate-100 text-slate-600 font-semibold rounded-2xl px-4 py-3 mb-6">KKM ${PASS_SCORE}% — skor terbaikmu: ${progress[m.id].best}%</div>`}
    <div class="grid gap-3">
      ${!pass?`<button onclick="startQuiz(${m.id})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition">🔁 Ulangi Kuis</button>`:""}
      ${pass&&nxt?`<button onclick="openModule(${nxt.id})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition">Lanjut: Modul ${nxt.id} →</button>`:""}
      <button onclick="openModule(${m.id})" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition">📖 Baca Lagi Materinya</button>
      <button onclick="showDashboard()" class="text-slate-500 hover:text-slate-700 font-semibold py-2 transition">🏠 Ke Beranda</button>
    </div>
  </div></div>`;
}

/* =====================================================================
   BAGIAN 2 — DATA LAB INTERAKTIF (Excel-like CRUD + rumus + chart)
   ---------------------------------------------------------------------
   SKEMA DATA (disimpan ke localStorage):
   [ { id, kategori, produk, harga, jumlah } ]
   "total" TIDAK disimpan — dihitung runtime: total = harga * jumlah.
===================================================================== */
const LAB_KEY = "dataLabV1";
const FIELDS = ["kategori","produk","harga","jumlah"];   // kolom yg bisa diedit (A..D)
const COL_LETTERS = ["A","B","C","D","E"];               // referensi kolom ala Excel
const PALETTE = ["#10b981","#f59e0b","#6366f1","#ef4444","#14b8a6","#f472b6","#84cc16","#0ea5e9"];

let labData = loadLab();          // array of object baris
let labSelected = new Set();      // id baris yg dicentang (untuk hapus)
let chartBar = null, chartDonut = null;
let saveTimer = null, chartTimer = null;

function loadLab(){
  try {
    const raw = localStorage.getItem(LAB_KEY);
    if (raw) { const arr = JSON.parse(raw); if (Array.isArray(arr)) return arr; }
  } catch(e){}
  return [];
}
function saveLabNow(showToast){
  try { localStorage.setItem(LAB_KEY, JSON.stringify(labData)); } catch(e){}
  const now = new Date().toLocaleTimeString("id-ID");
  document.getElementById("saveState").textContent = "✓ Tersimpan " + now;
  if (showToast) toast("💾 Data lab tersimpan di localStorage!");
}
function scheduleSave(){ // autosave debounce 600ms
  document.getElementById("saveState").textContent = "● mengubah… (autosave)";
  clearTimeout(saveTimer); saveTimer = setTimeout(()=>saveLabNow(false), 600);
}

/* --- Util angka: menangani sel kosong / input bukan angka / format id-ID --- */
function toNumber(raw){
  if (raw === null || raw === undefined) return { v:0, ok:false };
  let s = String(raw).trim().replace(/\s/g,"");
  if (!s) return { v:0, ok:false };
  let t = s;
  if (t.includes(",")) t = t.replace(/\./g,"").replace(",","."); // 1.250.000,50 -> 1250000.50
  t = t.replace(/[^0-9.\-]/g,"");                                 // buang huruf/simbol Rp
  if (!t || isNaN(Number(t))) return { v:0, ok:false };           // edge case: bukan angka -> 0
  return { v:Number(t), ok:true };
}
function rowTotal(row){ return toNumber(row.harga).v * toNumber(row.jumlah).v; } // rumus baris: C * D
function fmt(n){ return n.toLocaleString("id-ID", { maximumFractionDigits: 2 }); }
function esc(s){ return String(s ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

/* ---------- Render grid ---------- */
function renderLab(){
  const body = document.getElementById("labBody");
  if (!labData.length) {
    body.innerHTML = `<tr><td colspan="7" class="p-10 text-center text-slate-400 text-sm">
      Grid masih kosong 🗂️<br>
      <button onclick="loadSample()" class="mt-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-4 py-2 rounded-xl transition text-xs">📦 Muat Data Contoh</button>
      <button onclick="addRow()" class="mt-3 ml-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl transition text-xs">➕ Tambah Baris</button>
    </td></tr>`;
  } else {
    body.innerHTML = labData.map((row,i)=>{
      const invalidH = row.harga !== "" && !toNumber(row.harga).ok;
      const invalidJ = row.jumlah !== "" && !toNumber(row.jumlah).ok;
      return `<tr>
        <td class="rowhead"><input type="checkbox" data-id="${row.id}" class="rowCheck accent-emerald-600 w-4 h-4 cursor-pointer" ${labSelected.has(row.id)?"checked":""}></td>
        <td class="rowhead">${i+1}</td>
        <td class="cell" data-r="${i}" data-c="0" tabindex="0">${esc(row.kategori)}</td>
        <td class="cell" data-r="${i}" data-c="1" tabindex="0">${esc(row.produk)}</td>
        <td class="cell num ${invalidH?"cell-invalid":""}" data-r="${i}" data-c="2" tabindex="0">${esc(row.harga)}</td>
        <td class="cell num ${invalidJ?"cell-invalid":""}" data-r="${i}" data-c="3" tabindex="0">${esc(row.jumlah)}</td>
        <td class="cell total" data-r="${i}" data-c="4" tabindex="0" title="=C${i+2}*D${i+2}">${fmt(rowTotal(row))}</td>
      </tr>`;
    }).join("");
  }
  updateDeleteBtn();
  recomputeLab(true);
}

/* ---------- Hitung ulang: total per baris, statistik agregat, status bar, chart ---------- */
function recomputeLab(instant){
  // 1) perbarui sel Total (kolom E) tanpa re-render penuh agar fokus tidak hilang
  labData.forEach((row,i)=>{
    const td = document.querySelector(`#labBody td.total[data-r="${i}"]`);
    if (td) td.textContent = fmt(rowTotal(row));
  });
  // 2) agregat: SUM / AVERAGE / MAX / MIN / COUNT / SUM(jumlah)
  const totals = labData.map(rowTotal);
  const n = totals.length;
  const sum = totals.reduce((a,b)=>a+b,0);
  const qty = labData.reduce((a,r)=>a+toNumber(r.jumlah).v,0);
  document.getElementById("statSum").textContent = fmt(sum);
  document.getElementById("statAvg").textContent = n ? fmt(sum/n) : "0";
  document.getElementById("statMax").textContent = n ? fmt(Math.max(...totals)) : "0";
  document.getElementById("statMin").textContent = n ? fmt(Math.min(...totals)) : "0";
  document.getElementById("statCount").textContent = n;
  document.getElementById("statQty").textContent = fmt(qty);
  // 3) status bar rumus ala Excel
  const range = n ? `E2:E${n+1}` : "E2:E1";
  document.getElementById("statusBar").textContent =
    `=SUM(${range}) → ${fmt(sum)}   |   =AVERAGE(${range}) → ${n?fmt(sum/n):0}   |   =COUNT(${range}) → ${n}   |   =SUM(D2:D${n+1}) → ${fmt(qty)}`;
  // 4) chart real-time (debounce agar hemat saat mengetik cepat)
  clearTimeout(chartTimer);
  if (instant) updateCharts(); else chartTimer = setTimeout(updateCharts, 250);
}

/* ---------- Agregasi per kategori untuk chart ---------- */
function aggregate(){
  const map = new Map();
  labData.forEach(r=>{
    const k = (r.kategori || "").trim() || "(tanpa kategori)"; // edge case: kategori kosong
    const cur = map.get(k) || { total:0, qty:0 };
    cur.total += rowTotal(r); cur.qty += toNumber(r.jumlah).v;
    map.set(k, cur);
  });
  return map;
}
function ensureCharts(){
  if (chartBar || typeof Chart === "undefined") return;
  Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";
  chartBar = new Chart(document.getElementById("chartBar"), {
    type: "bar",
    data: { labels: [], datasets: [{ label: "Total (Rp)", data: [], backgroundColor: PALETTE, borderRadius: 8 }] },
    options: { responsive:true, maintainAspectRatio:false, plugins:{ legend:{ display:false } },
      scales:{ y:{ ticks:{ callback:v=>v.toLocaleString("id-ID") } } } }
  });
  chartDonut = new Chart(document.getElementById("chartDonut"), {
    type: "doughnut",
    data: { labels: [], datasets: [{ data: [], backgroundColor: PALETTE, borderWidth: 2, borderColor: "#fff" }] },
    options: { responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:"bottom", labels:{ boxWidth:10, font:{ size:10 } } } } }
  });
}
function updateCharts(){
  if (!chartBar) return;
  const agg = aggregate();
  const labels = [...agg.keys()];
  chartBar.data.labels = labels;
  chartBar.data.datasets[0].data = labels.map(k=>agg.get(k).total);
  chartBar.update();
  chartDonut.data.labels = labels;
  chartDonut.data.datasets[0].data = labels.map(k=>agg.get(k).qty);
  chartDonut.update();
}

/* ---------- CRUD ---------- */
function nextId(){ return labData.reduce((m,r)=>Math.max(m,r.id),0)+1; }
function addRow(){
  labData.push({ id: nextId(), kategori:"", produk:"", harga:"", jumlah:"" });
  renderLab(); scheduleSave();
  const td = document.querySelector(`#labBody td.cell[data-r="${labData.length-1}"][data-c="0"]`);
  if (td) td.focus(); // langsung fokus ke sel pertama baris baru
}
function deleteSelected(){
  if (!labSelected.size) { toast("Centang baris yang ingin dihapus dulu ya 🙂"); return; }
  labData = labData.filter(r=>!labSelected.has(r.id));
  const n = labSelected.size; labSelected.clear();
  renderLab(); scheduleSave();
  toast(` ${n} baris dihapus.`);
}
function loadSample(){
  const S = [
    ["Makanan","Nasi Goreng Spesial",15000,3], ["Minuman","Es Teh Manis",5000,6],
    ["Makanan","Ayam Bakar",18000,2],          ["Snack","Kentang Goreng",12000,4],
    ["Minuman","Kopi Susu Gula Aren",12000,5], ["Snack","Pisang Goreng Keju",10000,3],
    ["Makanan","Mie Ayam Bakso",14000,2],      ["Minuman","Jus Alpukat",15000,2]
  ];
  labData = S.map((r,i)=>({ id:i+1, kategori:r[0], produk:r[1], harga:String(r[2]), jumlah:String(r[3]) }));
  labSelected.clear();
  renderLab(); saveLabNow(false);
  toast("📦 Data contoh dimuat — silakan utak-atik!");
}
function resetLab(){
  if (!confirm("Kosongkan SEMUA data di lab?")) return;
  labData = []; labSelected.clear();
  renderLab(); saveLabNow(false);
  toast("♻️ Grid dikosongkan.");
}
function updateDeleteBtn(){
  const b = document.getElementById("btnDelete");
  b.disabled = labSelected.size === 0;
  b.textContent = `🗑 Hapus Terpilih (${labSelected.size})`;
}

/* ---------- Interaksi grid: edit in-place + navigasi keyboard ala Excel ---------- */
function placeCaretEnd(el){
  const range = document.createRange(); range.selectNodeContents(el); range.collapse(false);
  const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
}
function startEdit(td, initialChar){
  const c = +td.dataset.c;
  if (c === 4) { toast("🤖 Kolom Total dihitung otomatis dengan rumus =C×D"); return; }
  td.contentEditable = "true"; td.focus();
  if (initialChar) { td.textContent = initialChar; placeCaretEnd(td); } // ketik langsung = timpa isi (seperti Excel)
}
function commitCell(td){
  if (!td.isContentEditable) return;
  td.contentEditable = "false";
  const r = +td.dataset.r, c = +td.dataset.c;
  const raw = td.textContent.replace(/\n/g," ").trim();
  td.textContent = raw;
  const row = labData[r]; if (!row) return;
  row[FIELDS[c]] = raw; // simpan sebagai string mentah (fidelitas edit)
  if (c === 2 || c === 3) td.classList.toggle("cell-invalid", raw !== "" && !toNumber(raw).ok); // tandai input bukan angka
  recomputeLab(false); scheduleSave();
}
function moveFocus(r,c,allowAdd){
  c = Math.max(0, Math.min(4, c));
  if (r < 0) return;
  if (r >= labData.length) { if (allowAdd) addRow(); else return; }
  const td = document.querySelector(`#labBody td.cell[data-r="${r}"][data-c="${c}"]`);
  if (td) td.focus();
}
function updateFormulaBar(td){
  const r = +td.dataset.r, c = +td.dataset.c;
  const ref = COL_LETTERS[c] + (r + 2); // baris 1 = header, data mulai baris 2
  document.getElementById("nbRef").textContent = ref;
  document.getElementById("nbFormula").textContent =
    c === 4 ? `=C${r+2}*D${r+2}  →  ${fmt(rowTotal(labData[r]))}` : (labData[r] ? (labData[r][FIELDS[c]] || "(kosong)") : "");
}

const labBody = document.getElementById("labBody");

// Navigasi keyboard & mode edit
labBody.addEventListener("keydown", e => {
  const td = e.target.closest("td.cell"); if (!td) return;
  const r = +td.dataset.r, c = +td.dataset.c;
  if (td.isContentEditable) { // MODE EDIT
    if (e.key === "Enter")  { e.preventDefault(); commitCell(td); moveFocus(r+1, c, true); }
    else if (e.key === "Escape") { e.preventDefault(); commitCell(td); td.focus(); }
    else if (e.key === "Tab") { e.preventDefault(); commitCell(td); moveFocus(r, c+1); }
    return;
  }
  // MODE NAVIGASI
  switch (e.key) {
    case "ArrowUp":    e.preventDefault(); moveFocus(r-1, c); break;
    case "ArrowDown":  e.preventDefault(); moveFocus(r+1, c); break;
    case "ArrowLeft":  e.preventDefault(); moveFocus(r, c-1); break;
    case "ArrowRight": e.preventDefault(); moveFocus(r, c+1); break;
    case "Tab":        e.preventDefault(); moveFocus(r, c+1); break;
    case "Enter":      e.preventDefault(); if (c === 4) updateFormulaBar(td); else moveFocus(r+1, c, true); break;
    case "F2":         e.preventDefault(); startEdit(td); break;
    case "Delete": case "Backspace": // bersihkan sel (edge case aman: hanya mode navigasi)
      e.preventDefault();
      if (c < 4 && labData[r]) { labData[r][FIELDS[c]] = ""; td.textContent = ""; td.classList.remove("cell-invalid"); recomputeLab(false); scheduleSave(); }
      break;
    default:
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); startEdit(td, e.key); }
  }
});
// Commit saat fokus keluar dari sel yang sedang diedit
labBody.addEventListener("focusout", e => {
  const td = e.target.closest("td.cell"); if (td && td.isContentEditable) commitCell(td);
});
// Formula bar mengikuti sel terpilih
labBody.addEventListener("focusin", e => {
  const td = e.target.closest("td.cell"); if (td) updateFormulaBar(td);
});
// Centang pilih baris (delegasi)
labBody.addEventListener("change", e => {
  if (!e.target.classList.contains("rowCheck")) return;
  const id = +e.target.dataset.id;
  e.target.checked ? labSelected.add(id) : labSelected.delete(id);
  updateDeleteBtn();
});
// Pilih semua di header
document.getElementById("checkAll").addEventListener("change", e => {
  labSelected.clear();
  if (e.target.checked) labData.forEach(r=>labSelected.add(r.id));
  renderLab();
});

/* ---------- Masuk ke Data Lab ---------- */
function showLab(){
  toggleSidebar(false); renderSidebar(); setActiveNav("lab");
  renderLab();
  switchView("lab");
  ensureCharts(); updateCharts();
}

/* ---------- INIT ---------- */
showDashboard();
