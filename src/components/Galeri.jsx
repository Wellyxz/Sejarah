import React from 'react';
// Hapus import ParticlesBackground dan ikon kontak pribadi yang tidak relevan

// Data Galeri Foto Perjuangan Soekarno
const galeriData = [
  { 
    title: 'Proklamasi Kemerdekaan', 
    caption: 'Momen sakral 17 Agustus 1945 di Pegangsaan Timur 56', 
    image: '/images/proklamasi.png' 
  },
  { 
    title: 'Konferensi Asia-Afrika (KAA)', 
    caption: 'Konferensi Asia-Afrika di Bandung, 1955', 
    image: '/images/KAA.png' 
  },
  { 
    title: 'Mencetuskan Pancasila', 
    caption: 'Berpidato di sidang BPUPKI, 1 Juni 1945, saat melahirkan lima prinsip dasar', 
    image: '/images/Pancasila.png' 
  },
  { 
    title: 'Dekrit Presiden ', 
    caption: 'Soekarno membacakan dekritnya pada tanggal 5 Juli 1959', 
    image: '/images/Dekrit.png' 
  },
  { 
    title: 'Operasi Trikora', 
    caption: 'Presiden Soekarno Umumkan Operasi Trikora Merebut Irian Barat dari Belanda', 
    image: '/images/Trikora.png' 
  },
  { 
    title: 'Pembangunan Monas', 
    caption: 'Pembangunan Monumen Nasional (Monas), sebagai simbol cita-cita bangsa', 
    image: '/images/Monas.png' 
  },
];

const Galeri = () => {
  return (
    <section 
        id="galeri" 
        className="relative py-20 bg-gray-950 text-white overflow-hidden border-t border-red-700/50"
    >
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Judul Bagian: Galeri Visual Perjuangan (Aksen Merah) */}
        <h2 className="text-center text-4xl font-extrabold mb-12 relative 
                       text-red-500">
          Galeri Visual Perjuangan
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        
        {/* Grid Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galeriData.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-2xl 
                         border-2 border-transparent hover:border-red-600 transition-all duration-500"
            >
              {/* Gambar */}
              <img
                src={item.image}
                alt={item.title}
                // Efek hover: gambar menjadi berwarna dan sedikit membesar
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay Keterangan (Merah Putih) */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent 
                           flex flex-col justify-end p-6 opacity-100 transition-opacity duration-500"
              >
                <h3 className="text-xl font-bold text-red-500 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {item.caption}
                </p>
                <span className="mt-2 block w-8 h-0.5 bg-white"></span> {/* Aksen Putih */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Galeri;