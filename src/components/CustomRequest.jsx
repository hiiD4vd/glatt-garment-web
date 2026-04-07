import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Ruler, PenTool, CheckCircle, ArrowRight, Shirt, Briefcase, Layers, ShoppingBag } from 'lucide-react';

const garmentTypes = [
  { id: 'kaos', label: 'T-Shirt / Kaos', icon: Shirt },
  { id: 'kemeja', label: 'Kemeja / Seragam', icon: Briefcase },
  { id: 'jaket', label: 'Jaket / Outerwear', icon: Layers },
  { id: 'lainnya', label: 'Lainnya', icon: ShoppingBag },
];

const materials = {
  kaos: ['Cotton Combed 30s', 'Cotton Combed 24s', 'Cotton Bamboo', 'CVC / PE'],
  kemeja: ['American Drill', 'Japan Drill', 'Taipan Tropical', 'Ripstop'],
  jaket: ['Taslan', 'Fleece', 'Baby Canvas', 'Parasut'],
  lainnya: ['Diskusikan dengan tim kami'],
};

const CustomRequest = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    garmentType: '',
    material: '',
    quantity: '',
    name: '',
    company: '',
    notes: ''
  });

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1 && !formData.garmentType) return;
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const generateWhatsAppLink = () => {
    const phone = "6287828107303"; // from footer contact
    const text = `Halo GLATT Garment, saya ingin melakukan Custom Request:\n\n`
      + `*Nama:* ${formData.name || '-'}\n`
      + `*Perusahaan:* ${formData.company || '-'}\n`
      + `*Jenis Garment:* ${formData.garmentType}\n`
      + `*Material:* ${formData.material || 'Belum ditentukan'}\n`
      + `*Kuantitas:* ${formData.quantity}\n`
      + `*Catatan Khusus:* ${formData.notes || '-'}\n\n`
      + `Mohon informasi lebih lanjut mengenai estimasi biaya dan waktu produksi.`;
    
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(generateWhatsAppLink(), '_blank');
  };

  return (
    <section className="bg-[#FAFAFA] py-24 md:py-32 border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 border border-[#A3B1C6]/30 text-[#A3B1C6] font-medium text-xs mb-6 tracking-[0.15em] uppercase">
            Custom Manufacturing
          </div>
          <h2 className="font-clash font-medium text-4xl md:text-5xl lg:text-6xl text-[#0A0C10] mb-6 leading-[1.1] tracking-tight">
            Rancang Busana <span className="text-[#A3B1C6] italic font-normal">Spesifik Anda.</span>
          </h2>
          <p className="text-[#0A0C10]/60 text-lg max-w-2xl font-light tracking-wide leading-relaxed">
            Sistem pemesanan interaktif kami dirancang untuk menerjemahkan visi Anda menjadi spesifikasi manufaktur yang presisi.
          </p>
        </div>

        {/* Builder Container */}
        <div className="max-w-4xl mx-auto bg-white border border-[#E5E7EB] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative z-10">
          
          {/* Progress Bar */}
          <div className="flex border-b border-[#E5E7EB]">
            {[1, 2, 3].map((num) => (
              <div key={num} className={`flex-1 py-4 text-center border-r last:border-r-0 border-[#E5E7EB] transition-colors duration-500 ${step >= num ? 'bg-[#0A0C10]' : 'bg-transparent'}`}>
                <span className={`text-xs font-semibold tracking-widest uppercase ${step >= num ? 'text-white' : 'text-[#0A0C10]/40'}`}>
                  Langkah 0{num}
                </span>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              
              {/* Step 1: Garment Type */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-clash text-2xl text-[#0A0C10] mb-8">Pilih Kategori Produk</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {garmentTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = formData.garmentType === type.label;
                      return (
                        <button
                          key={type.id}
                          onClick={() => {
                            handleSelect('garmentType', type.label);
                            handleSelect('material', ''); // reset material
                          }}
                          className={`flex items-center gap-4 p-6 border transition-all duration-300 text-left ${
                            isSelected ? 'border-[#0A0C10] bg-[#FAFAFA]' : 'border-[#E5E7EB] hover:border-[#A3B1C6]'
                          }`}
                        >
                          <div className={`p-3 border ${isSelected ? 'border-[#0A0C10] text-[#0A0C10]' : 'border-[#E5E7EB] text-[#A3B1C6]'}`}>
                            <Icon size={24} strokeWidth={1.5} />
                          </div>
                          <div>
                            <h4 className={`font-medium tracking-wide ${isSelected ? 'text-[#0A0C10]' : 'text-[#0A0C10]/70'}`}>{type.label}</h4>
                          </div>
                          {isSelected && <CheckCircle size={20} className="ml-auto text-[#0A0C10]" />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Material & Quantity */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-clash text-2xl text-[#0A0C10] mb-8">Spesifikasi Material & Kuantitas</h3>
                  <div className="space-y-8">
                    
                    {/* Material Selection */}
                    <div className="space-y-4">
                      <label className="text-xs font-semibold uppercase tracking-widest text-[#0A0C10]/60">Preferensi Material</label>
                      <div className="grid grid-cols-2 gap-4">
                        {(materials[garmentTypes.find(t => t.label === formData.garmentType)?.id || 'lainnya'] || materials.lainnya).map((mat) => (
                          <button
                            key={mat}
                            onClick={() => handleSelect('material', mat)}
                            className={`p-4 border text-sm text-left transition-colors duration-300 ${
                              formData.material === mat ? 'border-[#0A0C10] bg-[#0A0C10] text-white' : 'border-[#E5E7EB] text-[#0A0C10]/80 hover:border-[#A3B1C6]'
                            }`}
                          >
                            {mat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Selection */}
                    <div className="space-y-4">
                      <label className="text-xs font-semibold uppercase tracking-widest text-[#0A0C10]/60">Estimasi Kuantitas</label>
                      <select 
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-[#E5E7EB] p-4 focus:outline-none focus:border-[#0A0C10] transition-colors rounded-none text-[#0A0C10] font-light appearance-none"
                      >
                        <option value="">Pilih Kuantitas Range</option>
                        <option value="50 - 100 Pcs">50 - 100 Pcs</option>
                        <option value="101 - 500 Pcs">101 - 500 Pcs</option>
                        <option value="501 - 2000 Pcs">501 - 2000 Pcs</option>
                        <option value="> 2000 Pcs">&gt; 2000 Pcs</option>
                      </select>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact & Details */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-clash text-2xl text-[#0A0C10] mb-8">Detail Pemesan</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-[#0A0C10]/60">Nama Lengkap</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-[#D1D5DB] py-3 focus:outline-none focus:border-[#0A0C10] transition-colors rounded-none placeholder-gray-400 font-light text-[#0A0C10]" placeholder="Mis. John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-widest text-[#0A0C10]/60">Perusahaan / Instansi</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-[#D1D5DB] py-3 focus:outline-none focus:border-[#0A0C10] transition-colors rounded-none placeholder-gray-400 font-light text-[#0A0C10]" placeholder="Opsional" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-[#0A0C10]/60">Catatan Desain / Kebutuhan</label>
                      <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full bg-transparent border-0 border-b border-[#D1D5DB] py-3 focus:outline-none focus:border-[#0A0C10] transition-colors rounded-none resize-none placeholder-gray-400 font-light text-[#0A0C10]" placeholder="Sebutkan detail warna, sablon/bordir, atau instruksi khusus lainnya..."></textarea>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="p-6 md:px-12 bg-[#FAFAFA] border-t border-[#E5E7EB] flex justify-between items-center">
            {step > 1 ? (
              <button onClick={prevStep} className="text-[#0A0C10]/60 hover:text-[#0A0C10] font-medium text-xs tracking-widest uppercase transition-colors">
                Kembali
              </button>
            ) : <div></div>}

            {step < 3 ? (
              <button 
                onClick={nextStep} 
                className={`bg-[#0A0C10] text-white px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase flex items-center gap-3 transition-colors ${step === 1 && !formData.garmentType ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#A3B1C6]'}`}
                disabled={step === 1 && !formData.garmentType}
              >
                Selanjutnya <ArrowRight size={16} />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="bg-[#0A0C10] text-[#FAFAFA] px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-green-600 hover:text-white transition-colors duration-500 flex items-center gap-3"
              >
                Kirim via WhatsApp <MessageSquare size={16} />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomRequest;
