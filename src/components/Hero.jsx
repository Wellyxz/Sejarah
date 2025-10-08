import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Tetap di-import
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from './Particles'; // Dipertahankan

const Hero = () => {
  return (
    <section
      id="hero"
      // Latar belakang gelap (gray-800)
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4 bg-gray-800 pt-20 md:pt-0 overflow-hidden"
    >
      {/* Latar belakang partikel */}
      <div className="absolute inset-0 z-0">
        {/* Partikel dengan warna putih atau merah */}
        <ParticlesBackground color="#f87171" /> 
      </div>

      {/* Background sweep/radial-gradient Merah-Putih di tengah bawah */}
      <div className="absolute inset-0 bg-radial-gradient-to-t from-red-700/50 via-transparent to-transparent opacity-50 z-10"></div>

      {/* Konten utama Hero Section - Penataan Teks di atas/samping gambar */}
      <div className="flex flex-col md:flex-row items-center justify-center lg:gap-16 z-20 p-4 w-full max-w-6xl">
        
        {/* Konten Teks di Kiri (atau atas pada mode mobile) */}
        <div className="md:w-1/2 lg:w-2/5 z-20 p-4 md:text-left text-center">
          
          {/* Nama - Putih Murni dengan garis bawah merah tebal */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 
          text-white border-b-4 border-red-600 pb-2 inline-block">
            Ir.Soekarno
          </h2>
          
          {/* Jabatan - Teks Putih dengan aksen Merah */}
          <TypeAnimation
            sequence={[
              'Sang Proklamator & Presiden Pertama Indonesia',
            ]}
            wrapper="p"
            cursor={true}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-500 mb-6"
          />

          {/* Frasa dengan animasi ketik dan ganti - Putih Pudar */}
          <TypeAnimation
            sequence={[
              'Bangsa yang besar adalah bangsa yang menghormati jasa pahlawannya',
              3000, 
              'Beri aku 1.000 orang tua, niscaya akan kucabut semeru dari akarnya. Beri aku 10 pemuda niscaya akan kuguncangkan dunia',
              3000, 
              'Perjuanganku lebih mudah karena mengusir penjajah, tapi perjuanganmu akan lebih sulit karena melawan bangsamu sendiri',
              3000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-xl italic text-gray-400 border-t border-b border-gray-700 py-4"
          />
        </div>
        
        {/* Gambar profil dengan border Perisai Merah-Putih (Kotak dengan sudut tegas) */}
        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden 
        // Menggunakan kotak dengan sudut sedikit membulat (rounded-xl)
        bg-gradient-to-tr from-white to-red-600 p-2 mb-8 mt-12 md:mt-0 
        shadow-2xl shadow-red-700/50 z-20 transform rotate-3 hover:rotate-0 transition duration-500">
          <div className="w-full h-full rounded-lg overflow-hidden bg-gray-900 flex items-center justify-center">
            <img
              src="/images/Soekarno.png"
              alt="Soekarno"
              // Sedikit scale-up untuk kesan gagah
              className="w-full h-full object-cover rounded-lg transform scale-105" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;