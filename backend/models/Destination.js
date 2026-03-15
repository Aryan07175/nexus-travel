import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Adventure', 'Culture', 'Beach', 'Nature', 'City', 'Relaxation', 'Romance'],
    default: 'Culture'
  },
  region: {
    type: String,
    required: true,
    enum: ['India', 'Europe', 'Asia', 'Americas', 'Oceania', 'Africa'],
    default: 'India'
  },
  currency: {
    type: String,
    required: true,
    default: 'INR'
  },
  currencySymbol: {
    type: String,
    required: true,
    default: '₹'
  },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  rating: {
    type: Number,
    default: 4.5,
  }
}, { timestamps: true });

const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;
