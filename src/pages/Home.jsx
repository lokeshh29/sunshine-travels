import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import DestinationCard from '../components/DestinationCard'
import PackageCard from '../components/PackageCard'
import TestimonialCard from '../components/TestimonialCard'
import FAQItem from '../components/FAQItem'
import Toast from '../components/Toast'
import EnquiryModal from '../components/EnquiryModal'
import { Users, Award, Zap, HeartHandshake, MapPin, ArrowRight, Plane } from 'lucide-react'
import { testimonials, faqItems } from '../utils/data'
import { useScrollAnimation } from '../utils/useScrollAnimation'
import { usePackages } from '../context/PackageContext'



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    travelers: 1,
  })
  const navigate = useNavigate()
  const [statsRef, statsVisible] = useScrollAnimation()

  const handleSearchChange = (e) => {
    const { name, value } = e.target
    setSearchData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    let queryParams = ''
    if (searchData.destination) {
      queryParams = `?place=${encodeURIComponent(searchData.destination)}`
    }
    navigate(`/domestic${queryParams}`)
  }

  const { packages, isLoading } = usePackages()

  const featuredDomestic = packages.filter(p => p.type === 'domestic' && p.featured).slice(0, 3)
  const featuredInternational = packages.filter(p => p.type === 'international' && p.featured).slice(0, 3)

  return (
    <div className="bg-gradient-to-b from-[#F7D794] via-[#F5CD7A]/40 to-[#F7D794]">
      <HeroSlider />

      {/* Search Section */}
      <section className="relative z-40 -mt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-[#F5CD7A]/90 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(11,30,54,0.12)] p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-5 border border-white/40"
          >
            <div className="flex flex-col">
              <label className="text-[11px] font-bold text-[#0B1E36] uppercase tracking-widest mb-2 ml-1">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                placeholder="Where to?"
                value={searchData.destination}
                onChange={handleSearchChange}
                className="px-5 py-3.5 bg-white/80 border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0B1E36]/50 focus:border-[#0B1E36] transition-all font-medium text-[#0B1E36] text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[11px] font-bold text-[#0B1E36] uppercase tracking-widest mb-2 ml-1">
                Travel Date
              </label>
              <input
                type="date"
                name="date"
                value={searchData.date}
                onChange={handleSearchChange}
                className="px-5 py-3.5 bg-white/80 border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0B1E36]/50 focus:border-[#0B1E36] transition-all font-medium text-[#0B1E36] text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[11px] font-bold text-[#0B1E36] uppercase tracking-widest mb-2 ml-1">
                Travelers
              </label>
              <input
                type="number"
                name="travelers"
                min="1"
                value={searchData.travelers}
                onChange={handleSearchChange}
                className="px-5 py-3.5 bg-white/80 border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0B1E36]/50 focus:border-[#0B1E36] transition-all font-medium text-[#0B1E36] text-sm"
              />
            </div>
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="bg-[#0B1E36] text-white px-5 py-3.5 rounded-2xl hover:opacity-90 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <MapPin size={16} />
                Search Trips
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DOMESTIC PACKAGES — SHOWN FIRST
          ═══════════════════════════════════════════ */}

      {/* Featured Karnataka Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              <MapPin size={12} />
              Top Rated
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1E36] mb-3">
              Featured Domestic Packages
            </h2>
            <p className="text-[#0B1E36]/60 max-w-2xl mx-auto text-lg font-medium">
              Explore India's most stunning destinations — handpicked for unforgettable experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDomestic.length === 0 ? (
              <div className="col-span-full text-center py-10 text-slate-500">No featured domestic packages yet.</div>
            ) : (
              featuredDomestic.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  image={pkg.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop'}
                  destination={pkg.category}
                  packageName={pkg.name}
                  duration={pkg.duration}
                  price={pkg.price}
                  highlights={pkg.highlights}
                />
              ))
            )}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/domestic"
              className="inline-flex items-center gap-2 bg-[#0B1E36] text-white px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#153259] hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              View All Domestic Packages
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════
          INTERNATIONAL TRIPS — AFTER DOMESTIC
          ═══════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              <Plane size={12} />
              International
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1E36] mb-3">
              International Getaways
            </h2>
            <p className="text-[#0B1E36]/60 max-w-2xl mx-auto text-lg font-medium">
              Explore the world's most iconic destinations with our curated packages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInternational.length === 0 ? (
              <div className="col-span-full text-center py-10 text-slate-500">No featured international packages yet.</div>
            ) : (
              featuredInternational.map((pkg, idx) => (
                <DestinationCard
                  key={idx}
                  image={pkg.image}
                  name={pkg.name}
                  tagline={pkg.duration}
                  price={pkg.price}
                />
              ))
            )}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/international"
              className="inline-flex items-center gap-2 bg-[#0B1E36] text-white px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#153259] hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              View All International Tours
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>



      {/* Why Choose Us / Stats */}
      <section className="py-20 px-4 bg-[#0B1E36] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5CD7A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5CD7A]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#F5CD7A]/20 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-[#F5CD7A]/30">
              Our Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Why Choose Sunshine</h2>
            <p className="text-[#F7D794]/80 max-w-2xl mx-auto text-lg">
              Premium travel experiences tailored to your desires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={statsRef}>
            {[
              { icon: HeartHandshake, value: '99%', label: 'Happy Clients', desc: 'Dedicated support for every traveler', color: 'text-[#F5CD7A]', bg: 'bg-[#F5CD7A]/10' },
              { icon: Award, value: '15+', label: 'Years Experience', desc: 'Trusted industry veterans', color: 'text-[#F5CD7A]', bg: 'bg-[#F5CD7A]/10' },
              { icon: Zap, value: '10k+', label: 'Successful Trips', desc: 'Unforgettable memories created', color: 'text-[#F5CD7A]', bg: 'bg-[#F5CD7A]/10' },
              { icon: MapPin, value: '50+', label: 'Destinations', desc: 'Worldwide tour coverage', color: 'text-[#F5CD7A]', bg: 'bg-[#F5CD7A]/10' },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className="bg-white/[0.04] border border-white/[0.08] p-8 rounded-3xl backdrop-blur-sm text-center hover:-translate-y-1 transition-all duration-300 hover:bg-white/[0.08] group"
                >
                  <div className={`w-16 h-16 mx-auto ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-4xl font-extrabold text-white mb-1">{stat.value}</h3>
                  <p className="text-[#F7D794] font-semibold text-sm mb-2">{stat.label}</p>
                  <p className="text-white/60 text-xs">{stat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0B1E36] to-[#153259] relative overflow-hidden border-y border-[#F5CD7A]/10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F5CD7A]/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F5CD7A]/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#F5CD7A]/10 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-[#F5CD7A]/20">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">What Our Travelers Say</h2>
            <p className="text-[#F7D794]/80 max-w-xl mx-auto">Real stories from our happy customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <FAQItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0B1E36] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5CD7A]/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Ready to Explore?</h2>
          <p className="text-[#F7D794]/80 mb-10 text-lg max-w-xl mx-auto">
            Book your dream vacation today and create unforgettable memories with Sunshine Holidays
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#F7D794] to-[#F5CD7A] text-[#0B1E36] px-10 py-4 rounded-2xl font-bold shadow-lg shadow-[#F5CD7A]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Your Journey ✈️
            </button>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur border border-white/25 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {isModalOpen && <EnquiryModal onClose={() => setIsModalOpen(false)} />}

      {/* Toast Notification */}
      {showToast && <Toast message="Search submitted! Our team will contact you shortly." />}
    </div>
  )
}