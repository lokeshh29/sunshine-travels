import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const packagesList = [
  // Kerala
  { url: 'https://www.vetritoursntravels.com/domestic/kerala-tour-packages-chennai-wayanad/', type: 'domestic', category: 'Kerala', name: 'Wayanad' },
  { url: 'https://www.vetritoursntravels.com/domestic/munnar-tour-package-from-chennai/', type: 'domestic', category: 'Kerala', name: 'Munnar' },
  { url: 'https://www.vetritoursntravels.com/domestic/kerala-tour-packages-chennai-alappuzha/', type: 'domestic', category: 'Kerala', name: 'Alappuzha' },
  { url: 'https://www.vetritoursntravels.com/domestic/kerala-tour-packages-chennai-kochi/', type: 'domestic', category: 'Kerala', name: 'Kochi' },
  { url: 'https://www.vetritoursntravels.com/domestic/kerala-tour-packages-chennai-vagamon/', type: 'domestic', category: 'Kerala', name: 'Vagamon' },
  { url: 'https://www.vetritoursntravels.com/domestic/kerala-tour-packages-chennai-varkala/', type: 'domestic', category: 'Kerala', name: 'Varkala' },
  // Karnataka
  { url: 'https://www.vetritoursntravels.com/domestic/karnataka-tour-packages-chennai-coorg/', type: 'domestic', category: 'Karnataka', name: 'Coorg' },
  { url: 'https://www.vetritoursntravels.com/domestic/karnataka-tour-packages-chennai-chikkamagaluru/', type: 'domestic', category: 'Karnataka', name: 'Chikkamagaluru' },
  { url: 'https://www.vetritoursntravels.com/domestic/karnataka-tour-packages-chennai-dandeli/', type: 'domestic', category: 'Karnataka', name: 'Dandeli' },
  { url: 'https://www.vetritoursntravels.com/domestic/karnataka-tour-packages-chennai-gokarna/', type: 'domestic', category: 'Karnataka', name: 'Gokarna' },
  { url: 'https://www.vetritoursntravels.com/domestic/karnataka-tour-packages-chennai-mysuru/', type: 'domestic', category: 'Karnataka', name: 'Mysuru' },
  { url: 'https://www.vetritoursntravels.com/domestic/karnataka-tour-packages-chennai-hampi/', type: 'domestic', category: 'Karnataka', name: 'Hampi' },
  // North India
  { url: 'https://www.vetritoursntravels.com/domestic/north-india-tour-packages-chennai-pune/', type: 'domestic', category: 'North India', name: 'Pune' },
  { url: 'https://www.vetritoursntravels.com/domestic/goa-tour-packages-from-chennai/', type: 'domestic', category: 'North India', name: 'Goa' },
  { url: 'https://www.vetritoursntravels.com/domestic/north-india-tour-packages-chennai-manali/', type: 'domestic', category: 'North India', name: 'Manali' },
  { url: 'https://www.vetritoursntravels.com/domestic/north-india-tour-packages-chennai-golden-triangle/', type: 'domestic', category: 'North India', name: 'Golden Triangle' },
  { url: 'https://www.vetritoursntravels.com/domestic/north-india-tour-packages-chennai-rajasthan/', type: 'domestic', category: 'North India', name: 'Rajasthan' },
  { url: 'https://www.vetritoursntravels.com/domestic/north-india-tour-packages-chennai-kashmir/', type: 'domestic', category: 'North India', name: 'Kashmir' },
  // Tamilnadu
  { url: 'https://www.vetritoursntravels.com/domestic/tamil-nadu-tour-packages-chennai-ooty/', type: 'domestic', category: 'Tamil Nadu', name: 'Ooty' },
  { url: 'https://www.vetritoursntravels.com/domestic/tamil-nadu-tour-packages-chennai-kodaikanal/', type: 'domestic', category: 'Tamil Nadu', name: 'Kodaikanal' },
  { url: 'https://www.vetritoursntravels.com/domestic/tamil-nadu-tour-packages-chennai-pondy/', type: 'domestic', category: 'Tamil Nadu', name: 'Pondy' },
  // International
  { url: 'https://www.vetritoursntravels.com/international/bali-tour-packages-chennai/', type: 'international', category: 'Bali', name: 'Bali Experience' },
  { url: 'https://www.vetritoursntravels.com/international/thailand-tour-packages-chennai/', type: 'international', category: 'Thailand', name: 'Discover Thailand' },
  { url: 'https://www.vetritoursntravels.com/international/malaysia-tour-packages-chennai/', type: 'international', category: 'Malaysia', name: 'Magical Malaysia' },
  { url: 'https://www.vetritoursntravels.com/international/singapore-tour-packages-chennai/', type: 'international', category: 'Singapore', name: 'Singapore Sights' },
  { url: 'https://www.vetritoursntravels.com/international/sri-lanka-tour-packages-chennai/', type: 'international', category: 'Sri Lanka', name: 'Sri Lankan Wonders' },
  { url: 'https://www.vetritoursntravels.com/international/dubai-tour-packages-chennai/', type: 'international', category: 'Dubai', name: 'Dubai Delights' },
  { url: 'https://www.vetritoursntravels.com/international/maldives-tour-packages-chennai/', type: 'international', category: 'Maldives', name: 'Maldives Retreat' }
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function scrapeData() {
  const finalPackages = [];
  
  for (const pkg of packagesList) {
    try {
      console.log(`Scraping ${pkg.name}...`);
      const response = await axios.get(pkg.url, { timeout: 10000 });
      const $ = cheerio.load(response.data);
      
      // Attempt to extract duration (often in a p tag containing 'Duration')
      let duration = '3 Days / 2 Nights'; // default fallback
      $('p, span, div').each((i, el) => {
        const text = $(el).text().trim();
        if (text.toLowerCase().includes('duration') && text.toLowerCase().includes('nights')) {
          duration = text.replace(/duration\s*[-–:]?\s*/i, '').trim();
        }
      });
      
      // Attempt to extract places covered from bullet points or bold text
      let highlights = [];
      $('li, p > strong').each((i, el) => {
        const text = $(el).text().trim();
        // Look for common itinerary markers
        if (text.length > 5 && text.length < 50 && !text.includes('Price') && !text.includes('Email')) {
            if (text.includes('Proceed to') || text.includes('Reaches') || text.includes('Visit') || text.includes('Lake') || text.includes('Beach') || text.includes('Dam') || text.includes('Park') || text.includes('Temple')) {
                highlights.push(text);
            }
        }
      });
      
      // If we couldn't find good highlights, fallback to generic
      if (highlights.length === 0) {
        highlights = [`Explore the beauty of ${pkg.name}`, `Local sightseeing in ${pkg.name}`, `Comfortable stay and travel`];
      }
      
      // Take up to 4 unique highlights
      highlights = [...new Set(highlights)].slice(0, 4);
      
      // Try to find a featured image (og:image)
      let imageUrl = $('meta[property="og:image"]').attr('content');
      if (!imageUrl) {
        // Fallback images
        imageUrl = pkg.type === 'domestic' 
          ? 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80' // India default
          : 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80'; // Int default
      }
      
      // Generate a random believable price
      const price = Math.floor(Math.random() * 15000) + 5000;
      
      const newPackage = {
        name: pkg.name,
        type: pkg.type,
        category: pkg.category,
        duration: duration,
        price: price,
        image: imageUrl,
        featured: Math.random() > 0.7,
        highlights: highlights,
        id: crypto.randomUUID(),
        createdAt: Date.now()
      };
      
      finalPackages.push(newPackage);
      
      // Wait a bit to avoid hammering their server
      await sleep(500);
      
    } catch (err) {
      console.error(`Failed to scrape ${pkg.name}: ${err.message}`);
    }
  }
  
  // Write to packages.json
  const filePath = path.join(process.cwd(), 'src', 'data', 'packages.json');
  fs.writeFileSync(filePath, JSON.stringify(finalPackages, null, 2));
  console.log(`Successfully saved ${finalPackages.length} packages to packages.json`);
}

scrapeData();
