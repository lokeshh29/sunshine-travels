import { Clock, Star } from 'lucide-react'
import { useState } from 'react'
import EnquiryModal from './EnquiryModal'
import Tilt from 'react-parallax-tilt'

export default function PackageCard({ image, destination, packageName, duration, price, highlights }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#ffffff"
        glarePosition="all"
        scale={1.02}
        transitionSpeed={1500}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100/50 hover:shadow-[0_20px_40px_rgba(11,30,54,0.15)] transition-shadow duration-500 transform-gpu flex flex-col h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden flex-shrink-0" style={{ transform: 'translateZ(20px)' }}>
          <img
            src={image}
            alt={packageName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/80 via-transparent to-transparent"></div>

          {/* Destination badge */}
          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
            {destination}
          </div>

          {/* Price badge */}
          <div className="absolute top-4 right-4 bg-amber-400 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-extrabold shadow-lg">
            From ₹{price.toLocaleString()}
          </div>

          {/* Stars */}
          <div className="absolute bottom-4 left-4 flex gap-1 bg-black/20 backdrop-blur px-2 py-1 rounded-full">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-slate-50" style={{ transform: 'translateZ(30px)' }}>
          <h3 className="text-xl font-extrabold text-[#0B1E36] mb-3 group-hover:text-amber-500 transition-colors drop-shadow-sm">{packageName}</h3>

          <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold mb-5 bg-white border border-slate-100 py-1.5 px-3 rounded-lg w-max">
            <Clock size={16} className="text-amber-500" />
            <span>{duration}</span>
          </div>

          <div className="space-y-2 mb-6 flex-grow">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-sm">✓</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#0B1E36] text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-xl hover:bg-[#153259] hover:-translate-y-1 active:scale-95 transition-all duration-300 mt-auto"
          >
            Enquire Now
          </button>
        </div>
      </Tilt>

      {isModalOpen && (
        <EnquiryModal packageName={packageName} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}
