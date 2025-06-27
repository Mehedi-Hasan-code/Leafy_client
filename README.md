# 🌿 Leafy — Gardening Made Simple

**Live Site:** [https://leary-cef28.web.app/](https://leary-cef28.web.app/)

Leafy is a beautifully designed gardening web application where users can explore plant care tips, gardening tools, and more — all through an intuitive and modern interface. Built with the MERN stack and enhanced with interactive UI libraries, Leafy brings your garden to your screen.

---

## 🚀 Features

- 🪴 Browse gardening tools, guides, and plants  
- 🗺️ Google Maps integration for nearby plant nurseries or delivery coverage  
- 🔍 Real-time search and filtering  
- 🛒 Add to cart and order tracking  
- 📦 Admin dashboard for managing products/orders  
- 🔐 Authentication and authorization  
- 🌙 Dark/light mode support  
- 🍃 Responsive and mobile-friendly design  

---

## 🛠️ Tech Stack

### Frontend

- React `^19.1.0`  
- Tailwind CSS `^4.1.7`  
- DaisyUI  
- React Router DOM `^7.6.0`  
- React Icons, Lucide React  
- React Toastify `^11.0.5`, SweetAlert2 `^11.21.2`  
- React Slick `^0.30.3`, Slick Carousel `^1.8.1`  
- React Tooltip `^5.28.1`  
- React Simple Typewriter `^5.0.1`  
- @vis.gl/react-google-maps `^1.5.2`  

### Backend

- Express.js  
- MongoDB (with Mongoose)  
- Firebase (Authentication & Hosting)  


⚙️ Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/leafy.git
cd leafy
Install dependencies

bash
Copy
Edit
npm install
cd client && npm install
Configure environment variables

Create a .env file in the root and client/ with the following (example):

ini
Copy
Edit
MONGODB_URI=your_mongodb_uri
FIREBASE_API_KEY=your_firebase_key
GOOGLE_MAPS_API_KEY=your_google_maps_key
Run development server

bash
Copy
Edit
# In root
npm run dev
🔐 Authentication
Firebase Authentication is used for user sign-up, login, and role-based access.

Admin users can manage inventory and orders.

📦 Deployment
Frontend deployed on Firebase Hosting

Backend can be deployed via Render, Railway, or Vercel

MongoDB hosted on MongoDB Atlas

📌 Upcoming Features
🌾 Gardening blog/articles section

📝 User reviews and comments

💬 Live chat support

📱 PWA support for offline access

🙌 Acknowledgements
Tailwind CSS

DaisyUI

Firebase

MongoDB Atlas

React Simple Typewriter

SweetAlert2

📬 Contact
Author: Mehedi Hasan
Email: quazimehedihasanovi@gmail.com
GitHub: Mehedi-Hasan-code
