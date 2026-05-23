import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useScrollAnimation } from '../utils/useScrollAnimation'

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div 
      ref={ref}
      className={`border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 group ${
        isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? '0s' : '0s'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300 group"
      >
        <span className="font-bold text-dark text-left group-hover:text-primary transition-colors duration-300">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-primary transition-all duration-500 transform ${isOpen ? 'rotate-180 scale-125' : 'group-hover:rotate-12'}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gradient-to-r from-light to-white border-t-2 border-primary/20 text-gray-700 animate-slideInUp">
          {answer}
        </div>
      )}
    </div>
  )
}
