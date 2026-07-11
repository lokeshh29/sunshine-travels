import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Phone, Mail, Facebook, Instagram, Youtube, ChevronDown, Compass, MapPin
} from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [domesticOpen, setDomesticOpen] = useState(false)
  const [internationalOpen, setInternationalOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setDomesticOpen(false)
    setInternationalOpen(false)
  }, [location.pathname])

  const domesticCategories = [
    { title: 'Kerala', items: ['Wayanad', 'Munnar', 'Alappuzha', 'Kochi', 'Vagamon', 'Varkala'] },
    { title: 'Karnataka', items: ['Coorg', 'Chikkamagaluru', 'Dandeli', 'Gokarna', 'Mysuru', 'Hampi'] },
    { title: 'North India', items: ['Pune', 'Goa', 'Manali', 'Golden Triangle', 'Rajasthan', 'Kashmir'] },
    { title: 'Tamilnadu', items: ['Ooty', 'Kodaikanal', 'Pondy'] }
  ]

  const internationalItems = ['Bali', 'Thailand', 'Malaysia', 'Singapore', 'Sri Lanka', 'Dubai', 'Maldives']

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Domestic', path: '/domestic', isDomestic: true },
    { name: 'International', path: '/international', isInternational: true },
    { name: 'Packages', path: '/packages' },
    { name: 'Car Rental', path: '/car-rental' },
    { name: 'Contact Us', path: '/contact' },
  ]

  // Hover timeout for mega menus to prevent flickering
  let timeoutId;
  const handleMouseEnter = (setter) => {
    clearTimeout(timeoutId);
    setDomesticOpen(false);
    setInternationalOpen(false);
    setter(true);
  }
  const handleMouseLeave = (setter) => {
    timeoutId = setTimeout(() => setter(false), 200);
  }

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden md:block bg-slate-50/80 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-all text-xs font-medium">
              <Phone size={12} /> +91 98765 43210
            </a>
            <a href="mailto:info@sunshineholidays.com" className="flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-all text-xs font-medium">
              <Mail size={12} /> info@sunshineholidays.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-7 h-7 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-200 hover:-translate-y-0.5 transition-all duration-300">
                <Icon size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)]'
            : 'bg-white/95 backdrop-blur-xl border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="flex items-center justify-between h-[70px]">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0 mr-4">
              <div className="relative">
                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#F7D794] to-[#F5CD7A] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Compass size={20} className="text-[#0B1E36]" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-extrabold tracking-tight text-[#0B1E36]">Sunshine</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#F5CD7A] font-bold mt-0.5">Tours & Travels</span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                if (link.isDomestic) {
                  return (
                    <div key={link.name} className="relative" onMouseEnter={() => handleMouseEnter(setDomesticOpen)} onMouseLeave={() => handleMouseLeave(setDomesticOpen)}>
                      <button onClick={() => navigate(link.path)} className={`relative flex items-center gap-1 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${isActive ? 'text-[#F5CD7A]' : 'text-slate-600 hover:text-[#F5CD7A]'}`}>
                        {link.name}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${domesticOpen ? 'rotate-180 text-[#F5CD7A]' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {domesticOpen && (
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] rounded-2xl overflow-hidden shadow-2xl bg-[#F7D794] border border-white/20 p-8 flex gap-8 z-[100]"
                          >
                            {domesticCategories.map((cat, idx) => (
                              <div key={idx} className="flex-1 relative">
                                {idx !== 0 && <div className="absolute -left-4 top-0 bottom-0 w-px bg-white/30" />}
                                <h3 className="text-[#0B1E36] font-bold text-lg mb-4">{cat.title}</h3>
                                <div className="w-8 h-[2px] bg-white/50 mb-4" />
                                <ul className="space-y-3">
                                  {cat.items.map(item => (
                                    <li key={item}>
                                      <Link to={`/domestic?place=${encodeURIComponent(item)}`} className="text-[#0B1E36]/70 hover:text-[#0B1E36] text-sm flex items-center gap-2 group transition-colors">
                                        <MapPin size={12} className="text-[#0B1E36]/40 group-hover:text-[#0B1E36] transition-colors" /> {item}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                if (link.isInternational) {
                  return (
                    <div key={link.name} className="relative" onMouseEnter={() => handleMouseEnter(setInternationalOpen)} onMouseLeave={() => handleMouseLeave(setInternationalOpen)}>
                      <button onClick={() => navigate(link.path)} className={`relative flex items-center gap-1 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${isActive ? 'text-[#F5CD7A]' : 'text-slate-600 hover:text-[#F5CD7A]'}`}>
                        {link.name}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${internationalOpen ? 'rotate-180 text-[#F5CD7A]' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {internationalOpen && (
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[250px] rounded-2xl overflow-hidden shadow-2xl bg-[#F7D794] border border-white/20 p-6 z-[100]"
                          >
                            <ul className="space-y-4">
                              {internationalItems.map((item, idx) => (
                                <li key={item} className="relative">
                                  <Link to={`/international?category=${encodeURIComponent(item)}`} className="text-[#0B1E36]/70 hover:text-[#0B1E36] text-sm flex items-center gap-2 group transition-colors">
                                    <MapPin size={12} className="text-[#0B1E36]/40 group-hover:text-[#0B1E36] transition-colors" /> {item}
                                  </Link>
                                  {idx !== internationalItems.length - 1 && <div className="w-full h-[1px] bg-white/30 mt-4" />}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link key={link.name} to={link.path} className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${isActive ? 'text-[#F5CD7A]' : 'text-slate-600 hover:text-[#F5CD7A]'}`}>
                    {link.name}
                  </Link>
                )
              })}
            </div>

            {/* RIGHT CTA */}
            <div className="hidden lg:flex items-center gap-3 ml-2">
              <Link to="/contact" className="relative overflow-hidden group px-6 py-2.5 rounded-xl bg-[#0EA5E9] text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">Enquire Now</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white border-t border-slate-100">
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-xl font-semibold ${location.pathname === link.path ? 'bg-[#F5CD7A]/20 text-[#F5CD7A]' : 'text-slate-600'}`}>
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#0EA5E9] text-white font-bold text-sm w-full mt-4">
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}