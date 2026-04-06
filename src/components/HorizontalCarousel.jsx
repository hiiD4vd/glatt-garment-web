import React, { useState, useRef } from 'react';

const mockCarouselData = [
  {
    id: 1,
    imageA: "/images/model (2).png",
    imageB: "/images/model (1).png",
    title: "Karakter Operator Pabrik"
  },
  {
    id: 2,
    imageA: "/images/model (4).png",
    imageB: "/images/model (3).png",
    title: "Pakaian Kasual / Custom Sablon"
  },
  {
    id: 3,
    imageA: "/images/model (6).png",
    imageB: "/images/model (5).png",
    title: "Seragam Kasual / Polo Custom"
  },
  {
    id: 4,
    imageA: "/images/model (8).png",
    imageB: "/images/model (7).png",
    title: "Pakaian Dinas Keamanan"
  },
  {
    id: 5,
    imageA: "/images/model (10).png",
    imageB: "/images/model (9).png",
    title: "Kemeja PDL Lapangan"
  },
  {
    id: 6,
    imageA: "/images/model (12).png",
    imageB: "/images/model (11).png",
    title: "Seragam Tambang / Proyek"
  },
  {
    id: 7,
    imageA: "/images/model (13).png",
    imageB: "/images/model (14).png",
    title: "Seragam PDH / Pakaian Dinas Harian"
  },
  {
    id: 8,
    imageA: "/images/model (16).png",
    imageB: "/images/model (15).png",
    title: "Jaket Varsity / Kampus"
  },
  {
    id: 9,
    imageA: "/images/model (18).png",
    imageB: "/images/model (17).png",
    title: "Jaket Hoodie & Training"
  },
  {
    id: 10,
    imageA: "/images/model (20).png",
    imageB: "/images/model (19).png",
    title: "Seragam Koki / Chef Jacket"
  }
];

export default function HorizontalCarousel({ onProductSelect }) {
  const [hoveredItemText, setHoveredItemText] = useState(null);
  const cursorRef = useRef(null);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);

  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      // Adding a slight offset to position the cursor text correctly relative to the pointer
      const x = e.clientX + 15;
      const y = e.clientY + 15;
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-20 flex flex-col items-center">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-widest text-[#0A0C10]">Production Portfolios</h2>
        <p className="text-gray-500 mt-2 font-light tracking-wide">Eksplorasi mahakarya manufaktur kami</p>
      </div>

      {/* Overflow container */}
      <div 
        className="relative w-full max-w-[100vw] overflow-hidden flex group carousel-container pb-8"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHoveringContainer(true)}
        onMouseLeave={() => {
          setIsHoveringContainer(false);
          setHoveredItemText(null);
        }}
      >
        {/* Floating Cursor Tracker */}
        {isHoveringContainer && hoveredItemText && (
          <div 
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-50 bg-[#A3B1C6] text-[#0A0C10] px-5 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center whitespace-nowrap"
            style={{ 
              willChange: 'transform'
            }}
          >
            {hoveredItemText}
          </div>
        )}
        
        {/* Track 1 */}
        <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          {mockCarouselData.map((item) => (
            <CarouselItem 
              key={`first-${item.id}`} 
              item={item} 
              onSelect={onProductSelect} 
              onHoverChange={setHoveredItemText}
            />
          ))}
        </div>
        
        {/* Track 2 (Clone for infinite loop effect) */}
        <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          {mockCarouselData.map((item) => (
            <CarouselItem 
              key={`second-${item.id}`} 
              item={item} 
              onSelect={onProductSelect}
              onHoverChange={setHoveredItemText}
            />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

const CarouselItem = ({ item, onSelect, onHoverChange }) => {
  return (
    <div 
      onClick={() => onSelect && onSelect(item)}
      onMouseEnter={() => onHoverChange(item.title)}
      onMouseLeave={() => onHoverChange(null)}
      className="relative h-[450px] w-[253px] flex-shrink-0 mx-2 cursor-pointer overflow-hidden rounded-xl bg-transparent transition-transform duration-300 hover:scale-[1.02]"
    >
      <img 
        src={item.imageA} 
        alt={item.title} 
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img 
        src={item.imageB} 
        alt={`${item.title} alternate view`} 
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
};