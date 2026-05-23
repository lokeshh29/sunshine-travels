import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
  Globe,
  Compass
} from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [toursOpen, setToursOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setToursOpen(false)
  }, [location.pathname])

  const tourLinks = [
    {
      name: 'Domestic Tours',
      path: '/domestic',
      icon: '🇮🇳',
      desc: 'Explore incredible India'
    },
    {
      name: 'International Tours',
      path: '/international',
      icon: '🌍',
      desc: 'Discover the world'
    },
    {
      name: 'All Packages',
      path: '/packages',
      icon: '📦',
      desc: 'Browse all categories'
    }
  ]

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tours', path: '#', hasDrop: true },
    { name: 'Car Rental', path: '/car-rental' },
    { name: 'Contact', path: '/contact' }
  ]

  const isToursActive = [
    '/domestic',
    '/international',
    '/packages'
  ].includes(location.pathname)

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-all text-sm font-medium"
            >
              <Phone size={14} />
              +91 98765 43210
            </a>

            <a
              href="mailto:info@sunshineholidays.com"
              className="flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-all text-sm font-medium"
            >
              <Mail size={14} />
              info@sunshineholidays.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-500 hover:text-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-4 z-50 mx-auto w-[95%] max-w-7xl rounded-[28px] transition-all duration-500 ${isScrolled
            ? 'bg-white/70 backdrop-blur-2xl border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.08)]'
            : 'bg-white/90 backdrop-blur-xl border border-slate-100'
          }`}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-4 group flex-shrink-0"
            >
              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-300 blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

                {/* Icon box */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 via-orange-400 to-amber-300 rotate-6 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-orange-200 flex items-center justify-center">
                  <Compass
                    size={24}
                    className="text-white"
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-extrabold tracking-tight text-[#0B1E36]">
                    Sunshine Holidays
                  </span>

                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-orange-500 font-bold mt-1">
                  Tours & Travels
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = link.hasDrop
                  ? isToursActive
                  : location.pathname === link.path

                if (link.hasDrop) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setToursOpen(true)}
                      onMouseLeave={() => setToursOpen(false)}
                    >
                      <button
                        className={`relative flex items-center gap-1 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:-translate-y-[1px] ${isActive
                            ? 'bg-orange-50 text-orange-600 shadow-sm'
                            : 'text-slate-600 hover:bg-orange-50/70 hover:text-orange-500'
                          }`}
                      >
                        {link.name}

                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${toursOpen ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {/* DROPDOWN */}
                      <AnimatePresence>
                        {toursOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.95,
                              y: -10,
                              rotate: -2
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              y: 0,
                              rotate: 0
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0.95,
                              y: -10
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-80 rounded-3xl overflow-hidden border border-white/40 bg-white/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.12)]"
                          >
                            <div className="p-3">
                              {tourLinks.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${location.pathname === item.path
                                      ? 'bg-orange-50'
                                      : 'hover:bg-slate-50'
                                    }`}
                                >
                                  <span className="text-3xl">
                                    {item.icon}
                                  </span>

                                  <div>
                                    <h4
                                      className={`font-bold text-sm transition-colors ${location.pathname === item.path
                                          ? 'text-orange-500'
                                          : 'text-slate-800 group-hover:text-orange-500'
                                        }`}
                                    >
                                      {item.name}
                                    </h4>

                                    <p className="text-xs text-slate-400 mt-1">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="px-5 py-4 border-t border-slate-100 bg-slate-50/60">
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Globe size={12} />
                                50+ destinations worldwide
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:-translate-y-[1px] ${isActive
                        ? 'bg-orange-50 text-orange-600 shadow-sm'
                        : 'text-slate-600 hover:bg-orange-50/70 hover:text-orange-500'
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>

            {/* RIGHT */}
            <div className="hidden md:flex items-center gap-3">

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 bg-white/70 text-slate-600 hover:border-orange-200 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300"
              >
                <Phone size={14} />
                <span className="text-sm font-semibold">
                  +91 98765 43210
                </span>
              </a>

              {/* CTA */}
              <Link
                to="/contact"
                className="relative overflow-hidden group px-7 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold text-sm shadow-xl shadow-orange-200 hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                <span className="relative z-10">
                  Book Now ✈️
                </span>

                {/* Shine */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-amber-400 to-orange-500 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-11 h-11 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl flex items-center justify-center text-slate-600 hover:text-orange-500 hover:border-orange-200 transition-all"
            >
              {isOpen ? (
                <X size={20} strokeWidth={2.5} />
              ) : (
                <Menu size={20} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="m-4 mt-0 p-4 rounded-[28px] bg-white/80 backdrop-blur-2xl border border-white/30 shadow-2xl space-y-2">

                {navLinks.map((link) => {
                  if (link.hasDrop) {
                    return (
                      <div key={link.name}>
                        <p className="px-4 pt-3 pb-2 text-[10px] uppercase tracking-[0.25em] text-slate-400 font-black">
                          Tour Options
                        </p>

                        {tourLinks.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-4 py-4 rounded-2xl transition-all text-sm font-semibold ${location.pathname === item.path
                                ? 'bg-orange-50 text-orange-500'
                                : 'text-slate-600 hover:bg-orange-50 hover:text-orange-500'
                              }`}
                          >
                            <span>{item.icon}</span>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-4 rounded-2xl transition-all text-sm font-semibold ${location.pathname === link.path
                          ? 'bg-orange-50 text-orange-500'
                          : 'text-slate-600 hover:bg-orange-50 hover:text-orange-500'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )
                })}

                <div className="pt-3 space-y-3">

                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl border border-slate-200 text-slate-700 hover:border-orange-300 hover:text-orange-500 transition-all"
                  >
                    <Phone size={15} />
                    +91 98765 43210
                  </a>

                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold shadow-lg"
                  >
                    Book Now ✈️
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}