import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PackageCard from '../components/PackageCard'
import { usePackages } from '../context/PackageContext'

export default function InternationalTours() {
  const [searchParams] = useSearchParams()
  const categoryQuery = searchParams.get('category')
  
  // Set the initial active category to the query if it exists, otherwise 'All'
  const [activeCategory, setActiveCategory] = useState(categoryQuery || 'All')
  
  // If the query changes via navigation (e.g. clicking mega menu while already on page), update state
  useEffect(() => {
    if (categoryQuery) {
      setActiveCategory(categoryQuery)
    }
  }, [categoryQuery])

  const { getPackagesByType, isLoading } = usePackages()
  
  const allInternational = getPackagesByType('international')
  const categories = ['All', ...new Set(allInternational.map(p => p.category))]
  
  const packages = activeCategory === 'All' 
    ? allInternational 
    : allInternational.filter(p => p.category === activeCategory)

  return (
    <div className="bg-[#F7D794] min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=600&fit=crop" alt="International Tours" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="inline-flex items-center gap-2 bg-[#F5CD7A]/20 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#F5CD7A]/30 w-fit">
            Go Global
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">International Tours</h1>
          <p className="text-[#F7D794] text-lg max-w-xl">Explore the world's most beautiful and iconic destinations</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[70px] bg-[#F7D794]/95 backdrop-blur-xl border-b border-white/20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#0B1E36] text-[#F5CD7A] shadow-md shadow-[#0B1E36]/50'
                    : 'bg-white/50 text-[#0B1E36]/70 border border-white/20 hover:bg-white/80'
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
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-white border-t-[#0B1E36] rounded-full animate-spin"></div>
            </div>
          ) : packages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#0B1E36]/60 text-lg">No packages found for this category.</p>
              <button 
                onClick={() => setActiveCategory('All')} 
                className="mt-4 inline-block text-[#0B1E36] font-bold hover:underline"
              >
                View All International Tours
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  image={pkg.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop'}
                  destination={pkg.category}
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
            <span className="inline-flex items-center gap-2 bg-[#F5CD7A]/20 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-[#F5CD7A]/30">
              We Handle It All
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Travel Support Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Visa Assistance', icon: '📋', desc: 'Complete visa documentation support for all international destinations.' },
              { title: 'Travel Insurance', icon: '🛡️', desc: 'Comprehensive travel insurance for complete peace of mind.' },
              { title: 'Currency Exchange', icon: '💱', desc: 'Best rates for currency exchange and hassle-free transactions abroad.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 text-center hover:bg-white/[0.08] transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#F5CD7A] mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <span className="inline-flex items-center gap-2 bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
          Ready to Fly?
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2 mb-4">Plan Your Dream Vacation Today</h2>
        <p className="text-[#0B1E36]/60 mb-8 max-w-xl mx-auto">From tropical beaches to snowy mountains—explore the world with us.</p>
        <a 
          href="https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20book%20an%20international%20tour%20package." 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#0B1E36] text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          Book Your Trip
        </a>
      </section>
    </div>
  )
}
