import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0B1E36] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white font-extrabold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-xl leading-tight">Sunshine Holidays</span>
                <span className="text-slate-400 text-xs font-medium">Tours and Travels</span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted partner for unforgettable journeys across India and around the world. Crafting memories, one trip at a time.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> About Us</Link></li>
              <li><Link to="/domestic" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Domestic Tours</Link></li>
              <li><Link to="/international" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> International Tours</Link></li>
              <li><Link to="/packages" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Packages</Link></li>
              <li><Link to="/car-rental" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Car Rental</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Contact</Link></li>
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Popular Packages</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Kerala Backwaters</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Kashmir Paradise</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Goa Beach Escape</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Dubai Glamour</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Bali Getaway</a></li>
              <li><a href="#" className="text-slate-300 hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Singapore Lights</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">Anna Salai, Chennai, Tamil Nadu, India</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-slate-300 hover:text-primary transition-colors text-sm">+91 98765 43210</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@sunshineholidays.com" className="text-slate-300 hover:text-primary transition-colors text-sm">info@sunshineholidays.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Border */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2026 Sunshine Holidays Tours and Travels. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
