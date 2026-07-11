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
    <div className="bg-[#F7D794]">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=600&fit=crop" alt="About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/90 to-[#0B1E36]/50" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <span className="inline-flex items-center gap-2 bg-[#F5CD7A]/20 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#F5CD7A]/30 w-fit">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">About Sunshine Holidays</h1>
          <p className="text-[#F7D794] text-lg max-w-xl">15+ years of travel excellence and commitment to unforgettable journeys</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                Since 2010
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2 mb-6">Our Story</h2>
              <p className="text-[#0B1E36]/80 mb-4 text-lg leading-relaxed">
                Founded in 2010, Sunshine Holidays emerged from a simple dream: to make travel accessible, affordable, and unforgettable for everyone. Starting as a small travel desk in Chennai, we've grown into one of the most trusted names in the travel industry.
              </p>
              <p className="text-[#0B1E36]/80 mb-4 leading-relaxed">
                Over the past 15+ years, we've helped over 5,000 families create memories that last a lifetime. Our team of passionate travel experts has mastered the art of crafting perfect itineraries.
              </p>
              <p className="text-[#0B1E36]/80 leading-relaxed">
                What started as a dream has become a movement—where every traveler is treated like family, and every journey becomes a story worth telling.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=500&fit=crop"
                alt="About Sunshine Holidays"
                className="rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0B1E36] text-white rounded-2xl p-5 shadow-lg">
                <p className="text-3xl font-extrabold text-[#F5CD7A]">15+</p>
                <p className="text-sm font-semibold opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#0B1E36]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.08] transition-all duration-300">
                <p className="text-4xl font-extrabold text-[#F5CD7A] mb-2">{stat.value}</p>
                <p className="text-slate-400 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-[#F5CD7A]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 rounded-3xl p-8 border border-white/20 hover:bg-white/80 hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 bg-[#0B1E36]/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={24} className="text-[#0B1E36]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1E36] mb-4">Our Mission</h3>
              <p className="text-[#0B1E36]/70 leading-relaxed">
                To provide exceptional travel experiences that transform lives, create lasting memories, and inspire people to explore the world with confidence, comfort, and cultural respect.
              </p>
            </div>
            <div className="bg-white/50 rounded-3xl p-8 border border-white/20 hover:bg-white/80 hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 bg-[#0B1E36]/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={24} className="text-[#0B1E36]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1E36] mb-4">Our Vision</h3>
              <p className="text-[#0B1E36]/70 leading-relaxed">
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
            <span className="inline-flex items-center gap-2 bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Our Edge
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group p-7 rounded-3xl border border-white/20 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/50">
                  <div className="w-12 h-12 bg-[#0B1E36]/10 group-hover:bg-[#0B1E36] rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={22} className="text-[#0B1E36] group-hover:text-[#F5CD7A] transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0B1E36] mb-2">{item.title}</h3>
                  <p className="text-[#0B1E36]/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>



      {/* Core Values */}
      <section className="py-20 px-4 bg-[#0B1E36] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#F5CD7A]/20 text-[#F5CD7A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-[#F5CD7A]/30">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 text-center hover:bg-white/[0.08] transition-all duration-300">
                <p className="text-xl font-extrabold text-[#F5CD7A] mb-3">{v.label}</p>
                <p className="text-slate-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <span className="inline-flex items-center gap-2 bg-[#0B1E36]/10 text-[#0B1E36] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
          Join Us
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] mt-2 mb-4">Start Your Journey Today</h2>
        <p className="text-[#0B1E36]/70 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied travelers who've experienced the world with Sunshine Holidays.
        </p>
        <button className="bg-[#0B1E36] text-[#F5CD7A] px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:bg-[#153259] hover:-translate-y-0.5 transition-all duration-300">
          Contact Us Now
        </button>
      </section>
    </div>
  )
}
