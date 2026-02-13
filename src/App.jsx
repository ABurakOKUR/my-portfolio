import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SiteContextProvider } from './contexts/SiteContext';
import Header from './components/Header';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
  return (
    <SiteContextProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-custom-dark bg-white">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </main>
        <Footer />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </SiteContextProvider>
  );
}

export default App;