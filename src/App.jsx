import React from 'react';
import './styles/style.css'; 
import Header from './components/Header'; 
import Hero from './components/Hero'; 
import About from './components/About'; 
import JejakPerjuangan from './components/JejakPerjuangan'; 
import Galeri from './components/Galeri';



function App() {
  return (
    <div className="portfolio-container bg-gray-950 min-h-screen"> 
      <Header />
      <main>
        <Hero />
        <About />
        
        {/* Menggunakan komponen baru Gagasan dan JejakPerjuangan */}
        <JejakPerjuangan /> 
        <Galeri/>
        {/* Anda bisa menambahkan bagian lain yang relevan di sini, misalnya Galeri Foto Sejarah */}
        
      </main>
      
    </div>
  );
}

export default App;