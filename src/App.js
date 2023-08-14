import Header from "./components/header/Header";
import ContactUs from "./components/contactUsBlock/ContactUs";
import Footer from "./components/footer/Footer";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Services from "./pages/Services";
import OurTeam from "./pages/TeamsPage";
import Contact from "./pages/ContactsPage";
import Room from "./pages/Room";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Room/:id" element={<Room />} />
          <Route path="/About" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/Contact" element={<Contact />} />

          {/* <Home /> */}
          {/* <About /> */}
          {/* <Services /> */}
          {/* <OurTeam /> */}
          {/* <ContactPage /> */}
        </Routes>
        <ContactUs />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
