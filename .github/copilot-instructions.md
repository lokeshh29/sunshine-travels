# Sunshine Holidays Tours and Travels - Development Guidelines

## Project Overview
This is a premium Tours & Travels website for Sunshine Holidays Tours and Travels built with React, Tailwind CSS, and React Router v6.

## Tech Stack
- React 18 with Vite
- Tailwind CSS for styling
- React Router v6 for navigation
- Lucide React for icons
- Google Fonts (Poppins + Inter)

## Color Scheme
- Primary: #FF6B35 (Orange)
- Accent: #FFB400 (Golden Yellow)
- Dark: #1A2F5E (Deep Navy)
- Light: #F5F5F5 (Light Gray)

## Project Structure
- `/src/components` - Reusable UI components (Navbar, Footer, Cards, Modal, etc.)
- `/src/pages` - Page components (Home, About, DomesticTours, etc.)
- `/src/utils` - Utility functions and data (data.js contains packages, destinations)
- `/src/App.jsx` - Main app component with React Router setup
- `/src/index.css` - Global Tailwind CSS imports and custom styles

## Development Commands
- `npm run dev` - Start development server (opens at localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Key Features
1. Sticky navbar with scroll detection
2. Auto-playing hero slider with manual controls
3. Filter tabs for tour categories
4. Modal forms for enquiries
5. Toast notifications for form submissions
6. Mobile-responsive design with hamburger menu
7. Floating WhatsApp button
8. Mobile bottom navigation bar

## Component Guidelines
- Use Lucide React icons throughout
- Tailwind CSS for all styling (no inline CSS)
- Keep components functional and reusable
- Use React hooks (useState, useEffect) as needed
- Pass props for dynamic content

## Forms
All forms are frontend-only with success toast notifications:
- Enquiry modal for tour packages
- Car rental booking form
- Contact form
- All forms validate required fields

## Adding New Pages
1. Create new component in `/src/pages`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx` if needed
4. Follow existing page structure (banner, content sections)

## Adding New Packages
Edit `/src/utils/data.js` to add new packages to:
- `domesticPackages` object
- `internationalPackages` object

## Customization Tips
- Change colors in `tailwind.config.js` theme.colors
- Update company info in Navbar, Footer, and contact pages
- Replace Unsplash image URLs with actual images
- Update package data as needed
- Modify form fields in EnquiryModal and Contact pages

## Best Practices
- Use semantic HTML (h1, h2, h3 hierarchy)
- Keep components under 300 lines
- Use descriptive variable and component names
- Add comments for complex logic
- Test mobile responsiveness
- Optimize images for web

## Dependencies
All dependencies are in `package.json`:
- react & react-dom: UI framework
- react-router-dom: Client-side routing
- lucide-react: Icon library
- tailwindcss: Utility CSS framework
- vite: Build tool

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes
- Images are from Unsplash (consider hosting locally for production)
- No backend integration (forms are frontend-only)
- Smooth scroll behavior enabled globally
- Lazy loading for images recommended

## Common Issues & Solutions

### Images not loading
- Check Unsplash URL format
- Ensure image URLs are https
- Verify image dimensions (width & height)

### Styling not applying
- Clear browser cache
- Rebuild Tailwind CSS (`npm run dev`)
- Check class names in Tailwind config

### Forms not submitting
- All fields are required in forms
- Check browser console for errors
- Verify form field names match handleChange logic

## Support & Maintenance
- All code follows React best practices
- Component hierarchy is logically organized
- Responsive design tested on mobile devices
- Accessibility considerations implemented
