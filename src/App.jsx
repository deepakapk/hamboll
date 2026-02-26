import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./Pages/AboutPage";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfServices";
import ScrollToTop from "./utilities/ScollToTop";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
      />
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
