import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { useScrollAnimation } from '../utils/useScrollAnimation'
import Tilt from 'react-parallax-tilt'

export default function DestinationCard({ image, name, tagline, price }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div 
      ref={ref}
      className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        scale={1.02}
        transitionSpeed={2000}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-shadow duration-300 transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        
        {/* Modern dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/90 via-[#0B1E36]/40 to-transparent"></div>
        
        {/* Glassmorphic border */}
        <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Content popping out in 3D */}
        <div 
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          style={{ transform: 'translateZ(40px)' }}
        >
          <h3 className="text-3xl font-extrabold mb-1 group-hover:text-amber-400 transition-colors duration-300 drop-shadow-md">{name}</h3>
          <p className="text-sm text-slate-200 mb-4 drop-shadow-md font-medium">{tagline}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-extrabold text-amber-400 drop-shadow">
              From ₹{price.toLocaleString()}
            </span>
            <button className="bg-white/20 backdrop-blur border border-white/40 hover:bg-white hover:text-[#0B1E36] px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
              Explore
            </button>
          </div>
        </div>
      </Tilt>
    </div>
  )
}
