import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei'

// 3D Background Component
function AnimatedSphere({ color }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial 
          color={color} 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.8}
          roughness={0.2}
          distort={0.4} 
          speed={2} 
        />
      </mesh>
    </Float>
  )
}

function FloatingShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={3} position={[-4, 2, -2]}>
        <mesh scale={0.8}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5} position={[4, -2, -1]}>
        <mesh scale={1.2}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </>
  )
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
      badge: 'TOP DESTINATIONS',
      title: 'Where Every Sunset Tells a Story',
      subtitle: 'Curated tour packages across India\'s most breathtaking destinations.',
      color: '#f59e0b' // Amber
    },
    {
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&h=900&fit=crop',
      badge: 'HERITAGE TOURS',
      title: 'Walk Through Living History',
      subtitle: 'Explore the magnificent Taj Mahal and its timeless beauty.',
      color: '#3b82f6' // Blue
    },
    {
      image: 'https://images.unsplash.com/photo-1537225228614-b4fad34a82ff?w=1600&h=900&fit=crop',
      badge: 'INTERNATIONAL',
      title: 'Your Passport to Paradise',
      subtitle: 'Discover tropical wonders in Bali, Indonesia.',
      color: '#10b981' // Emerald
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Slower transition for a more relaxed premium feel
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-[#0B1E36]">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color={slides[currentSlide].color} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <AnimatedSphere color={slides[currentSlide].color} />
          <FloatingShapes />
          
          <Environment preset="city" />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
        </Canvas>
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E36]/50 via-transparent to-[#0B1E36] z-10 pointer-events-none"></div>

      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center text-center px-4 md:px-8 ${idx === currentSlide ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
          {/* Glassmorphic Content Container */}
          <div className={`transition-all duration-1000 transform ${idx === currentSlide ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}
             bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-16 shadow-[0_0_40px_rgba(0,0,0,0.3)] max-w-5xl w-full relative overflow-hidden`}
          >
            {/* Background Image blend inside the glass container for extra aesthetic */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <img src={slide.image} alt="texture" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur text-white text-xs md:text-sm font-bold tracking-[0.2em] mb-6 border border-white/30 uppercase shadow-lg">
                {slide.badge}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-6 tracking-tight drop-shadow-lg leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-slate-200/90 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <button className="bg-white text-[#0B1E36] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  Explore Packages
                </button>
                <button className="bg-transparent border-2 border-white/50 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 hover:border-white transition-all duration-300 w-full sm:w-auto backdrop-blur">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#0B1E36] hover:scale-110 transition-all duration-300 z-30 shadow-lg"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#0B1E36] hover:scale-110 transition-all duration-300 z-30 shadow-lg"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30 bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-full relative overflow-hidden ${idx === currentSlide
                ? 'w-10 h-2 bg-white'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
