import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const end = parseInt(value, 10);
      const controls = animate(0, end, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (v) => setCount(Math.floor(v)),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-clash font-medium text-5xl md:text-6xl text-[#0A0C10] mb-3 flex items-baseline tracking-tight">
        {count.toLocaleString('id-ID')}
        <span className="text-3xl text-[#A3B1C6] ml-2 font-light">{suffix}</span>
      </div>
      <div className="text-[#0A0C10]/60 font-medium text-xs uppercase tracking-[0.15em]">{label}</div>
    </div>
  );
};

const AboutCapacity = () => {
  return (
    <section id="tentang-kami" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left: Story */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <div className="inline-block px-4 py-1.5 border border-[#A3B1C6]/30 text-[#A3B1C6] font-medium text-xs rounded-none mb-8 tracking-[0.15em] uppercase">
            Pengalaman 10+ Tahun
          </div>
          <h2 className="font-clash font-medium text-4xl md:text-5xl text-[#0A0C10] mb-8 leading-[1.15] tracking-tight">
            Standar Manufaktur <br /> <span className="text-[#A3B1C6] italic font-normal">Kelas Enterprise.</span>
          </h2>
          <div className="space-y-6 text-[#0A0C10]/60 text-lg leading-relaxed font-light tracking-wide">
            <p>
              Glatt Garment Industries memadukan keahlian teknik tekstil presisi dengan operasional manufaktur modern. Kami menyediakan lini produksi berkapasitas tinggi untuk memenuhi kuota seragam perusahaan global maupun local brand papan atas.
            </p>
            <p>
              Kami mengerti bahwa ketepatan waktu, durabilitas material, dan kualitas jahitan tiada cacat adalah instrumen krusial bagi citra korporat Anda.
            </p>
          </div>
        </motion.div>

        {/* Right: Numbers */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-10 md:p-14 rounded-none border border-gray-200 relative overflow-hidden shadow-sm group hover:border-[#A3B1C6]/40 transition-colors duration-700"
        >
          {/* Subtle noise/gradient background for the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3B1C6]/5 rounded-bl-[100px] blur-3xl pointer-events-none transition-transform duration-1000 group-hover:scale-125"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12 relative z-10">
            <Counter value="20000" suffix="+" label="Pcs / Bulan" />
            <Counter value="50" suffix="+" label="Penjahit Ahli" />
            <Counter value="150" suffix="+" label="Klien Perusahaan" />
            
            <div className="flex flex-col justify-center">
              <div className="font-clash font-medium text-5xl md:text-6xl text-[#0A0C10] mb-3 flex items-baseline tracking-tight">
                99.8<span className="text-3xl text-[#A3B1C6] ml-1 font-light">%</span>
              </div>
              <div className="text-[#0A0C10]/60 font-medium text-xs uppercase tracking-[0.15em] leading-relaxed">
                Tingkat <br />Kepuasan Klien
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutCapacity;
