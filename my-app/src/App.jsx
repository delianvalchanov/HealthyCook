import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { MenuPage } from "./pages/MenuPage";
import { ContactPage } from "./pages/ContactPage";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignInModal } from "./components/Header/SignInModal";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
   return (
      <AuthProvider>
         <Header />
         <main id="main">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/menu" element={<MenuPage />} />
               <Route path="/contacts" element={<ContactPage />} />
               <Route path="/login" element={<SignInModal />} />
            </Routes>
         </main>
         <Footer />
      </AuthProvider>
   );
}

export default App;
