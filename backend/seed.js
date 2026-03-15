import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Destination from './models/Destination.js';

dotenv.config();

const EXPANDED_DESTINATIONS = [
  // --- INDIA ---
  {
    title: 'Taj Mahal, Agra, India',
    description: 'Witness the ultimate symbol of love. An ivory-white marble mausoleum on the right bank of the river Yamuna.',
    price: 65000,
    imageUrl: 'https://images.unsplash.com/photo-1564507592208-027041cb5899?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 27.1751, lng: 78.0421 },
    rating: 4.9,
    category: 'Culture',
    region: 'India',
    currency: 'INR',
    currencySymbol: '₹'
  },
  {
    title: 'Kerala Backwaters, India',
    description: 'Cruise through the serene and picturesque network of palm-fringed canals, lakes, and lagoons on a traditional houseboat.',
    price: 85000,
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0f9944?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 9.4981, lng: 76.3388 },
    rating: 4.8,
    category: 'Relaxation',
    region: 'India',
    currency: 'INR',
    currencySymbol: '₹'
  },
  {
    title: 'Goa Beaches, India',
    description: 'Experience the ultimate beach paradise with golden sands, vibrant nightlife, and Portuguese-influenced architecture.',
    price: 55000,
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 15.2993, lng: 74.1240 },
    rating: 4.7,
    category: 'Beach',
    region: 'India',
    currency: 'INR',
    currencySymbol: '₹'
  },
  {
    title: 'Jaipur, Rajasthan, India',
    description: 'Explore the Pink City, known for its magnificent forts, majestic palaces, and vibrant culture.',
    price: 70000,
    imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 26.9124, lng: 75.7873 },
    rating: 4.8,
    category: 'Culture',
    region: 'India',
    currency: 'INR',
    currencySymbol: '₹'
  },
  {
    title: 'Leh-Ladakh, India',
    description: 'Embark on a thrilling adventure through high-altitude desert landscapes, crystal clear lakes, and ancient monasteries.',
    price: 95000,
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 34.1526, lng: 77.5771 },
    rating: 4.9,
    category: 'Adventure',
    region: 'India',
    currency: 'INR',
    currencySymbol: '₹'
  },

  // --- EUROPE ---
  {
    title: 'Santorini, Greece',
    description: 'Experience the stunning sunsets and iconic blue-domed churches of Santorini. A perfect blend of romance and breathtaking views.',
    price: 1300,
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 36.3932, lng: 25.4615 },
    rating: 4.9,
    category: 'Romance',
    region: 'Europe',
    currency: 'EUR',
    currencySymbol: '€'
  },
  {
    title: 'Rome, Italy',
    description: 'Step back in time as you explore the Colosseum, Roman Forum, and vibrant cobblestone streets of the Eternal City.',
    price: 1250,
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    rating: 4.8,
    category: 'Culture',
    region: 'Europe',
    currency: 'EUR',
    currencySymbol: '€'
  },
  {
    title: 'Swiss Alps, Switzerland',
    description: 'Enjoy world-class skiing, phenomenal mountain vistas, and picturesque alpine villages.',
    price: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 46.8182, lng: 8.2275 },
    rating: 5.0,
    category: 'Adventure',
    region: 'Europe',
    currency: 'CHF',
    currencySymbol: 'Fr'
  },
  {
    title: 'Paris, France',
    description: 'The City of Light awaits setting the perfect scene for romance, incredible cuisine, and iconic art.',
    price: 1600,
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    rating: 4.7,
    category: 'City',
    region: 'Europe',
    currency: 'EUR',
    currencySymbol: '€'
  },

  // --- ASIA ---
  {
    title: 'Kyoto, Japan',
    description: 'Immerse yourself in traditional Japanese culture, breathtaking temples, and serene bamboo forests.',
    price: 320000,
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 35.0116, lng: 135.7681 },
    rating: 4.8,
    category: 'Culture',
    region: 'Asia',
    currency: 'JPY',
    currencySymbol: '¥'
  },
  {
    title: 'Bali, Indonesia',
    description: 'A paradise known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.',
    price: 25000000,
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: -8.4095, lng: 115.1889 },
    rating: 4.9,
    category: 'Relaxation',
    region: 'Asia',
    currency: 'IDR',
    currencySymbol: 'Rp'
  },

  // --- AMERICAS ---
  {
    title: 'Machu Picchu, Peru',
    description: 'Explore the ancient Incan citadel set high in the Andes Mountains. A true wonder of the world.',
    price: 6800,
    imageUrl: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: -13.1631, lng: -72.5450 },
    rating: 4.9,
    category: 'Adventure',
    region: 'Americas',
    currency: 'PEN',
    currencySymbol: 'S/'
  },
  {
    title: 'Banff National Park, Canada',
    description: 'Discover majestic mountains, turquoise glacial lakes, and abundant wildlife.',
    price: 1600,
    imageUrl: 'https://images.unsplash.com/photo-1561134643-66c8bb874f67?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 51.1784, lng: -115.5708 },
    rating: 4.7,
    category: 'Nature',
    region: 'Americas',
    currency: 'CAD',
    currencySymbol: 'CA$'
  },
  {
    title: 'New York City, USA',
    description: 'Experience the bustling energy of Times Square, Central Park, and world-class theatrical performances.',
    price: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    rating: 4.8,
    category: 'City',
    region: 'Americas',
    currency: 'USD',
    currencySymbol: '$'
  },

  // --- OCEANIA ---
  {
    title: 'Bora Bora, French Polynesia',
    description: 'Relax in overwater bungalows surrounded by a turquoise lagoon and coral reefs.',
    price: 380000,
    imageUrl: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: -16.5004, lng: -151.7415 },
    rating: 5.0,
    category: 'Relaxation',
    region: 'Oceania',
    currency: 'XPF',
    currencySymbol: '₣'
  },
  {
    title: 'Sydney, Australia',
    description: 'Witness the iconic Sydney Opera House and enjoy the sun at Bondi Beach.',
    price: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: -33.8688, lng: 151.2093 },
    rating: 4.6,
    category: 'City',
    region: 'Oceania',
    currency: 'AUD',
    currencySymbol: 'A$'
  },

  // --- AFRICA ---
  {
    title: 'Serengeti National Park, Tanzania',
    description: 'Witness the incredible Great Migration and spot the Big Five in this vast savanna.',
    price: 10000000,
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: -2.3333, lng: 34.8333 },
    rating: 4.9,
    category: 'Nature',
    region: 'Africa',
    currency: 'TZS',
    currencySymbol: 'TSh'
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/travel-3d-app');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Destination.deleteMany();
    console.log('Cleared existing destinations');

    // Insert new data
    await Destination.insertMany(EXPANDED_DESTINATIONS);
    console.log('Expanded destinations seeded successfully!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
