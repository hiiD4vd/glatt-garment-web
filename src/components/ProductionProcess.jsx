import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageSquare, Scissors, FileText, Settings, CheckCircle, Truck, Hexagon } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Konsultasi & Spesifikasi',
    desc: 'Diskusi mendalam mengenai desain, dimensi, pemilihan material, dan estimasi biaya untuk mencapai efisiensi yang diharapkan.',
    icon: MessageSquare
  },
  {
    id: 2,
    title: 'Prototyping & Sampling',
    desc: 'Pembuatan sampel presisi berdasarkan spesifikasi yang disepakati untuk menjamin kesesuaian fitting dan kualitas material sebelum produksi massal.',
    icon: Scissors
  },
  {
    id: 3,
    title: 'Kesepakatan & Administrasi',
    desc: 'Finalisasi anggaran, timeline, dan penyelesaian administrasi awal untuk memulai proses pengadaan.',
    icon: FileText
  },
  {
    id: 4,
    title: 'Produksi Massal (Mass',
    desc: 'Pelaksanaan produksi skala besar di fasilitas kami dengan menerapkan standarisasi operasional prosedur (SOP) manufaktur yang ketat.',
    icon: Settings
  },
  {
    id: 5,
    title: 'Quality Control (QC)',
    desc: 'Pemeriksaan kualitas berlapis mencakup inspeksi jahitan, konsistensi warna, dan finishing untuk meminimalisasi defect rate.',
    icon: CheckCircle
  },
  {
    id: 6,
    title: 'Pengemasan & Pengiriman',
    desc: 'Pelipatan, pelabelan, dan pengemasan komersial sebelum diserahkan kepada mitra logistik berlisensi.',
    icon: Truck
  }
];

