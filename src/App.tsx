import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Person from "./components/Person/Person";
import index from "./index.css";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer
 from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title title="Our Team" />
      <Person />
      <div className="max-w-screen-xl mx-auto p-4">
        <About />
      </div>
      <div className="max-w-screen-xl mx-auto p-4">
        <Title title="Gallery" />
        <Gallery />
        <Title title="Testimonials" />
        <Testimonials />
        <Title title="Contact Us" />
        <Contact />
        <Footer />

      </div>
    </div>
  );
};

export default App;
