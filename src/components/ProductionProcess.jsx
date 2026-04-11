import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageSquare, Scissors, FileText, Settings, CheckCircle, Truck } from 'lucide-react';

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
    desc: 'Finalisasi anggaran, timeline, dan penyelesaian administrasi awal (Down Payment) untuk memulai proses pengadaan.',
    icon: FileText
  },
  {
    id: 4,
    title: 'Produksi Massal (Mass Production)',
    desc: 'Pelaksanaan produksi skala besar di fasilitas kami dengan menerapkan standarisasi operasional prosedur (SOP) manufaktur yang ketat.',
    icon: Settings
  },
  {
    id: 5,
    title: 'Quality Control (QC 3-Lapis)',
    desc: 'Pemeriksaan kualitas berlapis mencakup inspeksi jahitan, konsistensi warna, dan finishing untuk meminimalisasi tingkat cacat (defect rate).',
    icon: CheckCircle
  },
  {
    id: 6,
    title: 'Pengemasan & Pengiriman',
    desc: 'Proses pelipatan, pelabelan, dan pengemasan komersial sebelum diserahkan kepada mitra logistik berlisensi untuk dikirim ke tujuan Anda.',
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
    <section ref={containerRef} className="bg-[#050505] text-[#FAFAFA] py-24 md:py-32 md:pb-40 relative overflow-hidden border-t border-[#1F2329]">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#0A0C10] to-transparent z-0"></div>
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#C2A878]/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#A3B1C6]/5 blur-[120px] pointer-events-none z-0"></div>
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1F2329_1px,transparent_1px),linear-gradient(to_bottom,#1F2329_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-20"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Sticky Left Section */}
          <div className="lg:col-span-5 lg:col-start-1 h-full relative z-20">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 border border-[#3A404B] bg-[#0A0C10]/50 backdrop-blur-md text-[#A3B1C6] font-medium text-[10px] sm:text-xs mb-6 tracking-[0.2em] uppercase"
              >
                Workflow Procedure
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-clash font-medium text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-[1.05] tracking-tight"
              >
                Peta Jalan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3B1C6] to-[#606C80] italic font-normal block mt-2">Produksi.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[#A3B1C6] text-base md:text-lg font-light tracking-wide leading-relaxed max-w-sm"
              >
                Dari gagasan hingga serah terima. Kami menerapkan skema operasional transparan untuk memastikan setiap tahapan berjalan dengan presisi teknis tingkat tinggi.
              </motion.p>
              
              {/* Optional metrics or trust badges in sticky area */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 hidden lg:flex flex-col gap-6"
              >
                <div className="p-5 border border-[#1F2329] bg-[#0A0C10]/40 backdrop-blur-md max-w-xs relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C2A878]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C2A878] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"></div>
                  <div className="text-[10px] text-[#A3B1C6] tracking-widest uppercase mb-1 font-semibold">Standardisasi Kinerja</div>
                  <div className="text-2xl font-clash text-white">SOP Manufaktur</div>
                  <p className="text-xs text-[#808A9D] mt-2 font-light">Prosedur ketat pada setiap fase krusial.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Section: Timeline Scroll */}
          <div className="lg:col-span-7 relative z-10 pt-10 lg:pt-0">
            {/* Base Line */}
            <div className="absolute left-[15px] sm:left-[23px] top-6 lg:top-8 bottom-10 w-[1px] bg-[#1F2329]"></div>
            {/* Animated Progress Line */}
            <motion.div 
              className="absolute left-[15px] sm:left-[23px] top-6 lg:top-8 bottom-10 w-[2px] bg-gradient-to-b from-[#C2A878] via-[#A3B1C6] to-transparent origin-top shadow-[0_0_15px_rgba(194,168,120,0.5)] z-20"
              style={{ scaleY }}
            ></motion.div>

            <div className="space-y-12 lg:space-y-20">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative pl-12 sm:pl-20 group"
                  >
                    {/* Background Number */}
                    <div className="absolute -top-10 -left-4 text-[120px] font-clash font-bold text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none select-none z-0 hidden sm:block">
                      0{step.id}
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute top-8 left-[15px] sm:left-[23px] transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#050505] border border-[#3A404B] flex items-center justify-center transition-all duration-500 group-hover:border-[#C2A878] group-hover:shadow-[0_0_20px_rgba(194,168,120,0.2)] z-30">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#3A404B] group-hover:bg-[#C2A878] group-hover:shadow-[0_0_10px_rgba(194,168,120,0.8)] transition-all duration-500"></div>
                    </div>

                    {/* Content Card */}
                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start p-6 md:p-8 bg-[#0A0C10]/60 backdrop-blur-xl border border-[#1F2329] group-hover:border-[#3A404B] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black z-10 overflow-hidden">
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                      <div className="p-4 border border-[#1F2329] bg-[#050505] text-[#A3B1C6] group-hover:text-[#C2A878] group-hover:border-[#C2A878]/30 transition-all duration-500 shrink-0 relative z-10">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      
                      <div className="relative z-10">
                         <div className="flex items-center gap-4 mb-3">
                           <div className="text-[10px] md:text-xs text-[#A3B1C6] font-semibold tracking-[0.2em] uppercase">
                             Tahap 0{step.id}
                           </div>
                           <div className="h-[1px] w-12 bg-[#1F2329] group-hover:w-20 group-hover:bg-[#C2A878]/50 transition-all duration-500"></div>
                         </div>
                         <h3 className="text-2xl md:text-3xl font-clash text-white mb-4 tracking-wide group-hover:text-[#C2A878] transition-colors duration-500">{step.title}</h3>
                         <p className="text-sm md:text-base text-[#808A9D] font-light leading-relaxed">
                           {step.desc}
                         </p>
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
