import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/landing/Home";
import Staff from "./screens/staff/Staff";
import Curriculum from "./screens/curriculum/Curriculum";
import About from "./screens/about/About";
import Fee from "./screens/fee/Fee";
import News from "./screens/news/New";
import Contact from "./screens/contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/about" element={<About />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
