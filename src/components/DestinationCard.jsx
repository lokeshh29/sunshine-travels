import { MapPin } from 'lucide-react'
import { useScrollAnimation } from '../utils/useScrollAnimation'

export default function DestinationCard({ image, name, tagline, price }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-500">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/90 via-[#0B1E36]/30 to-transparent" />

        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 to-amber-400/0 group-hover:from-orange-500/10 group-hover:to-amber-400/5 transition-all duration-500" />

        {/* Price badge */}
        <div className="absolute top-5 right-5 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-wide">From</p>
          <p className="text-white font-extrabold text-lg">₹{price.toLocaleString()}</p>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-7">
          <div className="flex items-center gap-1.5 text-amber-400/80 mb-2">
            <MapPin size={13} />
            <span className="text-xs font-semibold uppercase tracking-wider">India</span>
          </div>
          <h3 className="text-3xl font-extrabold text-white mb-1.5 group-hover:text-amber-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-slate-300 mb-5 font-medium">{tagline}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-extrabold text-amber-400">
              From ₹{price.toLocaleString()}
            </span>
            <button className="bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white hover:text-[#0B1E36] px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 text-white">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
