import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import { Footer } from './components/Footer/Footer'
import { HomePage } from "./pages/HomePage";
import { AboutPage } from './pages/AboutPage'
import { MenuPage } from './pages/MenuPage'
import { ContactPage } from './pages/ContactPage'

import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
