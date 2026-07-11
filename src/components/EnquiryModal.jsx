import { X, User, Phone, Mail, Calendar, Users, MessageSquare, Send, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function EnquiryModal({ onClose, packageName = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageName: packageName,
    travelDate: '',
    travelers: 1,
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let text = `*New Package Enquiry*\n`
    text += `Name: ${formData.name}\n`
    text += `Phone: ${formData.phone}\n`
    text += `Email: ${formData.email}\n`
    if (formData.packageName) text += `Package: ${formData.packageName}\n`
    text += `Date: ${formData.travelDate}\n`
    text += `Travelers: ${formData.travelers}\n`
    if (formData.message) text += `Message: ${formData.message}`
    
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/919876543210?text=${encodedText}`, '_blank')
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(11, 30, 54, 0.85)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">

        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#0B1E36] to-[#1a3a68] p-7 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3 mb-1 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg">
              <MapPin size={20} className="text-white" />
            </div>
            <div>
              <p className="text-amber-400 text-xs font-bold tracking-widest uppercase">Get In Touch</p>
              <h2 className="text-2xl font-extrabold text-white leading-tight">Plan Your Trip</h2>
            </div>
          </div>
          {packageName && (
            <div className="mt-3 relative z-10 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">{packageName}</span>
            </div>
          )}
        </div>

        {/* Form */}
        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send size={36} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1E36] mb-2">Enquiry Sent!</h3>
            <p className="text-slate-500">Our team will reach out to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">

            {/* Name + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Your Name</label>
                <div className="relative">
                  <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Phone</label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Travel Date + Travelers */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Travel Date</label>
                <div className="relative">
                  <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Travelers</label>
                <div className="relative">
                  <Users size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    min="1"
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Message <span className="text-slate-400 normal-case font-normal">(Optional)</span></label>
              <div className="relative">
                <MessageSquare size={15} className="absolute left-3 top-3 text-slate-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us your travel preferences..."
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-orange-400/40 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Send size={18} />
              Send Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
