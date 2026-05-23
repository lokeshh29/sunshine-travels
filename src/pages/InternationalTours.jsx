import { useState } from 'react'
import PackageCard from '../components/PackageCard'
import { internationalPackages } from '../utils/data'

export default function InternationalTours() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Bali', 'Dubai', 'Malaysia', 'Maldives', 'Singapore', 'Sri Lanka', 'Thailand']

  const getPackages = () => {
    if (activeCategory === 'All') return Object.values(internationalPackages).flat()
    return internationalPackages[activeCategory] || []
  }
  const packages = getPackages()

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=600&fit=crop" alt="International Tours" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-2">Go Global</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">International Tours</h1>
          <p className="text-slate-300 text-lg max-w-xl">Explore the world's most beautiful and iconic destinations</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 md:top-24 bg-white/95 backdrop-blur border-b border-slate-100 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto py-4 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {packages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No packages found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  image={pkg.image}
                  destination={Object.keys(internationalPackages).find(key => internationalPackages[key].includes(pkg)) || 'International'}
                  packageName={pkg.name}
                  duration={pkg.duration}
                  price={pkg.price}
                  highlights={pkg.highlights}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Travel Info Strip */}
      <section className="py-16 px-4 bg-[#0B1E36]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-bold tracking-wider text-sm uppercase">We Handle It All</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Travel Support Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Visa Assistance', icon: '📋', desc: 'Complete visa documentation support for all international destinations.' },
              { title: 'Travel Insurance', icon: '🛡️', desc: 'Comprehensive travel insurance for complete peace of mind.' },
              { title: 'Currency Exchange', icon: '💱', desc: 'Best rates for currency exchange and hassle-free transactions abroad.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <span className="text-primary font-bold tracking-wider text-sm uppercase">Ready to Fly?</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2 mb-4">Plan Your Dream Vacation Today</h2>
        <p className="text-slate-500 mb-8 max-w-xl mx-auto">From tropical beaches to snowy mountains—explore the world with us.</p>
        <button className="bg-gradient-to-r from-orange-500 to-amber-400 text-white px-10 py-3.5 rounded-full font-bold shadow-lg hover:shadow-orange-400/40 hover:scale-105 transition-all">
          Book Your Trip
        </button>
      </section>
    </div>
  )
}
