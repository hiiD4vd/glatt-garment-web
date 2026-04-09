import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section className="bg-[#0A0C10] text-[#FAFAFA] py-24 md:py-32 relative overflow-hidden border-t border-[#1F2329]">
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1F2329_1px,transparent_1px),linear-gradient(to_bottom,#1F2329_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-30"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Sticky Left Section */}
          <div className="lg:col-span-4 lg:col-start-1 h-full">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 border border-[#3A404B] text-[#A3B1C6] font-medium text-[10px] sm:text-xs mb-6 tracking-[0.2em] uppercase"
              >
                Workflow Procedure
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-clash font-medium text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1] tracking-tight"
              >
                Peta Jalan <span className="text-[#A3B1C6] italic font-normal block mt-2">Produksi.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[#A3B1C6] text-base md:text-lg font-light tracking-wide leading-relaxed max-w-sm"
              >
                Dari gagasan hingga serah terima. Kami menerapkan skema operasional transparan untuk memastikan setiap tahapan berjalan dengan presisi teknis.
              </motion.p>
            </div>
          </div>

          {/* Right Section: Timeline Scroll */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="relative border-l border-[#3A404B] ml-4 md:ml-6 space-y-16 lg:space-y-20 py-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative pl-10 md:pl-16 group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute top-1 -left-[17px] md:-left-[21px] w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0A0C10] border-2 border-[#3A404B] flex items-center justify-center transition-all duration-300 group-hover:border-[#C2A878] group-hover:shadow-[0_0_15px_rgba(194,168,120,0.3)]">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#3A404B] group-hover:bg-[#C2A878] transition-colors duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      <div className="p-4 border border-[#3A404B] bg-[#14171D] text-[#A3B1C6] group-hover:text-[#C2A878] group-hover:border-[#C2A878]/50 transition-colors duration-300 shrink-0">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-[10px] md:text-xs text-[#A3B1C6] font-semibold tracking-[0.2em] uppercase mb-2">
                          Tahap 0{step.id}
                        </div>
                        <h3 className="text-xl md:text-2xl font-clash text-white mb-3 tracking-wide">{step.title}</h3>
                        <p className="text-sm md:text-base text-[#A3B1C6] font-light leading-relaxed">
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
