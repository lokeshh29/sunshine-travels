import { useState } from 'react'
import HeroSlider from '../components/HeroSlider'
import DestinationCard from '../components/DestinationCard'
import PackageCard from '../components/PackageCard'
import TestimonialCard from '../components/TestimonialCard'
import FAQItem from '../components/FAQItem'
import Toast from '../components/Toast'
import EnquiryModal from '../components/EnquiryModal'
import AnimatedCounter from '../components/AnimatedCounter'
import { Users, Award, Zap, HeartHandshake, MapPin, Clock, DollarSign, Phone } from 'lucide-react'
import { popularDestinations, testimonials, faqItems, domesticPackages } from '../utils/data'
import { useScrollAnimation } from '../utils/useScrollAnimation'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    travelers: 1
  })
  const [statsRef, statsVisible] = useScrollAnimation()

  const handleSearchChange = (e) => {
    const { name, value } = e.target
    setSearchData(prev => ({ ...prev, [name]: value }))
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white">
      <HeroSlider />

      {/* Search Section */}
      <section className="relative z-40 -mt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4">
          <form onSubmit={handleSearchSubmit} className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 border border-white">
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Destination</label>
              <input
                type="text"
                name="destination"
                placeholder="Where to?"
                value={searchData.destination}
                onChange={handleSearchChange}
                className="px-5 py-3.5 bg-white border border-slate-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all shadow-inner font-medium text-slate-800"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Date</label>
              <input
                type="date"
                name="date"
                value={searchData.date}
                onChange={handleSearchChange}
                className="px-5 py-3.5 bg-white border border-slate-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all shadow-inner font-medium text-slate-800"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Travelers</label>
              <input
                type="number"
                name="travelers"
                min="1"
                value={searchData.travelers}
                onChange={handleSearchChange}
                className="px-5 py-3.5 bg-white border border-slate-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all shadow-inner font-medium text-slate-800"
              />
            </div>
            <div className="flex flex-col justify-end">
              <button type="submit" className="bg-[#0B1E36] text-white px-5 py-3.5 rounded-xl hover:bg-[#1a3a68] transition-all duration-300 font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center">
                Search Trips
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Top Places</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1E36]">Popular Destinations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((destination, idx) => (
              <DestinationCard 
                key={idx}
                image={destination.image}
                name={destination.name}
                tagline={destination.tagline}
                price={destination.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Travel Styles</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36]">Tour Categories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Heritage', icon: '🏰' },
              { name: 'Wildlife', icon: '🦁' },
              { name: 'Beaches', icon: '🏖️' },
              { name: 'Mountains', icon: '⛰️' },
              { name: 'Spiritual', icon: '🕉️' },
              { name: 'Honeymoon', icon: '💑' }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="font-bold text-[#0B1E36] group-hover:text-primary transition-colors">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats */}
      <section className="py-20 px-4 bg-[#0B1E36] text-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold tracking-wider text-sm uppercase mb-2 block">Our Excellence</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Why Choose Sunshine</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">We provide premium travel experiences tailored to your desires.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={statsRef}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center hover:-translate-y-2 transition-transform duration-300 hover:bg-white/10 group">
              <div className="w-16 h-16 mx-auto bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-2">99%</h3>
              <p className="text-amber-400 font-semibold mb-2">Happy Clients</p>
              <p className="text-slate-400 text-sm">Dedicated support for every traveler</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center hover:-translate-y-2 transition-transform duration-300 hover:bg-white/10 group">
              <div className="w-16 h-16 mx-auto bg-amber-400/20 text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-2">15+</h3>
              <p className="text-amber-400 font-semibold mb-2">Years Experience</p>
              <p className="text-slate-400 text-sm">Trusted industry veterans</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center hover:-translate-y-2 transition-transform duration-300 hover:bg-white/10 group">
              <div className="w-16 h-16 mx-auto bg-blue-400/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-2">10k+</h3>
              <p className="text-amber-400 font-semibold mb-2">Successful Trips</p>
              <p className="text-slate-400 text-sm">Unforgettable memories created</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center hover:-translate-y-2 transition-transform duration-300 hover:bg-white/10 group">
              <div className="w-16 h-16 mx-auto bg-green-400/20 text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={32} />
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-2">50+</h3>
              <p className="text-amber-400 font-semibold mb-2">Destinations</p>
              <p className="text-slate-400 text-sm">Worldwide tour coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(domesticPackages).slice(0, 3).map(([region, packages]) => (
              packages.slice(0, 2).map(pkg => (
                <PackageCard 
                  key={pkg.id}
                  image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop"
                  destination={region}
                  packageName={pkg.name}
                  duration={pkg.duration}
                  price={pkg.price}
                  highlights={pkg.highlights}
                />
              ))
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-amber-400">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <FAQItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-gray-600 mb-8 text-lg">Book your dream vacation today and create unforgettable memories</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
          >
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Enquiry Modal */}
      {isModalOpen && <EnquiryModal onClose={() => setIsModalOpen(false)} />}
      
      {/* Toast Notification */}
      {showToast && <Toast message="Search submitted! Our team will contact you shortly." />}
    </div>
  )
}