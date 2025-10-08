import React from 'react';
// Hapus: import ParticlesBackground from './Particles'; // Jika sudah menggunakan latar belakang global statis

const About = () => {
  return (
    <section 
      id="about" 
      // Pertahankan gaya global (misalnya bg-gray-950) dan padding, hapus latar belakang partikel
      className="relative py-20 bg-gray-950 text-white overflow-hidden border-t border-b border-red-700/50"
    >
      
      {/* Latar belakang statis global terlihat di sini */}
      
      {/* Konten Profil/Biografi */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* Judul: Profil/Biografi */}
        <h2 className="text-4xl font-extrabold mb-10 relative 
                       // Ganti aksen cyan dengan Merah
                       after:block after:w-20 after:h-1 after:bg-red-600 after:mx-auto after:mt-3 
                       text-red-500">
          PROFIL & BIOGRAFI
        </h2>
        
        <div className="max-w-4xl mx-auto text-left space-y-8">
            
            {/* Box Utama Biografi */}
            <div className="bg-gray-900/70 p-8 rounded-xl shadow-2xl border border-red-700/50">
                <h3 className="text-2xl font-bold mb-4 text-white border-b-2 border-white/20 pb-2">
                    Soekarno
                </h3>
                
                <p className="text-lg mb-4 text-gray-300 leading-relaxed">
                   Ir. Soekarno, yang memiliki nama kecil Kusno Sosrodihardjo, lahir di Surabaya pada 6 Juni 1901. Ayahnya bernama Raden Soekemi Sosrodihardjo, 
                   seorang guru, dan ibunya bernama Ida Ayu Nyoman Rai yang berasal dari Bali. Sejak kecil, Soekarno dikenal cerdas, berani, dan memiliki semangat kebangsaan yang tinggi. 
                   Ia menempuh pendidikan di ELS (Europeesche Lagere School), lalu melanjutkan ke HBS (Hoogere Burger School) di Surabaya, dan akhirnya menyelesaikan studinya di Technische Hoogeschool te Bandoeng (sekarang ITB) dengan gelar insinyur teknik sipil.
                   Soekarno wafat pada 21 Juni 1970 di Jakarta dan dimakamkan di Blitar, Jawa Timur.
                </p>
                
            </div>
            
            {/* Box Detail Penting */}
            <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-gray-900/70 p-6 rounded-xl shadow-xl border-l-4 border-red-600">
                    <h4 className="text-xl font-semibold text-red-500 mb-2">Pendidikan</h4>
                    <ul className="text-gray-400 space-y-1 list-disc list-inside">
                        <li>ELS (Europeesche Lagere School)</li>
                        <li>HBS (Hogere Burgerschool)</li>
                        <li>Technische Hoogeschool te Bandoeng (ITB)</li>
                    </ul>
                </div>
                
                <div className="bg-gray-900/70 p-6 rounded-xl shadow-xl border-l-4 border-white/70">
                    <h4 className="text-xl font-semibold text-white mb-2">Peran</h4>
                    <p className="text-gray-400 italic">
                        <li>Sebagai pemimpin perjuangan kemerdekaan Indonesia.</li>
                        <li>Sebagai penggagas dasar negara <em>Pancasila</em>.</li>
                        <li>Sebagai proklamator kemerdekaan bersama Mohammad Hatta pada 17 Agustus 1945.</li>
                        <li>Sebagai Presiden pertama Republik Indonesia (1945–1967).</li>
                        <li>Sebagai penyatu bangsa Indonesia dari berbagai suku dan golongan.</li>
                        <li>Sebagai tokoh diplomasi yang memperkenalkan Indonesia ke dunia internasional.</li>
                    </p>
                </div>
                
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default About;