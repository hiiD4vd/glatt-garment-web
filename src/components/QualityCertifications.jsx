import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Award, CheckCircle } from 'lucide-react';

const certifications = [
  { icon: ShieldCheck, title: 'Standar Mutu Mutlak', desc: 'SOP ketat di setiap lini produksi.' },
  { icon: Leaf, title: 'Sustainable', desc: 'Pengelolaan sisa kain yang terpadu.' },
  { icon: Award, title: 'Grade Premium', desc: 'Material & aksesoris tersertifikasi.' },
  { icon: CheckCircle, title: '3-Step QC', desc: 'Inspeksi detail sebelum dikemas.' },
];

const QualityCertifications = () => {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-b border-[#E5E7EB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-4 divide-x-0 md:divide-x divide-[#E5E7EB]">
          {certifications.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-12 h-12 bg-[#FAFAFA] border border-[#E5E7EB] flex items-center justify-center mb-5 text-[#0A0C10] shadow-sm">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-xs md:text-[13px] tracking-widest uppercase text-[#0A0C10] mb-2">{item.title}</h4>
                <p className="text-xs text-[#0A0C10]/60 font-light max-w-[200px] leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualityCertifications;
