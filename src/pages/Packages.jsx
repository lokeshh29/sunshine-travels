import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Packages() {
  const packageCategories = [
    { name: 'Family Tour', description: 'Create beautiful memories with your loved ones', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop', link: '/domestic', emoji: '👨‍👩‍👧‍👦' },
    { name: 'Honeymoon Tour', description: 'Romantic getaways for couples', image: 'https://images.unsplash.com/photo-1518990543397-4bdf9db0e234?w=600&h=400&fit=crop', link: '/domestic', emoji: '💑' },
    { name: 'Educational Tour', description: 'Learn while you travel', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop', link: '/domestic', emoji: '🎓' },
    { name: 'Devotional Tour', description: 'Spiritual and religious journeys', image: 'https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=600&h=400&fit=crop', link: '/domestic', emoji: '🕉️' },
    { name: 'Domestic Tour', description: 'Explore the beauty of India', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop', link: '/domestic', emoji: '🗺️' },
    { name: 'International Tour', description: 'Discover the world beyond', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop', link: '/international', emoji: '🌍' }
  ]

  const inclusions = [
    { icon: '✈️', title: 'Flights', desc: 'Round-trip flights with best airlines' },
    { icon: '🏨', title: 'Accommodation', desc: 'Premium hotels and resorts' },
    { icon: '🍽️', title: 'Meals', desc: 'Breakfast, lunch & dinner included' },
    { icon: '🗺️', title: 'Tours', desc: 'Daily guided sightseeing tours' },
    { icon: '🚗', title: 'Transfers', desc: 'Airport pickups & transfers' },
    { icon: '🎟️', title: 'Tickets', desc: 'All attraction tickets included' },
    { icon: '👨‍🏫', title: 'Guides', desc: 'Expert local guides provided' },
    { icon: '📱', title: '24/7 Support', desc: 'Round-the-clock customer support' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=600&fit=crop" alt="Tour Packages" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-2">Curated for You</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">Tour Packages</h1>
          <p className="text-slate-300 text-lg max-w-xl">Choose from our diverse range of carefully curated packages</p>
        </div>
      </section>

      {/* Package Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Browse All</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2">Our Tour Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageCategories.map((category, idx) => (
              <Link to={category.link} key={idx} className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 block">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-[#0B1E36]/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                  <span className="text-3xl mb-2">{category.emoji}</span>
                  <h3 className="text-2xl font-extrabold mb-1">{category.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{category.description}</p>
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white px-4 py-2 rounded-full text-sm font-bold w-fit group-hover:gap-3 transition-all">
                    View Packages <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-[#0B1E36]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-400 font-bold tracking-wider text-sm uppercase">Everything Covered</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">What's Included in Our Packages</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {inclusions.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=500&fit=crop"
              alt="Customization"
              className="rounded-3xl shadow-2xl"
            />
            <div>
              <span className="text-primary font-bold tracking-wider text-sm uppercase">Tailored for You</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2 mb-6">Need Something Custom?</h2>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                All our packages can be customized to match your unique preferences, budget, and travel style.
              </p>
              <ul className="space-y-3 mb-8">
                {['Flexible dates and duration', 'Add or remove destinations', 'Upgrade accommodations', 'Special activity requests'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-orange-500 to-amber-400 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-orange-400/40 hover:scale-105 transition-all">
                Create Custom Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0B1E36] to-[#1a3a68] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Book?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
          Choose your perfect package and embark on an unforgettable journey with Sunshine Holidays.
        </p>
        <button className="bg-gradient-to-r from-orange-500 to-amber-400 text-white px-10 py-3.5 rounded-full font-bold shadow-lg hover:shadow-orange-400/30 hover:scale-105 transition-all">
          Explore All Packages
        </button>
      </section>
    </div>
  )
}
