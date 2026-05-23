import { useState } from 'react'
import PackageCard from '../components/PackageCard'
import { domesticPackages } from '../utils/data'

// Map each package id to a curated image
const packageImages = {
  1:  'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=400&fit=crop', // Wayanad
  2:  'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=500&h=400&fit=crop', // Munnar
  3:  'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=500&h=400&fit=crop', // Alleppey
  4:  'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500&h=400&fit=crop', // Kochi
  5:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop', // Coorg
  6:  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop', // Chikmagalur
  7:  'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=400&fit=crop', // Mysore
  8:  'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=400&fit=crop', // Gokarna
  9:  'https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?w=500&h=400&fit=crop', // Manali
  10: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&h=400&fit=crop', // Kashmir
  11: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&h=400&fit=crop', // Rajasthan
  12: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=400&fit=crop', // Golden Triangle
  13: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=400&fit=crop', // Ooty
  14: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=500&h=400&fit=crop', // Kodaikanal
  15: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=500&h=400&fit=crop', // Pondicherry
  16: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=400&fit=crop', // Goa Beach
  17: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=500&h=400&fit=crop', // Goa Family
}

export default function DomesticTours() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Kerala', 'Karnataka', 'North India', 'Tamil Nadu', 'Goa']

  const getPackages = () => {
    if (activeCategory === 'All') return Object.values(domesticPackages).flat()
    return domesticPackages[activeCategory] || []
  }
  const packages = getPackages()

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&h=600&fit=crop" alt="Domestic Tours" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-2">Explore India</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">Domestic Tours</h1>
          <p className="text-slate-300 text-lg max-w-xl">Experience the breathtaking diversity and culture of incredible India</p>
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
                  image={packageImages[pkg.id] || 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=400&fit=crop'}
                  destination={Object.keys(domesticPackages).find(key => domesticPackages[key].includes(pkg)) || 'India'}
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

      {/* Info Section */}
      <section className="py-16 px-4 bg-[#0B1E36] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-bold tracking-wider text-sm uppercase">Why India?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Discover India's Treasures</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { region: 'Kerala', desc: 'Backwaters, tea plantations, houseboats', icon: '🌿' },
              { region: 'Karnataka', desc: 'Coffee estates, temples, beaches', icon: '☕' },
              { region: 'North India', desc: 'Mountains, historical sites, adventure', icon: '🏔️' },
              { region: 'Tamil Nadu', desc: 'Temples, hill stations, culture', icon: '🕌' },
              { region: 'Goa', desc: 'Beaches, architecture, nightlife', icon: '🏖️' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-amber-400 mb-2">{item.region}</h3>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <span className="text-primary font-bold tracking-wider text-sm uppercase">Ready?</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2 mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-slate-500 mb-8 max-w-xl mx-auto">Our team can customize any tour to match your preferences and budget.</p>
        <button className="bg-gradient-to-r from-orange-500 to-amber-400 text-white px-10 py-3.5 rounded-full font-bold shadow-lg hover:shadow-orange-400/40 hover:scale-105 transition-all">
          Customize Your Tour
        </button>
      </section>
    </div>
  )
}
