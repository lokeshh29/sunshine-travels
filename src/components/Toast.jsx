import { CheckCircle } from 'lucide-react'

export default function Toast({ message }) {
  return (
    <div className="fixed bottom-24 md:bottom-8 left-4 md:right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50 animate-slideInUp">
      <CheckCircle size={24} />
      <p className="font-medium">{message}</p>
    </div>
  )
}
