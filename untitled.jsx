import { useState } from 'react';

export default function App() {
  const [expanded, setExpanded] = useState({});

  const toggleSection = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 text-gray-800">
      <header className="text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-3">
          <span className="inline-block p-2 rounded-full bg-green-200 text-green-700">🧬</span>
          Bioteknologi Untuk Pemula
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Penjelasan sederhana, contoh nyata, dan analogi untuk siswa SMA.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-20 space-y-8">
        {/* Apa Itu Bioteknologi */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          <button
            onClick={() => toggleSection('apa')}
            className="w-full px-6 py-4 flex justify-between items-center bg-green-100 text-green-800 font-semibold"
          >
            🔍 Apa Itu Bioteknologi?
            <span>{expanded['apa'] ? '▼' : '▶'}</span>
          </button>
          {expanded['apa'] && (
            <div className="px-6 py-4 space-y-4 text-sm text-gray-700">
              <p>Bayangkan kamu sedang membuat roti atau yoghurt di rumah. Saat itu, kamu tidak sadar bahwa kamu sudah melakukan <strong>bioteknologi</strong>!</p>
              <p>➡️ Jadi, <strong>bioteknologi</strong> itu ilmu yang memanfaatkan makhluk hidup kecil seperti bakteri, jamur, atau sel tumbuhan untuk menghasilkan sesuatu yang berguna bagi manusia.</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Membuat tempe → pakai jamur <em>Rhizopus</em></li>
                <li>Membuat yoghurt → pakai bakteri <em>Lactobacillus</em></li>
                <li>Menghasilkan obat insulin → pakai bakteri <em>E. coli</em> yang dimodifikasi</li>
              </ul>
              <p className="italic mt-2">Jadi, <strong>bioteknologi = teknologi + makhluk hidup</strong>.</p>
            </div>
          )}
        </section>

        {/* Jenis Bioteknologi */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          <button
            onClick={() => toggleSection('jenis')}
            className="w-full px-6 py-4 flex justify-between items-center bg-green-100 text-green-800 font-semibold"
          >
            🧪 Dua Jenis Bioteknologi
            <span>{expanded['jenis'] ? '▼' : '▶'}</span>
          </button>
          {expanded['jenis'] && (
            <div className="px-6 py-4 space-y-6 text-sm text-gray-700">
              <div>
                <h3 className="font-bold text-green-600">🛠️ Bioteknologi Konvensional (Tradisional)</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Menggunakan mikroorganisme secara alami tanpa mengubah genetiknya</li>
                  <li>Contoh: Tempe, Tapai, Yoghurt, Roti</li>
                  <li><strong>Kelebihan:</strong> Sederhana, murah, turun-temurun</li>
                  <li><strong>Kekurangan:</strong> Hasil bisa berbeda-beda</li>
                </ul>
                <p className="mt-2 italic">💡 Analogi: Seperti bikin kue dengan resep nenek. Gampang, tapi hasilnya kadang manis banget, kadang kurang lembut.</p>
              </div>
              <div>
                <h3 className="font-bold text-green-600">🚀 Bioteknologi Modern</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Menggunakan teknologi tinggi, termasuk rekayasa DNA</li>
                  <li>Contoh: Tanaman transgenik, Insulin dari bakteri, Kloning domba Dolly, Vaksin corona</li>
                  <li><strong>Kelebihan:</strong> Presisi, efektif, inovatif</li>
                  <li><strong>Kekurangan:</strong> Biaya mahal, butuh lab canggih</li>
                </ul>
                <p className="mt-2 italic">💡 Analogi: Seperti bikin kue pakai robot. Lebih presisi, tapi butuh uang banyak dan ahli.</p>
              </div>
            </div>
          )}
        </section>

        {/* Mikroorganisme */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          <button
            onClick={() => toggleSection('mikroba')}
            className="w-full px-6 py-4 flex justify-between items-center bg-green-100 text-green-800 font-semibold"
          >
            🦠 Kenapa Mikroorganisme Digunakan?
            <span>{expanded['mikroba'] ? '▼' : '▶'}</span>
          </button>
          {expanded['mikroba'] && (
            <div className="px-6 py-4 space-y-2 text-sm text-gray-700">
              <p>✓ Cepat berkembang biak</p>
              <p>✓ Mudah dikendalikan</p>
              <p>✓ Genetikanya bisa diubah</p>
              <p>✓ Tidak ribet (cukup tempat kecil & makanan sederhana)</p>
              <p className="italic mt-2">💡 Contoh: Bakteri <em>E. coli</em> bisa dibuat menghasilkan insulin untuk penderita diabetes!</p>
            </div>
          )}
        </section>

        {/* Tabel Bidang Bioteknologi */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          <button
            onClick={() => toggleSection('tabel')}
            className="w-full px-6 py-4 flex justify-between items-center bg-green-100 text-green-800 font-semibold"
          >
            📊 Contoh Bioteknologi di Kehidupan Sehari-hari
            <span>{expanded['tabel'] ? '▼' : '▶'}</span>
          </button>
          {expanded['tabel'] && (
            <div className="px-6 py-4 text-sm">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border px-4 py-2 text-left">Bidang</th>
                    <th className="border px-4 py-2 text-left">Contoh</th>
                    <th className="border px-4 py-2 text-left">Penjelasan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Pangan</td>
                    <td className="border px-4 py-2">Tempe, tapai, yoghurt</td>
                    <td className="border px-4 py-2">Dibuat dengan bantuan mikroba melalui fermentasi</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Obat</td>
                    <td className="border px-4 py-2">Insulin, vaksin</td>
                    <td className="border px-4 py-2">Dibuat oleh bakteri rekombinan atau virus dilemahkan</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Pertanian</td>
                    <td className="border px-4 py-2">Tanaman transgenik (*Bt corn*)</td>
                    <td className="border px-4 py-2">Punya gen racun hama alami</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Lingkungan</td>
                    <td className="border px-4 py-2">Bioremediasi</td>
                    <td className="border px-4 py-2">Bakteri mengurai limbah minyak</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Energi</td>
                    <td className="border px-4 py-2">Biogas, bioetanol</td>
                    <td className="border px-4 py-2">Dihasilkan dari limbah organik oleh mikroba</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Rekayasa Genetika */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          <button
            onClick={() => toggleSection('rekayasa')}
            className="w-full px-6 py-4 flex justify-between items-center bg-green-100 text-green-800 font-semibold"
          >
            🧬 Rekayasa Genetika
            <span>{expanded['rekayasa'] ? '▼' : '▶'}</span>
          </button>
          {expanded['rekayasa'] && (
            <div className="px-6 py-4 space-y-3 text-sm text-gray-700">
              <p>Ini kayak edit foto. Kalau di dunia digital, kita bisa crop, ubah warna, tambah teks. Di dunia biologi, kita bisa potong-masukkan gen tertentu ke dalam DNA makhluk hidup.</p>
              <ol className="list-decimal ml-5 space-y-1">
                <li>Ambil gen target (misal vitamin A)</li>
                <li>Potong dengan enzim restriksi</li>
                <li>Masukkan ke plasmid bakteri/virus</li>
                <li>Transfer ke sel target</li>
                <li>Sel target punya kemampuan baru!</li>
              </ol>
              <p className="italic">💡 Contoh: Beras Emas – punya gen kuning dari jagung dan bakteri, sehingga kaya provitamin A.</p>
            </div>
          )}
        </section>

        {/* Kultur Jaringan */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          <button
            onClick={() => toggleSection('kultur')}
            className="w-full px-6 py-4 flex justify-between items-center bg-green-100 text-green-800 font-semibold"
          >
            🌿 Kultur Jaringan
            <span>{expanded['kultur'] ? '▼' : '▶'}</span>
          </button>
          {expanded['kultur'] && (
            <div className="px-6 py-4 space-y-3 text-sm text-gray-700">
              <p>Bikin banyak tanaman hanya dari satu potong daun atau batang.</p>
              <ol className="list-decimal ml-5 space-y-1">
                <li>Ambil eksplan (potongan tanaman)</li>
                <li>Tumbuh di media nutrisi → kalus</li>
                <li>Kalus → plantlet → tanaman baru</li>
              </ol>
              <p className="italic">✅ Keuntungan: Seragam, cepat, cocok untuk tanaman langka.</p>
            </div>
          )}
        </section>

        {/* Kloning */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          <button
            onClick={() => toggleSection('kloning')}
            className="w-full px-6 py-4 flex justify-between items-center bg-green-100 text-green-800 font-semibold"
          >
            🐑 Kloning
            <span>{expanded['kloning'] ? '▼' : '▶'}</span>
          </button>
          {expanded['kloning'] && (
            <div className="px-6 py-4 space-y-3 text-sm text-gray-700">
              <p>Scan dokumen, lalu cetak lagi. Hasilnya sama persis. Itu mirip dengan kloning. Hanya saja yang discan adalah DNA.</p>
              <p className="italic">⚠️ Risiko: Klon sering punya masalah genetik, pertumbuhan tidak normal, atau umur pendek.</p>
            </div>
          )}
        </section>

        {/* Dampak Positif & Negatif */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          <button
            onClick={() => toggleSection('dampak')}
            className="w-full px-6 py-4 flex justify-between items-center bg-red-100 text-red-800 font-semibold"
          >
            ⚖️ Dampak Positif & Negatif
            <span>{expanded['dampak'] ? '▼' : '▶'}</span>
          </button>
          {expanded['dampak'] && (
            <div className="px-6 py-4 text-sm">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-red-50">
                    <th className="border px-4 py-2 text-left">Positif</th>
                    <th className="border px-4 py-2 text-left">Negatif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-red-50">
                    <td className="border px-4 py-2">Obat baru dan murah</td>
                    <td className="border px-4 py-2">Mikroba berbahaya bisa menyebar</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="border px-4 py-2">Makanan bergizi tinggi</td>
                    <td className="border px-4 py-2">Supergulma (tanaman transgenik liar)</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="border px-4 py-2">Pertanian lebih produktif</td>
                    <td className="border px-4 py-2">Ganggu ekosistem (hama non-target mati)</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="border px-4 py-2">Solusi energi ramah lingkungan</td>
                    <td className="border px-4 py-2">Etika kloning manusia masih kontroversial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Tips Belajar */}
        <section className="bg-blue-50 border-l-4 border-blue-500 shadow rounded-lg p-6 text-sm text-blue-800">
          <h2 className="font-bold text-lg mb-2">📝 Tips Belajar Bioteknologi (SMA)</h2>
          <ul className="space-y-2 list-disc ml-5">
            <li>Hafalkan jenis-jenis bioteknologi dan contohnya</li>
            <li>Pahami perbedaan antara rekayasa genetika, kultur jaringan, dan kloning</li>
            <li>Latih soal-soal esai atau pilihan ganda</li>
            <li>Buat mindmap atau tabel perbandingan</li>
            <li>Tonton video animasi atau YouTube edukasi</li>
          </ul>
        </section>

        {/* Kesimpulan Singkat */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          <button
            onClick={() => toggleSection('kesimpulan')}
            className="w-full px-6 py-4 flex justify-between items-center bg-green-100 text-green-800 font-semibold"
          >
            📌 Kesimpulan Singkat
            <span>{expanded['kesimpulan'] ? '▼' : '▶'}</span>
          </button>
          {expanded['kesimpulan'] && (
            <div className="px-6 py-4 text-sm">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border px-4 py-2">Konsep</th>
                    <th className="border px-4 py-2">Penjelasan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Bioteknologi</td>
                    <td className="border px-4 py-2">Ilmu yang gunakan makhluk hidup untuk hasilkan produk berguna</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Konvensional</td>
                    <td className="border px-4 py-2">Teknik sederhana, fermentasi</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Modern</td>
                    <td className="border px-4 py-2">Rekayasa DNA dan kloning</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Kultur jaringan</td>
                    <td className="border px-4 py-2">Bikin banyak tanaman dari satu sel</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Kloning</td>
                    <td className="border px-4 py-2">Bikin individu dengan DNA identik</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Rekayasa genetika</td>
                    <td className="border px-4 py-2">Ubah DNA untuk dapatkan sifat baru</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="border px-4 py-2">Risiko</td>
                    <td className="border px-4 py-2">Mikroba berbahaya, ganggu ekosistem, etika kloning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 Mindmap Bioteknologi | Dibuat dengan React & TailwindCSS
      </footer>
    </div>
  );
}