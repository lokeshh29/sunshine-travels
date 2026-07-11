import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react'
import Toast from '../components/Toast'

export default function Contact() {
  const [showToast, setShowToast] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', destination: '', travelDate: '', message: '' })
  const handleChange = (e) => { setFormData(p => ({ ...p, [e.target.name]: e.target.value })) }
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    
    let text = `*New Contact Message*\n`
    text += `Name: ${formData.name}\n`
    text += `Phone: ${formData.phone}\n`
    text += `Email: ${formData.email}\n`
    if (formData.destination) text += `Destination: ${formData.destination}\n`
    if (formData.travelDate) text += `Date: ${formData.travelDate}\n`
    text += `Message: ${formData.message}`
    
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/919876543210?text=${encodedText}`, '_blank')
    
    setSubmitted(true); 
    setTimeout(() => { 
      setSubmitted(false); 
      setFormData({ name: '', phone: '', email: '', destination: '', travelDate: '', message: '' }) 
    }, 3000) 
  }
  const cards = [
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
  const ic = "w-full px-4 py-3 bg-white/50 border border-white/20 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1E36]/50 focus:border-[#0B1E36] transition-all"
  const lc = "block text-[11px] font-bold text-[#0B1E36]/60 uppercase tracking-widest mb-1.5"
  return (
    <div className="bg-[#F7D794]">
      <section className="relative h-64 md:h-72 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=600&fit=crop" alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="inline-flex items-center gap-2 bg-[#F5CD7A]/20 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#F5CD7A]/30 w-fit">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">Contact Us</h1>
          <p className="text-[#F7D794] text-lg max-w-xl">Our travel experts are here to help plan your perfect trip</p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => { const I = c.icon; return (
            <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="group bg-white/50 rounded-3xl p-7 border border-white/20 text-center hover:bg-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block">
              <div className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}><I size={22} className={c.color} /></div>
              <h3 className="font-extrabold text-[#0B1E36] mb-1 text-sm">{c.title}</h3>
              <p className={`text-sm font-medium ${c.color}`}>{c.value}</p>
            </a>
          )})}
        </div>
      </section>
      <section id="map" className="px-4 pb-6">
        <div className="max-w-7xl mx-auto">
          <iframe width="100%" height="350" style={{ border: 0, borderRadius: '24px' }} loading="lazy" allowFullScreen="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0699046476276!2d80.27325417346396!3d12.971598587359267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f77777777777%3A0x5e365b1c0d5c0d5c!2sAnna%20Salai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890" />
        </div>
      </section>
      <section className="py-16 px-4 bg-[#F5CD7A]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="inline-flex bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Drop a Message</span>
            <h2 className="text-3xl font-extrabold text-[#0B1E36] mt-2 mb-8">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-extrabold text-green-700 mb-2">Message Sent!</h3>
                <p className="text-green-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/80 rounded-3xl shadow-sm border border-white/50 p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className={lc}>Full Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={ic} /></div>
                  <div><label className={lc}>Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className={ic} /></div>
                </div>
                <div><label className={lc}>Email Address</label><input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className={ic} /></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className={lc}>Destination Interested</label><input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g., Coorg, Bali" className={ic} /></div>
                  <div><label className={lc}>Travel Date</label><input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} className={ic} /></div>
                </div>
                <div><label className={lc}>Message</label><textarea name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Tell us about your travel plans..." className={ic + ' resize-none'} /></div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#0B1E36] text-white py-3.5 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"><Send size={16} /> Send Message</button>
              </form>
            )}
          </div>
          <div className="space-y-6">
            <div className="bg-[#0B1E36] rounded-3xl p-7 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#F5CD7A]/15 rounded-xl flex items-center justify-center"><Clock size={18} className="text-[#F5CD7A]" /></div>
                <h3 className="text-lg font-extrabold">Business Hours</h3>
              </div>
              <div className="space-y-4">
                {hours.map((h, i) => (<div key={i} className="flex justify-between items-center py-3 border-b border-white/[0.06] last:border-0"><span className="text-white/60 text-sm">{h.day}</span><span className="text-[#F5CD7A] font-bold text-sm">{h.time}</span></div>))}
              </div>
              <p className="text-[#F7D794]/70 text-sm mt-5 pt-4 border-t border-white/[0.06]">🕐 24/7 emergency support during your travels</p>
            </div>
            <div className="bg-white/50 rounded-3xl p-7 border border-white/20 space-y-4">
              <h3 className="text-lg font-extrabold text-[#0B1E36]">Quick Help</h3>
              {[{ icon: '📋', title: 'Common Questions', desc: 'Find answers to FAQs' }, { icon: '🎫', title: 'Booking Info', desc: 'Booking process & policies' }, { icon: '🛡️', title: 'Safety & Security', desc: 'Your safety is our priority' }].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#0B1E36]/10 cursor-pointer transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div><p className="font-bold text-[#0B1E36] text-sm">{item.title}</p><p className="text-[#0B1E36]/60 text-xs">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {showToast && <Toast message="Thank you! We'll get back to you within 24 hours." />}
    </div>
  )
}
