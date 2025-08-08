# 🌿 Leafy - Garden Community Platform

A modern React-based web application that connects gardeners and plant enthusiasts, allowing them to share gardening tips, explore fellow gardeners, and build a thriving plant community.

## 🚀 Live Demo

**[Visit Leafy →](https://leary-cef28.web.app/)**

## ✨ Features

### 🌱 Core Functionality

- **User Authentication**: Secure sign-up, sign-in, and password recovery
- **Garden Tips Sharing**: Create, edit, and manage your gardening tips
- **Community Exploration**: Browse and discover fellow gardeners
- **Interactive Map**: Visual representation of active gardeners
- **Responsive Design**: Optimized for all devices

### 🎨 User Experience

- **Modern UI/UX**: Clean, intuitive interface with Tailwind CSS
- **Real-time Notifications**: Toast notifications for user feedback
- **Loading States**: Smooth loading experiences with skeleton screens
- **Error Handling**: Comprehensive error management and 404 pages

### 🔐 Security & Performance

- **Firebase Integration**: Secure authentication and data management
- **Protected Routes**: Private route implementation for authenticated users
- **Optimized Loading**: Data fetching with React Router loaders
- **SEO Friendly**: Proper meta tags and document titles

## 🛠️ Tech Stack

### Frontend

- **React 19** - Latest React with modern features
- **React Router DOM 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### UI/UX Libraries

- **Lucide React** - Beautiful icons
- **React Icons** - Icon library
- **React Slick** - Carousel component
- **React Toastify** - Toast notifications
- **SweetAlert2** - Beautiful alerts
- **React Tooltip** - Tooltip components

### Maps & Visualization

- **@vis.gl/react-google-maps** - Google Maps integration

### Animation & Effects

- **React Simple Typewriter** - Typewriter effect

### Development Tools

- **ESLint** - Code linting
- **TypeScript Support** - Type definitions for React

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Leafy-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Firebase configuration:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Navbar, Footer, etc.)
│   ├── gardeners/      # Gardener-related components
│   ├── home/          # Home page components
│   └── tip/           # Tip-related components
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
├── pages/              # Page components
├── Private/            # Private route components
├── routes/             # Routing configuration
└── services/           # External services (Firebase config)
```

## 🌟 Key Features Explained

### Authentication System

- Firebase Authentication integration
- Email/password authentication
- Password recovery functionality
- Protected routes for authenticated users

### Garden Tips Management

- Create and share gardening tips
- Edit and update existing tips
- View personal tip collection
- Public tip browsing

### Community Features

- Explore fellow gardeners
- Interactive Google Maps integration
- Active gardeners showcase
- User profiles and connections

### Modern UI/UX

- Responsive design with Tailwind CSS
- Smooth animations and transitions
- Loading states and error handling
- Toast notifications for user feedback

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project
2. Enable Authentication (Email/Password)
3. Set up Firestore Database
4. Add your Firebase config to environment variables

### Google Maps API

- Obtain Google Maps API key
- Enable Maps JavaScript API
- Add API key to environment variables

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Firebase](https://firebase.google.com/) - Backend-as-a-Service platform
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

---

**Built with ❤️ for the gardening community**

_Connect with fellow gardeners, share your knowledge, and grow together! 🌱_
