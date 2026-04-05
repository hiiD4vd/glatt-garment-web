import React from 'react';
import { Heart, ExternalLink, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section id="layanan" className="bg-[#FAFAFA] text-gray-900 py-24 md:py-32 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* BROWSE BY CATEGORIES SECTION */}
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <h2 className="font-clash text-3xl md:text-4xl font-medium tracking-tight">Kategori Utama Produksi</h2>
                        <div className="flex flex-wrap gap-3 text-xs font-semibold">
                            <button className="px-5 py-2.5 rounded-full bg-gray-900 text-white tracking-wider hover:bg-black transition-colors shadow-sm">SEMUA</button>
                            <button className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-500 hover:border-gray-400 hover:text-gray-900 tracking-wider transition-colors shadow-sm">PAKAIAN</button>
                            <button className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-500 hover:border-gray-400 hover:text-gray-900 tracking-wider transition-colors shadow-sm">AKSESORIS</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* Kategori 1 */}
                        <motion.div 
                          whileHover={{ scale: 0.98 }}
                          className="relative bg-white rounded-2xl h-48 md:h-64 flex items-end p-4 overflow-hidden group cursor-pointer border border-gray-200/80 shadow-sm"
                        >
                            <img src="/images/cat_kaos_1775381003755.png" alt="KAOS & POLO" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] md:text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10 tracking-widest uppercase">KAOS & POLO</span>
                        </motion.div>

                        {/* Kategori 2 */}
                        <motion.div 
                          whileHover={{ scale: 0.98 }}
                          className="relative bg-white rounded-2xl h-48 md:h-64 flex items-end p-4 overflow-hidden group cursor-pointer border border-gray-200/80 shadow-sm"
                        >
                            <img src="/images/cat_kemeja_1775381016565.png" alt="KEMEJA / PDH" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] md:text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10 tracking-widest uppercase">KEMEJA / PDH</span>
                        </motion.div>

                        {/* Kategori 3 */}
                        <motion.div 
                          whileHover={{ scale: 0.98 }}
                          className="relative bg-white rounded-2xl h-48 md:h-64 flex items-end p-4 overflow-hidden group cursor-pointer border border-gray-200/80 shadow-sm"
                        >
                            <img src="/images/cat_outerwear_1775381032946.png" alt="OUTERWEAR" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] md:text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10 tracking-widest uppercase">OUTERWEAR</span>
                        </motion.div>

                        {/* Kategori 4 */}
                        <motion.div 
                          whileHover={{ scale: 0.98 }}
                          className="relative bg-white rounded-2xl h-48 md:h-64 flex items-end p-4 overflow-hidden group cursor-pointer border border-gray-200/80 shadow-sm"
                        >
                            <img src="/images/cat_merch_1775381048792.png" alt="MERCH & AKSESORIS" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] md:text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10 tracking-widest uppercase">MERCH MANDIRI</span>
                        </motion.div>
                    </div>
                </div>

                {/* ACCESSORIES & EXTRAS */}
                <div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                        <div className="flex-1">
                          <h2 className="font-clash text-3xl md:text-4xl font-medium tracking-tight whitespace-nowrap">Produksi Ekstra & Aksesoris</h2>
                          <p className="text-gray-500 mt-2 text-sm leading-relaxed">Melengkapi kebutuhan merchandise dan identitas operasional<br className="hidden lg:block"/> dengan standar studio-grade quality.</p>
                        </div>
                        <div className="flex flex-wrap gap-2 md:gap-3 text-xs font-semibold md:ml-auto">
                            <button className="px-5 py-2.5 rounded-full bg-gray-900 text-white tracking-wider hover:bg-black transition-colors shadow-sm">SEMUA</button>
                            <button className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-500 hover:border-gray-400 hover:text-gray-900 tracking-wider transition-colors shadow-sm">APPRON</button>
                            <button className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-500 hover:border-gray-400 hover:text-gray-900 tracking-wider transition-colors shadow-sm">HANDUK</button>
                            <button className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-500 hover:border-gray-400 hover:text-gray-900 tracking-wider transition-colors shadow-sm">GOODYBAG</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* ITEM 1 */}
                        <div className="group cursor-pointer">
                            <div className="relative bg-white rounded-3xl aspect-[4/5] mb-4 flex items-center justify-center overflow-hidden border border-gray-200/80 shadow-sm">
                                <img src="/images/acc_apron_1775381070830.png" alt="Appron Profesional" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-md">
                                    <Heart size={18} strokeWidth={2} />
                                </button>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg">Appron Profesional</h3>
                            <p className="text-gray-500 text-sm mt-1">Standar Koki & Barista</p>
                        </div>

                        {/* ITEM 2 (Featured - Span 2) */}
                        <div className="group cursor-pointer sm:col-span-2">
                            <div className="relative bg-white rounded-3xl aspect-[4/5] sm:aspect-[2/1] lg:aspect-[8/5] mb-4 flex items-center justify-center overflow-hidden border border-gray-200/80 shadow-sm">
                                <img src="/images/acc_totebag_1775381088369.png" alt="Goodybag & Tas Kanvas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                                <button className="absolute top-4 right-4 bg-red-500 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md z-10 hover:bg-red-600 transition-colors">
                                    <Heart size={18} fill="currentColor" strokeWidth={0} />
                                </button>
                                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center text-gray-900 hover:bg-white hover:scale-110 shadow-lg transition-all z-10">
                                    <ExternalLink size={20} strokeWidth={2} />
                                </button>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-xl">Goodybag & Tas Kanvas</h3>
                            <p className="text-gray-500 text-sm mt-1">Event Seminar & Reuni</p>
                        </div>

                        {/* ITEM 3 */}
                        <div className="group cursor-pointer">
                            <div className="relative bg-white rounded-3xl aspect-[4/5] mb-4 flex items-center justify-center overflow-hidden border border-gray-200/80 shadow-sm">
                                <img src="/images/acc_towel_1775381105019.png" alt="Handuk Promosi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-md">
                                    <Heart size={18} strokeWidth={2} />
                                </button>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg">Handuk Promosi</h3>
                            <p className="text-gray-500 text-sm mt-1">Bordir Logo Corporate</p>
                        </div>

                        {/* ITEM 4 */}
                        <div className="group cursor-pointer">
                            <div className="relative bg-white rounded-3xl aspect-[4/5] mb-4 flex items-center justify-center overflow-hidden border border-gray-200/80 shadow-sm">
                                <img src="/images/acc_lanyard_1775381120986.png" alt="Lanyard / Tali ID Card" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-md">
                                    <Heart size={18} strokeWidth={2} />
                                </button>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg">Lanyard / Tali ID Card</h3>
                            <p className="text-gray-500 text-sm mt-1">Full Color Printing</p>
                        </div>

                        {/* ITEM 5 (Reusing Merch for missing generation) */}
                        <div className="group cursor-pointer">
                            <div className="relative bg-white rounded-3xl aspect-[4/5] mb-4 flex items-center justify-center overflow-hidden border border-gray-200/80 shadow-sm">
                                <img src="/images/cat_merch_1775381048792.png" alt="Slayer & Bandana" className="absolute inset-0 w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-md">
                                    <Heart size={18} strokeWidth={2} />
                                </button>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg">Slayer & Bandana</h3>
                            <p className="text-gray-500 text-sm mt-1">Merchandise Komunitas</p>
                        </div>

                        {/* ITEM 6 (Reusing general placeholder for patch) */}
                        <div className="group cursor-pointer">
                            <div className="relative bg-white rounded-3xl aspect-[4/5] mb-4 flex items-center justify-center overflow-hidden border border-gray-200/80 shadow-sm">
                                <img src="/images/cat_merch_1775381048792.png" alt="Emblem / Patch Bordir" className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105" />
                                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-md">
                                    <Heart size={18} strokeWidth={2} />
                                </button>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg">Emblem / Patch Bordir</h3>
                            <p className="text-gray-500 text-sm mt-1">Aplikasi Bordir Timbul</p>
                        </div>

                        {/* ITEM 7 (Reusing generic placeholder for drawstring) */}
                        <div className="group cursor-pointer">
                            <div className="relative bg-white rounded-3xl aspect-[4/5] mb-4 flex items-center justify-center overflow-hidden border border-gray-200/80 shadow-sm">
                                <img src="/images/acc_totebag_1775381088369.png" alt="Tas Ransel / Serut" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-md">
                                    <Heart size={18} strokeWidth={2} />
                                </button>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-lg">Tas Ransel / Serut</h3>
                            <p className="text-gray-500 text-sm mt-1">Peralatan Kontingen</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
