import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Compass } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0B1E36] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-400 rounded-xl flex items-center justify-center shadow-md">
                <Compass size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-lg leading-tight">Sunshine Holidays</span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.15em]">Tours & Travels</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for unforgettable journeys across India and around the world. Crafting memories, one trip at a time.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group">
                  <Icon size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/domestic', label: 'Domestic Tours' },
                { to: '/international', label: 'International Tours' },
                { to: '/packages', label: 'Packages' },
                { to: '/car-rental', label: 'Car & Bus Rental' },
                { to: '/contact', label: 'Contact' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-slate-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2">
                    <span className="text-orange-500/50">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Popular Packages</h4>
            <ul className="space-y-3">
              {['Coorg Coffee Trail', 'Chikmagalur Escape', 'Mysore Royal Heritage', 'Kerala Backwaters', 'Kashmir Paradise', 'Dubai Glamour'].map((pkg, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2">
                    <span className="text-orange-500/50">›</span>
                    {pkg}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-orange-400" />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">Anna Salai, Chennai, Tamil Nadu, India</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-orange-400" />
                </div>
                <a href="tel:+919876543210" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">+91 98765 43210</a>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-orange-400" />
                </div>
                <a href="mailto:info@sunshineholidays.com" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">info@sunshineholidays.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Border */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Sunshine Holidays Tours and Travels. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-400 transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
