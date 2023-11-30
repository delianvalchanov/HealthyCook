import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Footer } from './components/Footer'
import { HomePage } from "./pages/HomePage";
import { ContactPage } from './pages/ContactPage'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
