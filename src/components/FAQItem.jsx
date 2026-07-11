import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-orange-200 bg-orange-50/30 shadow-sm'
          : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors duration-200"
      >
        <span className={`font-bold text-[15px] transition-colors duration-200 ${isOpen ? 'text-orange-600' : 'text-[#0B1E36]'}`}>
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen
              ? 'bg-orange-500 text-white rotate-180'
              : 'bg-slate-100 text-slate-500'
          }`}
        >
          <ChevronDown size={16} />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] pb-5' : 'max-h-0'
        }`}
      >
        <div className="px-6 text-slate-600 text-[15px] leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}
