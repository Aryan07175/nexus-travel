# NexusTravel: Premium 3D Travel Experience

![NexusTravel Demo]() <!-- You can add a screenshot link here later -->

NexusTravel is a next-generation, premium 3D travel website built with the MERN stack (MongoDB, Express, React, Node.js) and Three.js. It reimagines the travel booking experience by allowing users to interactively explore hand-picked global destinations on a 3D Earth model before booking.

## ✨ Features

- **Interactive 3D Globe**: Built with React Three Fiber, featuring custom shaders, glowing rings, and location markers.
- **Dynamic Multi-Currency Pricing**: Prices automatically display in the destination's native currency (e.g., ₹ for India, € for Europe, ¥ for Japan).
- **Premium UI Design**: A custom, CSS-only design system utilizing deep space dark mode, cyan neon accents, glassmorphism, and smooth micro-animations.
- **Advanced Filtering**: Instantly filter destinations by Region (India, Europe, Asia, etc.) and Category (Adventure, Romance, Beach, etc.) using stylish pill-chips.
- **RESTful Backend API**: Built on Express and MongoDB to serve seeded destination data natively to the frontend.
- **Responsive Architecture**: Fully optimized layout ensuring the premium experience scales elegantly onto mobile devices.

## 🚀 Technology Stack

**Frontend:**
- React (Vite)
- React Router DOM
- Three.js & @react-three/fiber
- Lucide React (Icons)
- Vanilla CSS (Custom Design System)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- RESTful JSON API

## 🛠️ Installation & Setup

### Prerequisites
Make sure you have Node.js and MongoDB installed and running on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/Aryan07175/nexus-travel.git
cd nexus-travel
```

### 2. Backend Setup
Navigate into the backend folder, install dependencies, and start the development server.

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/travel-3d-app
```

Seed the database with the curated destinations, then start the server:
```bash
node seed.js
npm run dev
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend folder, install dependencies, and start the Vite development server.

```bash
cd frontend
npm install
npm run dev
```

### 4. Explore
run this  `http://localhost:5173`