export default function ProductionProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="bg-[#050505] text-[#FAFAFA] py-24 md:py-32 xl:py-40 relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A0C10] via-[#050505] to-[#0A0C10] top-0 pointer-events-none z-0"></div>
      <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#A3B1C6]/[0.03] blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#C2A878]/[0.04] blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Sticky Left Section */}
          <div className="lg:col-span-5 h-full relative z-20">
            <div className="sticky top-32 xl:top-40">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-full mb-8 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C2A878]/0 via-[#C2A878]/10 to-[#C2A878]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Hexagon size={14} className="text-[#C2A878] fill-[#C2A878]/20" />
                <span className="text-[#A3B1C6] font-medium text-[10px] sm:text-xs tracking-[0.2em] uppercase">Workflow Procedure</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-clash font-medium text-4xl text-white mb-6 leading-[1.05] tracking-tight"
              >
                <span className="text-5xl md:text-6xl lg:text-[4.5rem]">Peta Jalan</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2A878] via-[#e5d5b5] to-[#C2A878] italic font-normal inline-block mt-3 bg-[length:200%_auto] animate-gradient">Produksi.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[#A3B1C6] text-base md:text-lg font-light tracking-wide leading-relaxed max-w-md"
              >
                Dari gagasan awal hingga serah terima, kami menerapkan skema operasional yang sangat transparan untuk memastikan setiap tahapan tereksekusi dengan presisi tinggi.
              </motion.p>
              
              {/* Premium Dashboard Widgets */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-16 hidden md:grid grid-cols-2 gap-4 max-w-md"
              >
                <div className="p-6 border border-white/5 bg-white/[0.015] backdrop-blur-md rounded-2xl group hover:border-white/10 hover:bg-white/[0.03] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#C2A878]/10 blur-2xl rounded-full group-hover:bg-[#C2A878]/20 transition-all duration-700"></div>
                  <div className="text-4xl font-clash text-white mb-2 group-hover:text-[#C2A878] transition-colors duration-500">3 Lapis</div>
                  <div className="text-[11px] text-[#808A9D] uppercase tracking-[0.15em] font-medium">Quality Control</div>
                </div>
                <div className="p-6 border border-white/5 bg-white/[0.015] backdrop-blur-md rounded-2xl group hover:border-white/10 hover:bg-white/[0.03] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#A3B1C6]/10 blur-2xl rounded-full group-hover:bg-[#A3B1C6]/20 transition-all duration-700"></div>
                  <div className="text-4xl font-clash text-white mb-2 group-hover:text-white transition-colors duration-500">100%</div>
                  <div className="text-[11px] text-[#808A9D] uppercase tracking-[0.15em] font-medium">SOP Presisi</div>
                </div>
                <div className="col-span-2 p-6 border border-white/5 bg-white/[0.015] backdrop-blur-md rounded-2xl group hover:border-[#C2A878]/20 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#C2A878]/5 blur-3xl rounded-full group-hover:bg-[#C2A878]/15 transition-all duration-700"></div>
                  <div className="text-lg font-clash text-white mb-2 relative z-10">Transparansi Penyeluruhan</div>
                  <div className="text-sm text-[#808A9D] relative z-10 leading-relaxed font-light">
                    Klien akan selalu diperbarui pada setiap fase produksi sehingga meminimalisir miskomunikasi.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Section: Timeline */}
          <div className="lg:col-span-7 relative z-10 pt-10 lg:pt-0">
            {/* Timeline Vertical Guide */}
            <div className="absolute left-[24px] sm:left-[36px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            
            {/* Animated Glow Line */}
            <motion.div 
              className="absolute left-[24px] sm:left-[36px] top-4 bottom-4 w-[3px] -ml-[1px] bg-gradient-to-b from-transparent via-[#C2A878] to-transparent origin-top shadow-[0_0_15px_rgba(194,168,120,0.5)] z-20 rounded-full"
              style={{ scaleY }}
            ></motion.div>

            <div className="space-y-8 sm:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative pl-16 sm:pl-24 group"
                  >
                    {/* Node on Line */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-[24px] sm:left-[36px] transform -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#050505] border-2 border-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-[#C2A878]/50 z-30 group-hover:shadow-[0_0_20px_rgba(194,168,120,0.2)]">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/20 group-hover:bg-[#C2A878] transition-all duration-500 group-hover:shadow-[0_0_10px_rgba(194,168,120,0.8)] group-hover:scale-125"></div>
                    </div>

                    {/* Content Card Wrapper */}
                    <div className="relative group/card w-full">
                      {/* Premium Hover Glow Border */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent group-hover/card:from-[#C2A878]/30 group-hover/card:to-transparent rounded-2xl transition-all duration-700 pointer-events-none opacity-50 group-hover/card:opacity-100"></div>
                      
                      <div className="absolute inset-[1px] bg-[#0A0C10] rounded-2xl z-0 transition-colors duration-500"></div>
                      
                      {/* Subtele Inner Noise */}
                      <div className="absolute inset-[1px] rounded-2xl bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0 pointer-events-none"></div>

                      {/* Card Content */}
                      <div className="relative z-10 p-6 sm:p-8 xl:p-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start overflow-hidden rounded-2xl">
                        
                        {/* Huge Decorative Number */}
                        <div className="absolute right-0 bottom-0 translate-x-[10%] translate-y-[20%] text-[120px] md:text-[180px] font-clash font-bold text-white/[0.02] group-hover/card:text-white/[0.04] transition-colors duration-700 pointer-events-none select-none z-0">
                          0{step.id}
                        </div>
                        
                        {/* Icon Box */}
                        <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 text-[#A3B1C6] group-hover/card:text-[#C2A878] group-hover/card:border-[#C2A878]/30 group-hover/card:bg-[#C2A878]/10 transition-all duration-500 shrink-0 relative z-10 shadow-[0_0_0_transparent] group-hover/card:shadow-[0_0_30px_rgba(194,168,120,0.1)]">
                          <Icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
                        </div>
                        
                        {/* Text Content */}
                        <div className="relative z-10 w-full pt-2">
                           <div className="flex items-center gap-4 mb-4">
                             <div className="text-[10px] md:text-[11px] text-[#A3B1C6] font-semibold tracking-[0.2em] uppercase">
                               Fase 0{step.id}
                             </div>
                             <div className="h-[1px] w-12 bg-white/15 group-hover/card:w-24 group-hover/card:bg-[#C2A878]/50 transition-all duration-700"></div>
                           </div>
                           <h3 className="text-xl md:text-2xl font-clash text-white mb-3 tracking-wide group-hover/card:text-white transition-colors duration-500 leading-snug">
                            {step.title}
                           </h3>
                           <p className="text-sm md:text-base text-[#808A9D] font-light leading-relaxed xl:max-w-md">
                             {step.desc}
                           </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

