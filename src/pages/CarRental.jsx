import { useState } from 'react'
import { Car, Users, Zap, MapPin, Clock, Shield, Send } from 'lucide-react'
import Toast from '../components/Toast'

export default function CarRental() {
  const [showToast, setShowToast] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', pickupLocation: '', dropLocation: '', date: '', carType: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', pickupLocation: '', dropLocation: '', date: '', carType: '' })
    }, 3000)
  }

  const services = [
    { icon: '🚗', title: 'Local Car Rental', desc: 'Explore Chennai and nearby areas with our daily rental options.', points: ['Hourly rentals available', 'Competitive daily rates', 'Chauffeur options'] },
    { icon: '🛣️', title: 'Outstation Rental', desc: 'Travel across states with our outstation rental services.', points: ['All-India network', 'Professional drivers', 'Fuel-efficient vehicles'] },
    { icon: '✈️', title: 'Airport Transfer', desc: 'Quick and reliable airport pickups and drop-offs.', points: ['On-time guarantee', 'Flight tracking', 'Meet & greet service'] },
    { icon: '🏢', title: 'Corporate Rental', desc: 'Professional car rental solutions for businesses.', points: ['Monthly contracts', 'Fleet options', 'Billing convenience'] },
  ]

  const fleet = [
    { type: 'Sedan', desc: 'Perfect for couples and small groups', seats: '4 Seater', price: '₹1,500/day', icon: '🚙', featured: false },
    { type: 'SUV', desc: 'Spacious comfort for families', seats: '6-7 Seater', price: '₹2,500/day', icon: '🚙', featured: true },
    { type: 'Tempo Traveller', desc: 'Groups and large families', seats: '12-17 Seater', price: '₹4,000/day', icon: '🚐', featured: false },
  ]

  const whyUs = [
    { icon: Car, title: 'Well-Maintained Fleet', desc: 'All vehicles are regularly serviced and equipped with latest safety features.' },
    { icon: Users, title: 'Professional Drivers', desc: 'Courteous, experienced drivers trained in customer service and safety.' },
    { icon: Zap, title: 'Best Prices', desc: 'Transparent pricing with no hidden charges. Best rates guaranteed.' },
    { icon: Shield, title: 'Fully Insured', desc: 'All vehicles are fully insured for your complete peace of mind.' },
    { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock availability for any emergency or last-minute bookings.' },
    { icon: MapPin, title: 'Wide Coverage', desc: 'Serving Chennai and all major cities and towns across South India.' },
  ]

  const inputClass = "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
  const labelClass = "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5"

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=600&fit=crop" alt="Car Rental" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-2">Ride in Comfort</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">Car Rental Services</h1>
          <p className="text-slate-300 text-lg max-w-xl">Comfortable and reliable car rentals in Chennai and beyond</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="text-xl font-extrabold text-[#0B1E36] mb-3">{svc.title}</h3>
                <p className="text-slate-500 mb-5">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                      <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
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
            <span className="text-amber-400 font-bold tracking-wider text-sm uppercase">Choose Your Ride</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Our Fleet</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((car, idx) => (
              <div key={idx} className={`rounded-3xl p-8 text-center relative overflow-hidden transition-all hover:-translate-y-2 ${
                car.featured ? 'bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-2xl shadow-orange-500/30' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}>
                {car.featured && <div className="absolute top-4 right-4 bg-white text-orange-500 text-xs font-extrabold px-3 py-1 rounded-full">POPULAR</div>}
                <div className="text-6xl mb-5">{car.icon}</div>
                <h3 className="text-2xl font-extrabold mb-2">{car.type}</h3>
                <p className={`text-sm mb-5 ${car.featured ? 'text-orange-100' : 'text-slate-300'}`}>{car.desc}</p>
                <div className="space-y-2 mb-6">
                  <p className={`font-semibold text-sm ${car.featured ? 'text-white' : 'text-slate-300'}`}>👥 {car.seats}</p>
                  <p className={`font-semibold text-sm ${car.featured ? 'text-white' : 'text-slate-300'}`}>❄️ AC & Music System</p>
                  <p className={`text-xl font-extrabold ${car.featured ? 'text-white' : 'text-amber-400'}`}>From {car.price}</p>
                </div>
                <button className={`w-full py-3 rounded-xl font-bold transition-all hover:scale-105 ${
                  car.featured ? 'bg-white text-orange-500 hover:bg-orange-50' : 'bg-gradient-to-r from-orange-500 to-amber-400 text-white'
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
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2">Why Choose Our Car Rental?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group flex gap-5 p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all bg-white">
                  <div className="w-12 h-12 bg-orange-50 group-hover:bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon size={22} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0B1E36] mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Quick Booking</span>
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
                  <label className={labelClass}>Car Type</label>
                  <select name="carType" value={formData.carType} onChange={handleChange} required className={inputClass}>
                    <option value="">Select car type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="tempo">Tempo Traveller</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-orange-400/40 hover:scale-[1.01] transition-all">
                <Send size={18} /> Request Booking
              </button>
            </form>
          )}
        </div>
      </section>

      {showToast && <Toast message="Booking request submitted! We'll contact you soon." />}
    </div>
  )
}
