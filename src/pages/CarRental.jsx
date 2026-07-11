import { useState } from 'react'
import { Car, Users, Zap, MapPin, Clock, Shield, Send, Bus } from 'lucide-react'
import Toast from '../components/Toast'

export default function CarRental() {
  const [showToast, setShowToast] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', pickupLocation: '', dropLocation: '', date: '', vehicleType: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let text = `*New Car/Bus Rental Booking*\n`
    text += `Name: ${formData.name}\n`
    text += `Phone: ${formData.phone}\n`
    text += `Pickup: ${formData.pickupLocation}\n`
    text += `Drop: ${formData.dropLocation}\n`
    text += `Date: ${formData.date}\n`
    text += `Vehicle: ${formData.vehicleType}`
    
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/919876543210?text=${encodedText}`, '_blank')
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', pickupLocation: '', dropLocation: '', date: '', vehicleType: '' })
    }, 3000)
  }

  const services = [
    { icon: '🚗', title: 'Local Car Rental', desc: 'Explore Chennai and nearby areas with our daily rental options.', points: ['Hourly rentals available', 'Competitive daily rates', 'Chauffeur options'] },
    { icon: '🛣️', title: 'Outstation Rental', desc: 'Travel across states with our outstation rental services.', points: ['All-India network', 'Professional drivers', 'Fuel-efficient vehicles'] },
    { icon: '🚌', title: 'Bus Rental', desc: 'Luxury and mini bus rental for groups, events & corporate outings.', points: ['AC luxury buses', 'Mini bus for 20-30 pax', 'Volvo & push-back seats'] },
  ]

  const fleet = [
    { type: 'Sedan', desc: 'Perfect for couples and small groups', seats: '4 Seater', price: '₹1,500/day', icon: '🚙', featured: false },
    { type: 'SUV', desc: 'Spacious comfort for families', seats: '6-7 Seater', price: '₹2,500/day', icon: '🚙', featured: true },
    { type: 'Tempo Traveller', desc: 'Groups and large families', seats: '12-17 Seater', price: '₹4,000/day', icon: '🚐', featured: false },
    { type: 'Mini Bus', desc: 'Medium groups & corporate events', seats: '20-30 Seater', price: '₹6,000/day', icon: '🚌', featured: false },
    { type: 'Luxury Bus', desc: 'Large groups with premium comfort', seats: '35-50 Seater', price: '₹10,000/day', icon: '🚍', featured: true },
  ]

  const whyUs = [
    { icon: Car, title: 'Well-Maintained Fleet', desc: 'All vehicles are regularly serviced and equipped with latest safety features.' },
    { icon: Bus, title: 'Bus Options Available', desc: 'Mini buses to luxury Volvo buses for groups, weddings & corporate events.' },
    { icon: Users, title: 'Professional Drivers', desc: 'Courteous, experienced drivers trained in customer service and safety.' },
    { icon: Zap, title: 'Best Prices', desc: 'Transparent pricing with no hidden charges. Best rates guaranteed.' },
    { icon: Shield, title: 'Fully Insured', desc: 'All vehicles are fully insured for your complete peace of mind.' },
    { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock availability for any emergency or last-minute bookings.' },
  ]

  const inputClass = "w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-300 transition-all"
  const labelClass = "block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"

  return (
    <div className="bg-[#F7D794]">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=600&fit=crop" alt="Car & Bus Rental" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="inline-flex items-center gap-2 bg-[#F5CD7A]/20 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#F5CD7A]/30 w-fit">
            Ride in Comfort
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">Car & Bus Rental</h1>
          <p className="text-[#F7D794] text-lg max-w-xl">Comfortable and reliable car & bus rentals in Chennai and beyond</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <div key={idx} className="group bg-white/50 rounded-3xl p-7 border border-white/20 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="text-lg font-extrabold text-[#0B1E36] mb-2">{svc.title}</h3>
                <p className="text-[#0B1E36]/70 text-sm mb-5">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#0B1E36]/80 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#0B1E36]/10 text-[#0B1E36] flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 px-4 bg-[#0B1E36]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#F5CD7A]/20 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-[#F5CD7A]/30">
              Choose Your Ride
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Our Fleet</h2>
            <p className="text-white/60 mt-3">Cars, tempo travelers & luxury buses for every occasion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleet.map((vehicle, idx) => (
              <div key={idx} className={`rounded-3xl p-7 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                vehicle.featured ? 'bg-[#F5CD7A] text-[#0B1E36] shadow-xl shadow-[#F5CD7A]/20' : 'bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.08]'
              }`}>
                {vehicle.featured && <div className="absolute top-4 right-4 bg-[#0B1E36] text-[#F5CD7A] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Popular</div>}
                <div className="text-5xl mb-4">{vehicle.icon}</div>
                <h3 className="text-xl font-extrabold mb-1">{vehicle.type}</h3>
                <p className={`text-sm mb-5 ${vehicle.featured ? 'text-[#0B1E36]/70' : 'text-slate-400'}`}>{vehicle.desc}</p>
                <div className="space-y-1.5 mb-5">
                  <p className={`font-semibold text-sm ${vehicle.featured ? 'text-[#0B1E36]' : 'text-slate-300'}`}>👥 {vehicle.seats}</p>
                  <p className={`font-semibold text-sm ${vehicle.featured ? 'text-[#0B1E36]' : 'text-slate-300'}`}>❄️ AC & Music System</p>
                  <p className={`text-xl font-extrabold mt-3 ${vehicle.featured ? 'text-[#0B1E36]' : 'text-[#F5CD7A]'}`}>From {vehicle.price}</p>
                </div>
                <button className={`w-full py-3 rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  vehicle.featured ? 'bg-[#0B1E36] text-[#F5CD7A] hover:bg-[#153259] shadow-md' : 'bg-[#F5CD7A] text-[#0B1E36] shadow-md'
                }`}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2">Why Choose Our Rentals?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group flex gap-4 p-6 rounded-3xl border border-white/20 bg-white/50 hover:bg-white/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#0B1E36]/10 group-hover:bg-[#0B1E36] rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon size={20} className="text-[#0B1E36] group-hover:text-[#F5CD7A] transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0B1E36] mb-1 text-sm">{item.title}</h3>
                    <p className="text-[#0B1E36]/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 bg-[#F5CD7A]/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Quick Booking
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B1E36] mt-2">Book Your Ride</h2>
          </div>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-extrabold text-green-700 mb-2">Booking Requested!</h3>
              <p className="text-green-600">We'll contact you shortly to confirm your booking.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Pickup Location</label>
                  <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} required placeholder="Where to pick up" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Drop Location</label>
                  <input type="text" name="dropLocation" value={formData.dropLocation} onChange={handleChange} required placeholder="Where to drop off" className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Pickup Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Vehicle Type</label>
                  <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required className={inputClass}>
                    <option value="">Select vehicle type</option>
                    <optgroup label="Cars">
                      <option value="sedan">Sedan (4 Seater)</option>
                      <option value="suv">SUV (6-7 Seater)</option>
                    </optgroup>
                    <optgroup label="Tempo Traveller">
                      <option value="tempo-12">Tempo Traveller (12 Seater)</option>
                      <option value="tempo-17">Tempo Traveller (17 Seater)</option>
                    </optgroup>
                    <optgroup label="Buses">
                      <option value="mini-bus">Mini Bus (20-30 Seater)</option>
                      <option value="luxury-bus">Luxury Bus (35-50 Seater)</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#0B1E36] text-white py-3.5 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <Send size={16} /> Request Booking
              </button>
            </form>
          )}
        </div>
      </section>

      {showToast && <Toast message="Booking request submitted! We'll contact you soon." />}
    </div>
  )
}
