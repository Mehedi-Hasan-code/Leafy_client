import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { router } from './routes/router.jsx';
import { RouterProvider } from 'react-router';
import AuthProvider from './context/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
