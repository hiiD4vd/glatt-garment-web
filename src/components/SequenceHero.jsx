import React from 'react';
import Silk from './Silk';

const SequenceHero = () => {
  return (
    <div className="relative h-screen w-full flex justify-center items-center overflow-hidden bg-[#0A0C10]">
      
      <div className="absolute inset-0 w-full h-full">
        <Silk
          speed={4}
          scale={1.2}
          color="#A3B1C6"
          noiseIntensity={1.8}
          rotation={0}
        />
      </div>
      
      {/* Dark overlay specifically at edges for seamless transition */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0C10] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0C10]/80 to-transparent z-10 pointer-events-none" />

      {/* Dark overlay specifically at edges for seamless transition */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0C10] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0C10]/80 to-transparent z-10 pointer-events-none" />

      {/* Static Text Overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 text-white flex flex-col items-center justify-center text-center mt-12 pointer-events-none">
        <div className="max-w-5xl pointer-events-auto">
          <h1 className="font-clash text-5xl md:text-7xl lg:text-[6.5rem] font-medium leading-[1.05] tracking-[-0.02em] mb-8">
            Pusat Produksi <br /> <span className="text-[#A3B1C6] italic font-normal opacity-90">Konveksi Custom.</span>
          </h1>

          <p className="text-base md:text-lg xl:text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed tracking-wide mt-6 mb-12">
            Rekomendasi Utama Rekan Bisnis & Komunitas. Menerima pesanan segala jenis pakaian custom berkualitas dengan presisi & ketepatan waktu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#kontak" className="w-full sm:w-auto bg-white text-[#0A0C10] px-10 py-4 font-medium text-xs tracking-widest uppercase hover:bg-[#A3B1C6] transition-all duration-500 rounded-none shadow-2xl shadow-white/5">
              Konsultasi Proyek
            </a>
            <a href="#layanan" className="w-full sm:w-auto border border-white/20 text-white px-10 py-4 font-medium text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-500 rounded-none">
              Portofolio Kami
            </a>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default SequenceHero;
