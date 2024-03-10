import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css"; 
import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";
import Aboutus from "./pages/Aboutpage";
import Whatwedo from "./pages/WhatWeDo";
import Contact from "./pages/Contact";
import Footer from "./components/layouts/Footer";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/whatwedo" element={<Whatwedo />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blog" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
