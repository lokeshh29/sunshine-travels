# Sunshine Holidays Tours and Travels

A premium, mobile-responsive Tours & Travels website for Sunshine Holidays Tours and Travels—the best travel agency in Chennai.

## 🎯 Features

- **Modern Design**: Premium and warm color scheme with orange (#FF6B35), golden yellow (#FFB400), and deep navy blue (#1A2F5E)
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop
- **Rich Pages**: Home, About, Domestic Tours, International Tours, Packages, Car Rental, and Contact
- **Interactive Components**: Hero slider, filter tabs, modals, dropdowns, and carousels
- **Global Navigation**: Sticky navbar with dropdowns and mobile hamburger menu
- **WhatsApp Integration**: Floating button and mobile bottom bar for easy contact
- **Forms & Modals**: Enquiry forms with toast notifications
- **SEO-Friendly**: Proper heading hierarchy and semantic HTML

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Animations**: Framer Motion (optional)
- **Build Tool**: Vite
- **Fonts**: Poppins (headings) + Inter (body) from Google Fonts

## 📋 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FloatingWhatsApp.jsx
│   ├── MobileBottomBar.jsx
│   ├── HeroSlider.jsx
│   ├── PackageCard.jsx
│   ├── DestinationCard.jsx
│   ├── TestimonialCard.jsx
│   ├── FAQItem.jsx
│   ├── EnquiryModal.jsx
│   └── Toast.jsx
├── pages/               # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── DomesticTours.jsx
│   ├── InternationalTours.jsx
│   ├── Packages.jsx
│   ├── CarRental.jsx
│   └── Contact.jsx
├── utils/
│   └── data.js          # Packages, destinations, testimonials data
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

To build for production:
```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📄 Pages Overview

### Home (`/`)
- Hero slider with auto-play
- Search bar for destination, date, and travelers
- About snippet with company highlights
- Stats bar with key metrics
- Popular destinations grid
- Tour categories
- Why choose us section
- Gallery with hover effects
- Testimonials slider
- FAQ accordion
- Contact CTA section

### About (`/about`)
- Company story
- Mission & vision cards
- Stats overview
- Why choose us (expanded)
- Team section
- Core values
- CTA

### Domestic Tours (`/domestic`)
- Sticky filter tabs (All, Kerala, Karnataka, North India, Tamil Nadu, Goa)
- Package cards grid
- Info section about domestic tourism

### International Tours (`/international`)
- Filter tabs for different countries
- Package cards with pricing
- Travel information cards
- Benefits section

### Packages (`/packages`)
- 6 package category cards
- What's included section
- Customization options

### Car Rental (`/car-rental`)
- 4 service types
- Fleet options (Sedan, SUV, Tempo Traveller)
- Why choose us section
- Booking form

### Contact (`/contact`)
- 4 info cards (Phone, Email, Address, WhatsApp)
- Google Maps embed
- Contact form
- Business hours
- Quick help section

## 🎨 Color Scheme

- **Primary**: #FF6B35 (Orange)
- **Accent**: #FFB400 (Golden Yellow)
- **Dark**: #1A2F5E (Deep Navy)
- **Light**: #F5F5F5 (Light Gray)

## 📱 Mobile Responsiveness

- Hamburger menu for mobile navigation
- Sticky bottom bar (Mobile: Call, WhatsApp, Enquire)
- Responsive grid layouts
- Touch-friendly buttons and forms
- Optimized images

## 🔧 Global Components

### Navbar
- Top bar with contact info and social icons
- Sticky navigation with logo and links
- Dropdown menus for Domestic, International, and Packages
- Mobile hamburger menu

### Footer
- Brand section with tagline
- Quick links
- Popular packages
- Contact information
- Social media links
- Copyright notice

### Floating WhatsApp Button
- Fixed bottom-right corner
- Links to WhatsApp chat

### Mobile Bottom Bar
- Call, WhatsApp, and Enquire buttons
- Visible only on mobile devices

## 📋 Forms

All forms are frontend-only with success toast notifications:
- Enquiry modal (for tour packages)
- Car rental booking form
- Contact form
- Email signup (in CTA sections)

## 🌐 External Resources

- **Images**: Unsplash URLs (travel-related, high quality)
- **Fonts**: Google Fonts (Poppins, Inter)
- **Icons**: Lucide React
- **Maps**: Google Maps embed (placeholder)

## 📞 Brand Information

- **Company**: Sunshine Holidays Tours and Travels
- **Tagline**: "Your Journey, Our Passion"
- **Phone**: +91 98765 43210
- **Email**: info@sunshineholidays.com
- **Address**: Anna Salai, Chennai, Tamil Nadu, India
- **WhatsApp**: +91 98765 43210

## 🎯 Key Features

✅ Sticky navigation with scroll detection
✅ Auto-playing hero slider with manual controls
✅ Filter tabs for tour categories
✅ Modal enquiry forms with validation
✅ Toast notifications for form submissions
✅ Responsive grid layouts
✅ Hover animations on cards
✅ Smooth scroll behavior
✅ Mobile-optimized UI
✅ Accessibility-friendly

## 📝 Notes

- All forms show success messages only (no backend integration)
- Image URLs are from Unsplash (replace with actual images as needed)
- Placeholder avatar images use DiceBear API
- Maps embed uses Google Maps (requires valid API key for production)

## 🤝 Contributing

This is a template project. Feel free to customize colors, content, and features as needed.

## 📄 License

All rights reserved © 2026 Sunshine Holidays Tours and Travels.
# sunshine-travels
