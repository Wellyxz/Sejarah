import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Mengganti FaCode dengan FaStar (simbol jasa pahlawan)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Profil', href: '#about' },
    { name: 'Gagasan', href: '#skills' },
    { name: 'Jejak Perjuangan', href: '#tools' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950 shadow-xl border-b border-red-700/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo dan Nama - Aksen Merah Putih */}
        <a href="#hero" className="flex items-center space-x-2 text-3xl font-extrabold transition-colors duration-300">
          {/* Ikon Bintang/Jasa - Warna Merah Tegas */}
          <FaStar className="text-red-600 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] hover:text-white transition-all duration-300" />
          
          {/* Teks Nama - Gradasi Merah-Putih yang elegan */}
          <span className="bg-gradient-to-r from-red-600 to-gray-200 text-transparent bg-clip-text">
            Ir. Soekarno
          </span>
        </a>

        {/* Tombol Hamburger (Mobile) - Warna Merah */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-red-500 hover:text-white focus:outline-none transition duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Navigasi Desktop - Aksen Merah */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-lg font-medium text-gray-400">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  // Hover Merah tegas
                  className="hover:text-red-500 transition-colors duration-300" 
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menu Navigasi Mobile - Latar belakang gelap */}
      <nav 
        className={`fixed top-0 left-0 w-full h-full bg-gray-950 p-4 transition-transform duration-300 transform 
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-50`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={toggleMenu} className="text-red-500 focus:outline-none hover:text-white transition duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 text-xl font-medium text-gray-200">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                onClick={toggleMenu} 
                // Teks Merah saat di-hover di mobile
                className="hover:text-red-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;