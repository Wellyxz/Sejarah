import React from 'react';
import { FaCalendarAlt, FaFlag, FaPlane, FaBook, FaStar } from 'react-icons/fa'; 

const perjuanganData = [
  { name: 'Gagasan Pancasila', date: '1 Juni 1945', icon: FaBook, color: 'text-red-500', 
    narasi: 'Selain Muh Yamin dan Soepomo, beberapa anggota BPUPKI juga menyampaikan usul dasar negara, di antaranya adalah Ir. Soekarno. Usul ini disampaikan pada 1 Juni 1945 yang kemudian dikenal sebagai hari lahir Pancasila. Namun masyarakat bangsa Indonesia ada yang tidak setuju mengenai pancasila yaitu Ketuhanan, dengan menjalankan syariat Islam bagi pemeluk-pemeluknya. Lalu diganti bunyinya menjadi Ketuhanan Yang Maha Esa. Usul Soekarno sebenarnya tidak hanya satu melainkan tiga buah usulan calon dasar negara yaitu lima prinsip, tiga prinsip, dan satu prinsip. Soekarno pula-lah yang mengemukakan dan menggunakan istilah “Pancasila” (secara harfiah berarti lima dasar) pada rumusannya ini atas saran seorang ahli bahasa Mohammad Yamin yang duduk di sebelah Soekarno. Oleh karena itu rumusan Soekarno di atas disebut dengan Pancasila, Trisila, dan Ekasila.' },
  { name: 'Proklamasi Kemerdekaan', date: '17 Agustus 1945', icon: FaFlag, color: 'text-white', 
    narasi: 'Proklamasi Kemerdekaan Indonesia dibacakan oleh Soekarno dengan didampingi oleh Mohammad Hatta pada pukul 10:00 hari Jumat, 17 Agustus 1945 di sebuah rumah di Jalan Pegangsaan Timur No. 56, Jakarta Pusat. Pembacaan proklamasi ini menandai dimulainya perlawanan diplomatik dan bersenjata dari Revolusi Nasional Indonesia, yang berperang melawan pasukan Belanda dan warga sipil pro-Belanda, hingga Belanda secara resmi mengakui kemerdekaan Indonesia pada tahun 1949. Naskah Proklamasi ditandatangani oleh Soekarno dan Mohammad Hatta, yang kemudian ditunjuk sebagai presiden dan wakil presiden berturut-turut sehari setelah proklamasi dibacakan.' },
  { name: 'Konferensi Asia-Afrika', date: '1955', icon: FaPlane, color: 'text-red-500', 
    narasi: 'Ir. Soekarno berperan penting sebagai penggagas dan tuan rumah Konferensi Asia Afrika (KAA) yang diadakan di Bandung pada tahun 1955. Melalui KAA, Soekarno menunjukkan kepemimpinannya di dunia internasional dengan menggalang persatuan negara-negara Asia dan Afrika yang baru merdeka untuk menentang kolonialisme dan memperjuangkan perdamaian dunia. KAA menjadi jejak perjuangan Soekarno dalam memperluas makna kemerdekaan, bukan hanya bagi Indonesia, tetapi juga bagi bangsa-bangsa lain agar dapat berdiri bebas dan berdaulat.' },
  { name: 'Dekrit Presiden', date: '5 Juli 1959', icon: FaCalendarAlt, color: 'text-white', 
    narasi: 'Dekrit Presiden 5 Juli 1959 dikeluarkan oleh Ir. Soekarno untuk mengatasi kekacauan politik dan kegagalan Konstituante dalam menetapkan UUD baru. Melalui dekrit ini, Soekarno membubarkan Konstituante, menetapkan kembali berlakunya UUD 1945, dan membentuk kembali sistem pemerintahan presidensial. Dekrit ini menjadi titik balik penting dalam sejarah Indonesia, karena menandai berakhirnya sistem parlementer dan dimulainya masa Demokrasi Terpimpin di bawah kepemimpinan Soekarno.' },
  { name: 'Operasi Trikora', date: '1961 - 1962', icon: FaFlag, color: 'text-red-500', 
    narasi: 'Ir. Soekarno memimpin Operasi Trikora (Tri Komando Rakyat) 1961–1962 sebagai langkah untuk mengambil kembali Irian Barat (Papua) dari Belanda. Ia bertindak sebagai pemimpin politik dan komando tertinggi, menggerakkan TNI, diplomasi internasional, dan strategi militer agar wilayah tersebut bisa kembali ke pangkuan Indonesia. Melalui kepemimpinan Soekarno, Operasi Trikora menjadi simbol perjuangan mempertahankan kedaulatan dan integritas wilayah Indonesia, yang akhirnya berhasil dengan Persetujuan New York 1962, sehingga Irian Barat resmi diserahkan ke Indonesia pada 1963.' },
];

const JejakPerjuangan = () => {
  return (
    <section id="jejakperjuangan" className="relative py-20 bg-gray-950 text-white overflow-hidden border-t border-red-700/50">

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-extrabold mb-12 relative 
                       text-red-500">
          Jejak Perjuangan
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-3 rounded"></span>
        </h2>
        
        {/* Kontainer Narasi Kronologis */}
        <div className="max-w-3xl mx-auto space-y-10">
          {perjuanganData.map((peristiwa, index) => {
            const IconComponent = peristiwa.icon;
            
            return (
              <div 
                key={index} 
                className={`flex space-x-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                {/* Visual Timeline (Ikon & Garis) */}
                <div className="flex flex-col items-center">
                  <div className={`p-3 rounded-full border-4 border-red-600 shadow-xl ${peristiwa.color} bg-gray-900`}>
                    <IconComponent className="text-2xl" />
                  </div>
                  {index < perjuanganData.length - 1 && (
                    <div className="w-0.5 h-full bg-red-700/50 my-2"></div>
                  )}
                </div>

                {/* Konten Narasi */}
                <div className={`p-6 rounded-xl bg-gray-800 shadow-2xl transition duration-500 
                                ${index % 2 === 0 ? 'md:text-left border-l-4 border-red-600' : 'md:text-right border-r-4 border-red-600'}`}
                >
                  <h3 className="text-2xl font-bold mb-1 text-white">
                    {peristiwa.name}
                  </h3>
                  <p className="text-sm font-semibold mb-3 text-red-400">{peristiwa.date}</p>
                  <p className="text-base text-gray-300 leading-relaxed">{peristiwa.narasi}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JejakPerjuangan;