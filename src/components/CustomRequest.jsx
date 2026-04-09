import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Shirt, Briefcase, Layers, ShoppingBag, MessageSquare, ArrowLeft, Check, AlertCircle, Ruler } from 'lucide-react';

const garmentTypes = [
  { id: 'kaos', label: 'T-Shirt / Kaos', icon: Shirt, desc: 'Kerah bulat, V-Neck, Polo Shirt' },
  { id: 'kemeja', label: 'Kemeja / Seragam', icon: Briefcase, desc: 'PDL, PDH, Korsa, Formal' },
  { id: 'jaket', label: 'Jaket / Outerwear', icon: Layers, desc: 'Hoodie, Bomber, Coach, Parka' },
  { id: 'lainnya', label: 'Lainnya', icon: ShoppingBag, desc: 'Merchandise, Totebag, Topi, Rompi' },
];

const materials = {
  kaos: ['Cotton Combed 30s', 'Cotton Combed 24s', 'Cotton Bamboo', 'CVC / PE', 'Polyester'],
  kemeja: ['American Drill', 'Japan Drill', 'Taipan Tropical', 'Ripstop', 'High Twist'],
  jaket: ['Taslan', 'Fleece', 'Baby Canvas', 'Parasut', 'Corduroy'],
  lainnya: ['Akan didiskusikan dengan tim ahli kami'],
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
  const [error, setError] = useState('');

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateStep = () => {
    if (step === 1 && !formData.garmentType) {
      setError('Silakan pilih salah satu kategori produk terlebih dahulu.');
      return false;
    }
    if (step === 2) {
      const needsMaterial = formData.garmentType !== 'Lainnya';
      if ((needsMaterial && !formData.material) || !formData.quantity) {
        setError('Silakan lengkapi pilihan material dan estimasi kuantitas.');
        return false;
      }
    }
    if (step === 3 && !formData.name.trim()) {
      setError('Nama profil pemesan wajib diisi untuk keperluan komunikasi.');
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setError('');
    setStep(prev => prev - 1);
  };

  const generateWhatsAppLink = () => {
    const phone = "6287828107303"; 
    const isLainnya = formData.garmentType === 'Lainnya';
    const text = `Halo GLATT Garment, saya tertarik melakukan *Custom Request Manufacturing*:\n\n`
      + `*PROFIL*\n`
      + `• Nama: ${formData.name}\n`
      + `• Institusi/Perusahaan: ${formData.company || '-'}\n\n`
      + `*DETAIL PRODUKSI*\n`
      + `• Kategori: ${formData.garmentType}\n`
      + (isLainnya ? '' : `• Material: ${formData.material || 'Belum ditentukan'}\n`)
      + `• Estimasi Kuantitas: ${formData.quantity}\n`
      + `• Catatan Khusus: ${formData.notes || '-'}\n\n`
      + `Mohon arahannya untuk proses diskusi lanjutan dan estimasi biaya. Terima kasih.`;
    
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    window.open(generateWhatsAppLink(), '_blank');
  };

  // Helper for step navigation dots
  const stepsTitle = ["Kategori", "Spesifikasi", "Detail Kontak"];

  return (
    <section id="custom-request" className="bg-[#FAFAFA] py-24 md:py-32 border-t border-[#E5E7EB] relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 border border-[#A3B1C6]/30 text-[#A3B1C6] font-medium text-[10px] sm:text-xs mb-6 tracking-[0.2em] uppercase bg-white/50 backdrop-blur-sm"
          >
            Sistem Pemesanan Khusus
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-clash font-medium text-4xl md:text-5xl lg:text-7xl text-[#0A0C10] mb-6 leading-[1.1] tracking-tight"
          >
            Rancang Presisi, <span className="text-[#A3B1C6] italic font-normal block md:inline mt-2 md:mt-0">Wujudkan Visi Anda.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#0A0C10]/60 text-base md:text-lg max-w-2xl font-light tracking-wide leading-relaxed"
          >
            Gunakan antarmuka mandiri ini untuk mengonfigurasi kebutuhan manufaktur tekstil Anda. Tim teknik kami akan meninjau spesifikasi untuk memastikan efisiensi biaya dan kualitas optimal.
          </motion.p>
        </div>

        {/* Builder Container */}
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-[#E5E7EB] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          {/* Progress Indicators */}
          <div className="flex border-b border-[#E5E7EB] relative">
            {/* Animated Progress Bar */}
            <div 
              className="absolute bottom-0 left-0 h-[2px] bg-[#0A0C10] transition-all duration-700 ease-in-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
            
            {[1, 2, 3].map((num, i) => (
              <div 
                key={num} 
                className={`flex-1 py-4 md:py-6 text-center border-r last:border-r-0 border-[#E5E7EB] transition-colors duration-500 relative ${
                  step === num ? 'bg-[#FAFAFA]' : 'bg-transparent'
                }`}
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <span className={`text-[10px] md:text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                    step >= num ? 'text-[#0A0C10]' : 'text-[#A3B1C6]'
                  }`}>
                    Tahap 0{num}
                  </span>
                  <span className={`hidden md:block text-xs mt-1 transition-colors duration-300 ${
                    step >= num ? 'text-[#0A0C10]/60' : 'text-transparent'
                  }`}>
                    {stepsTitle[i]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-12 lg:p-16 min-h-[460px] flex flex-col relative bg-[#FAFAFA]/30">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="mb-8 flex items-start gap-3 p-4 bg-red-50 border border-red-100 text-red-600 text-sm"
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <p className="font-medium">{error}</p>
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              
              {/* Step 1: Garment Type */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col h-full justify-center"
                >
                  <div className="mb-10">
                    <h3 className="font-clash text-2xl md:text-3xl text-[#0A0C10] mb-3">Tentukan Kategori Utama</h3>
                    <p className="text-sm text-[#0A0C10]/60 font-light">Pilih basis produk yang akan kami kembangkan untuk Anda.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {garmentTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = formData.garmentType === type.label;
                      return (
                        <button
                          key={type.id}
                          onClick={() => {
                            handleSelect('garmentType', type.label);
                            handleSelect('material', ''); // reset material when garment type changes
                          }}
                          className={`group flex items-start gap-4 p-5 md:p-6 border transition-all duration-300 text-left hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] ${
                            isSelected ? 'border-[#0A0C10] bg-white ring-1 ring-[#0A0C10]' : 'border-[#E5E7EB] bg-white/50 hover:border-[#0A0C10]/30 hover:bg-white'
                          }`}
                        >
                          <div className={`p-3 border transition-colors duration-300 ${isSelected ? 'border-[#0A0C10] text-white bg-[#0A0C10]' : 'border-[#E5E7EB] text-[#A3B1C6] bg-[#FAFAFA] group-hover:border-[#0A0C10]/30 group-hover:text-[#0A0C10]'}`}>
                            <Icon size={24} strokeWidth={1.5} />
                          </div>
                          <div className="flex-1 mt-0.5">
                            <h4 className={`font-medium text-base tracking-wide transition-colors ${isSelected ? 'text-[#0A0C10]' : 'text-[#0A0C10]/80 group-hover:text-[#0A0C10]'}`}>
                              {type.label}
                            </h4>
                            <p className="text-xs text-[#0A0C10]/50 mt-1 font-light leading-relaxed">{type.desc}</p>
                          </div>
                          {isSelected && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-1">
                              <CheckCircle size={20} className="text-[#0A0C10]" />
                            </motion.div>
                          )}
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
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col h-full justify-start"
                >
                  <div className="mb-10">
                    <h3 className="font-clash text-2xl md:text-3xl text-[#0A0C10] mb-3">Spesifikasi Material & Skala</h3>
                    <p className="text-sm text-[#0A0C10]/60 font-light">Konfigurasikan bahan kain dan estimasi produksi massal Anda.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Material Selection */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-[1px] bg-[#0A0C10] opacity-30"></div>
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-[#0A0C10]/60">Pemilihan Material</label>
                      </div>
                      <div className="flex flex-col gap-3">
                        {(materials[garmentTypes.find(t => t.label === formData.garmentType)?.id || 'lainnya'] || materials.lainnya).map((mat) => (
                          <button
                            key={mat}
                            onClick={() => handleSelect('material', mat)}
                            className={`px-5 py-4 border text-sm text-left transition-all duration-300 flex justify-between items-center ${
                              formData.material === mat 
                                ? 'border-[#0A0C10] bg-[#0A0C10] text-white shadow-lg shadow-[#0A0C10]/10' 
                                : 'border-[#E5E7EB] bg-white text-[#0A0C10]/80 hover:border-[#0A0C10]/40'
                            }`}
                          >
                            <span>{mat}</span>
                            {formData.material === mat && <Check size={16} />}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Selection */}
                    <div className="space-y-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-[1px] bg-[#0A0C10] opacity-30"></div>
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-[#0A0C10]/60">Estimasi Kuantitas</label>
                      </div>
                      <div className="relative group">
                        <select 
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#E5E7EB] p-5 pr-12 focus:outline-none focus:border-[#0A0C10] focus:ring-1 focus:ring-[#0A0C10] transition-all rounded-none text-[#0A0C10] font-medium appearance-none cursor-pointer hover:border-[#0A0C10]/40"
                        >
                          <option value="" disabled className="text-gray-400">Pilih rentang kuantitas produksi</option>
                          <option value="50 - 100 Pcs">Micro Batch (50 - 100 Pcs)</option>
                          <option value="101 - 500 Pcs">Small Run (101 - 500 Pcs)</option>
                          <option value="501 - 2000 Pcs">Medium Scale (501 - 2.000 Pcs)</option>
                          <option value="> 2000 Pcs">Mass Production (&gt; 2.000 Pcs)</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#0A0C10]/40 group-focus-within:text-[#0A0C10] transition-colors">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="p-5 bg-white border border-[#E5E7EB] mt-4 flex items-start gap-4">
                         <div className="p-2 bg-[#FAFAFA] border border-[#E5E7EB] text-[#A3B1C6] shrink-0">
                           <Ruler size={18} />
                         </div>
                         <p className="text-xs text-[#0A0C10]/60 font-light leading-relaxed">
                           Ukuran (Sizing) dapat dikonfirmasi pada saat proses sampling. Semakin besar kuantitas produksi yang Anda tentukan, semakin efisien biaya per-unit yang bisa kami tawarkan.
                         </p>
                      </div>
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
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col h-full justify-start"
                >
                  <div className="mb-10">
                    <h3 className="font-clash text-2xl md:text-3xl text-[#0A0C10] mb-3">Penyelesaian Berkas</h3>
                    <p className="text-sm text-[#0A0C10]/60 font-light">Tinggalkan detail kontak untuk menghubungkan Anda secara langsung dengan project manager representatif kami.</p>
                  </div>

                  <div className="space-y-8 bg-white p-6 md:p-8 border border-[#E5E7EB]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative pt-5">
                        <label className={`absolute left-0 transition-all duration-300 font-semibold tracking-widest uppercase pointer-events-none
                          ${formData.name ? '-top-1 text-[10px] text-[#A3B1C6]' : 'top-6 text-xs text-[#0A0C10]/40'}
                        `}>
                          Nama Lengkap/PIC *
                        </label>
                        <input 
                          type="text" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          className="w-full bg-transparent border-0 border-b border-[#E5E7EB] py-2 focus:outline-none focus:border-[#0A0C10] transition-colors rounded-none font-medium text-[#0A0C10]" 
                        />
                      </div>
                      <div className="relative pt-5">
                        <label className={`absolute left-0 transition-all duration-300 font-semibold tracking-widest uppercase pointer-events-none
                          ${formData.company ? '-top-1 text-[10px] text-[#A3B1C6]' : 'top-6 text-xs text-[#0A0C10]/40'}
                        `}>
                          Perusahaan / Brand (Opsional)
                        </label>
                        <input 
                          type="text" 
                          name="company" 
                          value={formData.company} 
                          onChange={handleChange} 
                          className="w-full bg-transparent border-0 border-b border-[#E5E7EB] py-2 focus:outline-none focus:border-[#0A0C10] transition-colors rounded-none font-medium text-[#0A0C10]" 
                        />
                      </div>
                    </div>
                    
                    <div className="relative pt-6">
                      <label className={`absolute left-0 transition-all duration-300 font-semibold tracking-widest uppercase pointer-events-none
                        ${formData.notes ? 'top-0 text-[10px] text-[#A3B1C6]' : 'top-8 text-xs text-[#0A0C10]/40'}
                      `}>
                        Catatan Spesifik / Arahan Desain
                      </label>
                      <textarea 
                        name="notes" 
                        value={formData.notes} 
                        onChange={handleChange} 
                        rows={3} 
                        className="w-full bg-[#FAFAFA] border-0 border-b border-[#E5E7EB] p-4 mt-2 focus:outline-none focus:bg-white focus:border-[#0A0C10] transition-all rounded-none resize-none font-medium text-[#0A0C10] text-sm" 
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="p-6 md:px-10 lg:px-16 bg-white border-t border-[#E5E7EB] flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0 relative z-20">
            {step > 1 ? (
              <button 
                onClick={prevStep} 
                className="group flex items-center gap-3 text-[#0A0C10]/50 hover:text-[#0A0C10] font-medium text-xs tracking-widest uppercase transition-colors py-3 w-full md:w-auto justify-center md:justify-start"
              >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Kembali
              </button>
            ) : (
              <div className="hidden md:block"></div>
            )}

            {step < 3 ? (
              <button 
                onClick={nextStep} 
                className={`w-full md:w-auto bg-[#0A0C10] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center md:justify-start gap-4 transition-all duration-300 ${
                  (step === 1 && !formData.garmentType) ? 'opacity-50 hover:bg-[#0A0C10] cursor-not-allowed' : 'hover:bg-[#C2A878] hover:text-[#0A0C10] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(194,168,120,0.5)]'
                }`}
              >
                Selanjutnya <ArrowRight size={16} />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="w-full md:w-auto bg-[#0A0C10] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 flex items-center justify-center md:justify-start gap-4 hover:bg-[#25D366] hover:text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(37,211,102,0.4)]"
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
