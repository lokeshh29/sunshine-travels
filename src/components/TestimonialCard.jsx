import { Star } from 'lucide-react'
import { useScrollAnimation } from '../utils/useScrollAnimation'

export default function TestimonialCard({ name, location, review, rating }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div 
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-primary hover:shadow-xl transition-all duration-500 transform card-hover ${
        isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? '0s' : '0s'
      }}
    >
      <div className="flex gap-1 mb-3 transform group-hover:scale-125 transition-transform duration-300 origin-left">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent hover:rotate-180 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic relative group-hover:text-dark transition-colors duration-300">
        <span className="text-4xl text-primary absolute -top-4 -left-2 opacity-20">"</span>
        {review}
      </p>
      <div className="transform group-hover:translate-x-2 transition-transform duration-300">
        <p className="font-bold text-dark group-hover:text-primary transition-colors duration-300">{name}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
  )
}
