import React from "react";
import About from "../../components/about/About";
import Courses from "../../components/courses/Courses";
import Events from "../../components/events/Events";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Stats from "../../components/statistics/Stats";
import Topbar from "../../components/topBar/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Courses />
      <Events />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
