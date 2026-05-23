import { Phone, MessageCircle, Star } from 'lucide-react'
import { useState } from 'react'
import EnquiryModal from './EnquiryModal'

export default function MobileBottomBar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg flex gap-0">
        <a
          href="tel:+919876543210"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-dark hover:bg-light transition border-r border-gray-200"
        >
          <Phone size={20} />
          <span className="text-xs font-medium">Call</span>
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-green-600 hover:bg-light transition border-r border-gray-200"
        >
          <MessageCircle size={20} />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-primary hover:bg-light transition"
        >
          <Star size={20} />
          <span className="text-xs font-medium">Enquire</span>
        </button>
      </div>
      {isModalOpen && <EnquiryModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
