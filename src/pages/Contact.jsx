import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react'
import Toast from '../components/Toast'

export default function Contact() {
  const [showToast, setShowToast] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', destination: '', travelDate: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', destination: '', travelDate: '', message: '' })
    }, 3000)
  }

  const contactCards = [
    { icon: Phone, title: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210', color: 'text-orange-500', bg: 'bg-orange-50' },
    { icon: Mail, title: 'Email', value: 'info@sunshineholidays.com', href: 'mailto:info@sunshineholidays.com', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: MapPin, title: 'Address', value: 'Anna Salai, Chennai, Tamil Nadu', href: '#map', color: 'text-green-500', bg: 'bg-green-50' },
    { icon: MessageCircle, title: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  ]

  const hours = [
    { day: 'Monday - Friday', time: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'By Appointment' },
  ]

  const inputClass = "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
  const labelClass = "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5"

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-72 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=600&fit=crop" alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-2">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">Contact Us</h1>
          <p className="text-slate-300 text-lg max-w-xl">Our travel experts are here to help plan your perfect trip</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <a key={idx} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="group bg-white rounded-3xl p-7 shadow-sm border border-slate-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 block">
                  <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={26} className={card.color} />
                  </div>
                  <h3 className="font-extrabold text-[#0B1E36] mb-2">{card.title}</h3>
                  <p className={`text-sm font-medium ${card.color}`}>{card.value}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="px-4 pb-6">
        <div className="max-w-7xl mx-auto">
          <iframe
            width="100%"
            height="360"
            style={{ border: 0, borderRadius: '24px' }}
            loading="lazy"
            allowFullScreen=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0699046476276!2d80.27325417346396!3d12.971598587359267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f77777777777%3A0x5e365b1c0d5c0d5c!2sAnna%20Salai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
          ></iframe>
        </div>
      </section>

      {/* Form + Hours Side by Side */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">Drop a Message</span>
              <h2 className="text-3xl font-extrabold text-[#0B1E36] mt-2 mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-extrabold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-green-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Destination Interested</label>
                      <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g., Kerala, Bali" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Travel Date</label>
                      <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Tell us about your travel plans..." className={inputClass + ' resize-none'} />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-orange-400/40 hover:scale-[1.01] transition-all">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Business Hours + Quick Help */}
            <div className="space-y-6">
              <div className="bg-[#0B1E36] rounded-3xl p-7 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center">
                    <Clock size={20} className="text-amber-400" />
                  </div>
                  <h3 className="text-xl font-extrabold">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  {hours.map((h, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                      <span className="text-slate-300 text-sm">{h.day}</span>
                      <span className="text-amber-400 font-bold text-sm">{h.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-sm mt-5 pt-4 border-t border-white/10">
                  🕐 24/7 emergency support during your travels
                </p>
              </div>

              <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 space-y-4">
                <h3 className="text-lg font-extrabold text-[#0B1E36]">Quick Help</h3>
                {[{ icon: '📋', title: 'Common Questions', desc: 'Find answers to FAQs' }, { icon: '🎫', title: 'Booking Info', desc: 'Booking process & policies' }, { icon: '🛡️', title: 'Safety & Security', desc: 'Your safety is our priority' }].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-[#0B1E36] text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {showToast && <Toast message="Thank you! We'll get back to you within 24 hours." />}
    </div>
  )
}
