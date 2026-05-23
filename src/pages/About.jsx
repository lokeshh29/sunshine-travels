import { Heart, Target, Users, Award, Globe, Zap } from 'lucide-react'

export default function About() {
  const stats = [
    { value: '15+', label: 'Years in Business' },
    { value: '5000+', label: 'Happy Customers' },
    { value: '2000+', label: 'Successful Tours' },
    { value: '50+', label: 'Destinations' },
  ]

  const whyUs = [
    { icon: Award, title: 'Expert Planning', desc: 'Our experienced team designs personalized itineraries based on your preferences and budget.' },
    { icon: Users, title: 'Personal Service', desc: 'Dedicated travel consultants ensure every detail of your journey is perfect.' },
    { icon: Globe, title: 'Global Network', desc: 'Partnerships with hotels, airlines, and guides worldwide guarantee best deals.' },
    { icon: Zap, title: 'Transparent Pricing', desc: 'No hidden charges—what you see is what you pay, guaranteed.' },
    { icon: Heart, title: 'Customer Care', desc: '24/7 support before, during, and after your journey for complete peace of mind.' },
    { icon: Target, title: 'Tailored Experiences', desc: 'From budget trips to luxury vacations, we customize tours for everyone.' },
  ]

  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh' },
    { name: 'Priya Sharma', role: 'Travel Consultant', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya' },
    { name: 'Arjun Nair', role: 'Operations Manager', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun' },
    { name: 'Ananya Reddy', role: 'Customer Support Lead', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya' },
  ]

  const values = [
    { label: 'Trust', desc: 'We build relationships on honesty and transparency.' },
    { label: 'Excellence', desc: 'Excellence in service is our commitment to you.' },
    { label: 'Innovation', desc: 'We continually improve to meet evolving traveler needs.' },
    { label: 'Sustainability', desc: 'Responsible travel for a better future planet.' },
  ]

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=600&fit=crop" alt="About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-2">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">About Sunshine Holidays</h1>
          <p className="text-slate-300 text-lg max-w-xl">15+ years of travel excellence and commitment to unforgettable journeys</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider text-sm uppercase">Since 2010</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4 text-lg leading-relaxed">
                Founded in 2010, Sunshine Holidays emerged from a simple dream: to make travel accessible, affordable, and unforgettable for everyone. Starting as a small travel desk in Chennai, we've grown into one of the most trusted names in the travel industry.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Over the past 15+ years, we've helped over 5,000 families create memories that last a lifetime. Our team of passionate travel experts has mastered the art of crafting perfect itineraries.
              </p>
              <p className="text-slate-600 leading-relaxed">
                What started as a dream has become a movement—where every traveler is treated like family, and every journey becomes a story worth telling.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=500&fit=crop"
                alt="About Sunshine Holidays"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-amber-400 text-white rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-extrabold">15+</p>
                <p className="text-sm font-semibold opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#0B1E36]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-5xl font-extrabold text-amber-400 mb-2">{stat.value}</p>
                <p className="text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-orange-500 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1E36] mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide exceptional travel experiences that transform lives, create lasting memories, and inspire people to explore the world with confidence, comfort, and cultural respect.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-amber-400 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={28} className="text-amber-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1E36] mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be recognized as India's most trusted and innovative travel agency, known for authentic experiences, customer-centric service, and sustainable travel practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Edge</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className="w-14 h-14 bg-orange-50 group-hover:bg-orange-500 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon size={26} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0B1E36] mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">The People</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-2xl mx-auto mb-4 bg-slate-100 p-1" />
                <h3 className="text-base font-extrabold text-[#0B1E36] mb-1">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-[#0B1E36] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-400 font-bold tracking-wider text-sm uppercase">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                <p className="text-2xl font-extrabold text-amber-400 mb-3">{v.label}</p>
                <p className="text-slate-300 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <span className="text-primary font-bold tracking-wider text-sm uppercase">Join Us</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2 mb-4">Start Your Journey Today</h2>
        <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied travelers who've experienced the world with Sunshine Holidays.
        </p>
        <button className="bg-gradient-to-r from-orange-500 to-amber-400 text-white px-10 py-3.5 rounded-full font-bold shadow-lg hover:shadow-orange-400/40 hover:scale-105 transition-all">
          Contact Us Now
        </button>
      </section>
    </div>
  )
}
