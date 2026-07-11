import { Phone, MessageCircle, Sparkles } from 'lucide-react'
import { useState } from 'react'
import EnquiryModal from './EnquiryModal'

export default function MobileBottomBar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-slate-200/60 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}>
        <div className="grid grid-cols-3">
          <a
            href="tel:+919876543210"
            className="flex flex-col items-center gap-1 py-3 text-[#0B1E36] hover:text-orange-500 transition-colors active:bg-slate-50"
          >
            <Phone size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-3 text-green-600 hover:text-green-700 transition-colors active:bg-green-50"
          >
            <MessageCircle size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col items-center gap-1 py-3 text-orange-500 hover:text-orange-600 transition-colors active:bg-orange-50"
          >
            <Sparkles size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Enquire</span>
          </button>
        </div>
      </div>
      {isModalOpen && <EnquiryModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
