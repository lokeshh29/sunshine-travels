import { Star, Quote } from 'lucide-react'
import { useScrollAnimation } from '../utils/useScrollAnimation'

export default function TestimonialCard({ name, location, review, rating }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl p-7 shadow-md border border-slate-100/50 transition-all duration-700 hover:-translate-y-1 hover:shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Quote icon */}
      <div className="w-10 h-10 bg-orange-50 rounded-2xl flex items-center justify-center mb-5">
        <Quote size={18} className="text-orange-500" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Review */}
      <p className="text-slate-600 mb-6 leading-relaxed text-[15px]">
        "{review}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-[#0B1E36] text-sm">{name}</p>
          <p className="text-xs text-slate-400 font-medium">{location}</p>
        </div>
      </div>
    </div>
  )
}
