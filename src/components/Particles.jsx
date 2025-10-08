import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const numParticles = 80;
    
    // Array warna yang akan digunakan (MERAH dan PUTIH)
    // #EF4444 adalah Red-500 di Tailwind
    // #F3F4F6 adalah Gray-100 (putih cerah) di Tailwind
    const colors = ['#EF4444', '#F3F4F6']; 

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        // Memilih warna secara acak dari array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: randomColor, // Menggunakan warna Merah atau Putih
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.fillStyle = p.color; // Menggunakan warna unik setiap partikel
        
        // Tambahkan efek shadow/glow halus agar partikel terlihat lebih menonjol di latar belakang gelap
        ctx.shadowBlur = 5; 
        ctx.shadowColor = p.color;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        // Reset shadow
        ctx.shadowBlur = 0;
      });
    };

    const updateParticles = () => {
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width || p.x < 0) p.speedX = -p.speedX;
        if (p.y > canvas.height || p.y < 0) p.speedY = -p.speedY;
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    // Tambahkan opacity agar partikel tidak terlalu terang
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70"></canvas>
  );
};

export default ParticlesBackground;