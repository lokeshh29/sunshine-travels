import { CheckCircle } from 'lucide-react'

export default function Toast({ message }) {
  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 animate-fade-up">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4 flex items-center gap-3 max-w-sm">
        <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle size={18} className="text-green-500" />
        </div>
        <p className="text-sm font-semibold text-[#0B1E36]">{message}</p>
      </div>
    </div>
  )
}
