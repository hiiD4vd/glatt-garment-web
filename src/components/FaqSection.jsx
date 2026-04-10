import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Apa itu Minimum Order Quantity (MOQ) di Glatt Garment?",
    answer: "MOQ standar kami bervariasi bergantung pada jenis produk dan kompleksitas desain. Secara umum, untuk Kaos/Polo MOQ adalah 50 pcs per desain, sedangkan untuk Kemeja/Jaket adalah 100 pcs. Untuk produksi skala besar (>2.000 pcs), kami bisa menawarkan struktur harga yang jauh lebih efisien."
  },
  {
    question: "Bagaimana proses pembuatan sampel (Sampling Setup)?",
    answer: "Setelah desain dan taksiran harga disetujui, kami akan memproduksi 1-2 pcs physical sample (prototipe). Proses ini memakan waktu 7-14 hari kerja. Biaya sampel akan dikembalikan (refundable) atau dipotong dari total invoice jika berlanjut ke produksi massal sesuai MOQ."
  },
  {
    question: "Apa sistem pembayaran yang berlaku?",
    answer: "Untuk klien baru, kami menerapkan sistem Down Payment (DP) sebesar 50% untuk memulai proses produksi (setelah sampel disetujui). Sisa 50% pelunasan wajib dibayarkan sebelum barang dikirim dari pabrik kami. Kami melayani pembayaran via Transfer Bank (Invoice Resmi Perusahaan)."
  },
  {
    question: "Berapa lama estimasi waktu produksi massal? (Lead Time)",
    answer: "Lead time standar untuk produksi 100 - 500 pcs adalah 3-4 minggu. Untuk produksi ribuan pcs, jadwal akan disesuaikan dengan kapasitas slot pabrik kami saat itu. Kami berdedikasi untuk selalu memberikan timeline yang realistis dan menepatinya."
  },
  {
    question: "Apakah Glatt Garment menerima pengiriman ke luar kota/pulau/ekspor?",
    answer: "Ya, kami melayani pengiriman ke seluruh Nusantara dan pasar global. Kami bekerja sama dengan layanan logistik kargo terpercaya via darat, laut, maupun udara untuk memastikan efisiensi ongkos kirim. Kami juga menangani pengemasan khusus (karton boks tebal/karung kedap air) untuk mempertahankan kualitas."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#0F1115] text-[#FAFAFA] py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C2A878] rounded-full blur-[120px] opacity-[0.05] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Header Column */}
        <div className="lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 border border-[#FAFAFA]/20 text-[#A3B1C6] font-medium text-[10px] sm:text-xs mb-6 tracking-[0.2em] uppercase"
          >
            Technical FAQ
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-clash font-medium text-4xl md:text-5xl lg:text-6xl text-[#FAFAFA] mb-6 leading-[1.1] tracking-tight"
          >
            Informasi <span className="text-[#A3B1C6] italic font-normal">Teknis.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#FAFAFA]/60 text-base font-light tracking-wide leading-relaxed mb-8"
          >
            Pelajari panduan regulasi produksi, proses operasional, serta kebijakan standar B2B yang berlaku di Glatt Garment Industries.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden lg:block p-6 border border-[#FAFAFA]/10 bg-[#FAFAFA]/5 backdrop-blur-sm"
          >
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-2 text-[#C2A878]">Butuh Bantuan Lain?</h4>
            <p className="text-xs text-[#FAFAFA]/60 font-light leading-relaxed mb-4">
              Tim support kami siap membantu menjelaskan secara rinci tentang teknis produksi untuk brand Anda.
            </p>
            <a href="#custom-request" className="inline-flex items-center text-xs font-semibold tracking-[0.2em] uppercase text-[#FAFAFA] hover:text-[#C2A878] transition-colors gap-2">
              Hubungi Kami <div className="w-8 h-[1px] bg-current"></div>
            </a>
          </motion.div>
        </div>

        {/* FAQ Accordion Column */}
        <div className="lg:w-2/3">
          <div className="border-t border-[#FAFAFA]/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-[#FAFAFA]/10"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className={`font-clash text-lg md:text-2xl transition-colors duration-300 pr-8 ${isOpen ? 'text-[#C2A878]' : 'text-[#FAFAFA] group-hover:text-[#FAFAFA]/80'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#C2A878] bg-[#C2A878] text-[#0F1115]' : 'border-[#FAFAFA]/20 text-[#FAFAFA] group-hover:border-[#FAFAFA]/50 group-hover:bg-[#FAFAFA]/5'}`}>
                      {isOpen ? <Minus size={18} strokeWidth={2} /> : <Plus size={18} strokeWidth={2} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-[#FAFAFA]/60 font-light leading-relaxed max-w-3xl pr-12 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
