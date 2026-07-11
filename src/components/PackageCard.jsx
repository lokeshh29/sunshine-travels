import { Clock, Star } from 'lucide-react'
import { useState } from 'react'
import EnquiryModal from './EnquiryModal'

export default function PackageCard({ image, destination, packageName, duration, price, highlights }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={packageName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/70 via-transparent to-transparent" />

          {/* Destination badge */}
          <div className="absolute top-4 left-4 bg-white/15 backdrop-blur-md border border-white/25 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
            {destination}
          </div>

          {/* Price badge */}
          <div className="absolute top-4 right-4 bg-amber-400 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-extrabold shadow-lg">
            From ₹{price.toLocaleString()}
          </div>

          {/* Stars */}
          <div className="absolute bottom-4 left-4 flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-extrabold text-[#0B1E36] mb-3 group-hover:text-orange-500 transition-colors duration-300">
            {packageName}
          </h3>

          <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold mb-5 bg-slate-50 py-2 px-3 rounded-xl w-max border border-slate-100">
            <Clock size={15} className="text-orange-500" />
            <span>{duration}</span>
          </div>

          <div className="space-y-2.5 mb-6 flex-grow">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                <span className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-[#0B1E36] to-[#1a3a68] text-white py-3.5 rounded-2xl font-bold text-sm hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 mt-auto shadow-md"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <EnquiryModal packageName={packageName} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}
