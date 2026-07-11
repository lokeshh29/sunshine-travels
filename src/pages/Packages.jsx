import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Packages() {
  const cats = [
    { name: 'Family Tour', desc: 'Create beautiful memories with your loved ones', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop', link: '/domestic', emoji: '👨‍👩‍👧‍👦' },
    { name: 'Honeymoon Tour', desc: 'Romantic getaways for couples', image: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=600&h=400&fit=crop', link: '/domestic', emoji: '💑' },
    { name: 'Educational Tour', desc: 'Learn while you travel', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop', link: '/domestic', emoji: '🎓' },
    { name: 'Devotional Tour', desc: 'Spiritual and religious journeys', image: 'https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=600&h=400&fit=crop', link: '/domestic', emoji: '🕉️' },
    { name: 'Domestic Tour', desc: 'Explore the beauty of India', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', link: '/domestic', emoji: '🗺️' },
    { name: 'International Tour', desc: 'Discover the world beyond', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop', link: '/international', emoji: '🌍' },
  ]
  const inc = [
    { i: '✈️', t: 'Flights', d: 'Round-trip flights' },
    { i: '🏨', t: 'Accommodation', d: 'Premium hotels' },
    { i: '🍽️', t: 'Meals', d: 'All meals included' },
    { i: '🗺️', t: 'Tours', d: 'Guided sightseeing' },
    { i: '🚗', t: 'Transfers', d: 'Airport pickups' },
    { i: '🎟️', t: 'Tickets', d: 'Attraction tickets' },
    { i: '👨‍🏫', t: 'Guides', d: 'Expert local guides' },
    { i: '📱', t: '24/7 Support', d: 'Always available' },
  ]
  return (
    <div className="bg-[#F7D794]">
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=600&fit=crop" alt="Packages" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="inline-flex items-center gap-2 bg-[#F5CD7A]/20 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#F5CD7A]/30 w-fit">Curated for You</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">Tour Packages</h1>
          <p className="text-[#F7D794] text-lg max-w-xl">Choose from our diverse range of carefully curated packages</p>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Browse All</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2">Our Tour Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats.map((c, i) => (
              <Link to={c.link} key={i} className="relative h-80 rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 block">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/90 via-[#0B1E36]/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                  <span className="text-3xl mb-2">{c.emoji}</span>
                  <h3 className="text-xl font-extrabold mb-1">{c.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{c.desc}</p>
                  <span className="inline-flex items-center gap-2 bg-[#0B1E36] text-white px-5 py-2.5 rounded-2xl text-sm font-bold w-fit group-hover:gap-3 transition-all shadow-md">View Packages <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#0B1E36]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex bg-[#F5CD7A]/20 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-[#F5CD7A]/30">Everything Covered</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">What's Included</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {inc.map((x, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 text-center hover:bg-white/[0.08] transition-all">
                <div className="text-3xl mb-3">{x.i}</div>
                <h3 className="font-bold text-white mb-1 text-sm">{x.t}</h3>
                <p className="text-white/60 text-xs">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=500&fit=crop" alt="Custom" className="rounded-3xl shadow-xl" />
          <div>
            <span className="inline-flex bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Tailored for You</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2 mb-6">Need Something Custom?</h2>
            <p className="text-[#0B1E36]/70 mb-6 text-lg leading-relaxed">All our packages can be customized to match your unique preferences, budget, and travel style.</p>
            <ul className="space-y-3 mb-8">
              {['Flexible dates and duration', 'Add or remove destinations', 'Upgrade accommodations', 'Special activity requests'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0B1E36]/80 text-sm">
                  <span className="w-6 h-6 rounded-full bg-[#0B1E36]/10 text-[#0B1E36] flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20create%20a%20custom%20tour%20package." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#0B1E36] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Create Custom Package
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#0B1E36] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5CD7A]/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Book?</h2>
          <p className="text-[#F7D794]/80 mb-8 max-w-2xl mx-auto text-lg">Choose your perfect package and embark on an unforgettable journey.</p>
          <Link to="/domestic" className="inline-block bg-[#F5CD7A] text-[#0B1E36] px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">Explore All Packages</Link>
        </div>
      </section>
    </div>
  )
}
