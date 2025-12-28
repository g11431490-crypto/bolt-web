import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  '/d21f78c94ed8ce528eb39ff90f044eca.mp4',
  '/7aa3c5909f647de695c80917cb0f8c2f.mp4',
  '/generated_file_june_16,_2025_-_1_12am.mp4',
  '/10f86aaa-77b4-438d-afed-d4449ade5173.mp4',
  '/generated_file_june_16,_2025_-_1_12am copy.mp4',
  '/d21f78c94ed8ce528eb39ff90f044eca copy.mp4',
  '/7aa3c5909f647de695c80917cb0f8c2f copy.mp4',
  '/10f86aaa-77b4-438d-afed-d4449ade5173 copy.mp4',
  '/7aa3c5909f647de695c80917cb0f8c2f copy copy.mp4',
];

export default function BrandCreatives() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.scrollWidth / videos.length;
    carouselRef.current.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : videos.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < videos.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        }
      });
    }, options);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-950/50 border border-purple-500/30 rounded-full mb-6">
            <span className="text-sm text-purple-300">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Brand Creatives</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Premium video content crafted to captivate and convert
          </p>
        </div>

        <div className="relative group">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/80 border border-purple-500/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-purple-900/50 hover:border-purple-500/50 transition-all duration-300 -translate-x-6"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/80 border border-purple-500/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-purple-900/50 hover:border-purple-500/50 transition-all duration-300 translate-x-6"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
            className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[25vw] aspect-[9/16] relative group/video"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl pointer-events-none z-10"></div>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video}
                  className="w-full h-full object-cover rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.play().catch(() => {});
                  }}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-cyber-purple to-cyber-blue'
                  : 'w-2 bg-purple-500/30 hover:bg-purple-500/50'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
