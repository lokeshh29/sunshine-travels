import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop',
      badge: '★ MOST POPULAR',
      title: 'Discover the Magic of Coorg',
      subtitle: 'Misty hills, aromatic coffee plantations & breathtaking waterfalls await you.',
      location: 'Karnataka, India',
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
      badge: 'WEEKEND GETAWAY',
      title: 'Chikmagalur — Coffee Country',
      subtitle: 'Trek the highest peaks, sip freshly brewed coffee & unwind in nature\'s lap.',
      location: 'Karnataka, India',
    },
    {
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&h=900&fit=crop',
      badge: 'HERITAGE TOURS',
      title: 'Mysore — City of Palaces',
      subtitle: 'Walk through royal heritage, vibrant silk bazaars & timeless culture.',
      location: 'Karnataka, India',
    },
    {
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&h=900&fit=crop',
      badge: 'EXPLORE INDIA',
      title: 'Kerala Backwater Dreams',
      subtitle: 'Cruise through serene backwaters on a traditional houseboat.',
      location: 'Kerala, India',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleSlideChange = (getNext) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(getNext)
      setIsTransitioning(false)
    }, 400)
  }

  const nextSlide = () => handleSlideChange((prev) => (prev + 1) % slides.length)
  const prevSlide = () => handleSlideChange((prev) => (prev - 1 + slides.length) % slides.length)

  const slide = slides[currentSlide]

  return (
    <div className="relative h-[85vh] md:h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover scale-105"
            style={{
              animation: idx === currentSlide ? 'heroKen 20s ease-in-out infinite alternate' : 'none',
            }}
          />
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E36]/60 via-[#0B1E36]/30 to-[#0B1E36]/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/50 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <div
          className={`max-w-4xl mx-auto transition-all duration-500 ${
            isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-5 py-2 mb-6">
            <Sparkles size={14} className="text-amber-400" />
            <span className="text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              {slide.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-5 leading-[1.1] tracking-tight">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl text-slate-200/90 mb-4 max-w-2xl mx-auto font-medium leading-relaxed">
            {slide.subtitle}
          </p>

          {/* Location */}
          <div className="inline-flex items-center gap-2 text-amber-400/90 mb-8">
            <MapPin size={16} />
            <span className="text-sm font-semibold tracking-wide">{slide.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/packages" className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-400 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center inline-block">
              <span className="relative z-10">Explore Packages</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 w-full sm:w-auto text-center inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 pb-6 md:pb-10">
          <div className="flex items-center justify-between">
            {/* Slide Indicators */}
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSlideChange(() => idx)}
                  className={`transition-all duration-500 rounded-full ${
                    idx === currentSlide
                      ? 'w-10 h-2 bg-amber-400'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Badge */}
      <div className="absolute top-28 md:top-8 right-4 md:right-8 z-30">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-center">
          <p className="text-amber-400 text-xl font-extrabold leading-none">15+</p>
          <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider mt-1">Years Trusted</p>
        </div>
      </div>
    </div>
  )
}
