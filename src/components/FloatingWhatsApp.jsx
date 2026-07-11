import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-8 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse rings */}
      <div className="absolute inset-0 bg-green-500/30 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
      <div className="absolute -inset-1 bg-green-500/20 rounded-full animate-pulse" />

      {/* Button */}
      <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-110 transition-all duration-300">
        <MessageCircle size={26} />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#0B1E36] text-white text-xs font-bold px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
        Chat with us
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#0B1E36]" />
      </div>
    </a>
  )
}
