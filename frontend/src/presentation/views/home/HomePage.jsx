import "@/styles/home-style.css";
import { useRef, useState } from "react";
import HeroSection from "./section/HeroSection";
import Navbar from "./layout/Navbar";
import ProductSection from "./section/ProductSection";
import AboutSection from "./section/AboutSection";
import Cursor from "./layout/Cursor";
import GallerySection from "./section/GallerySection";
import CtaSection from "./section/CtaSection";
import FinaleSection from "./section/FinaleSection";
import Footer from "./layout/Footer";
// import { ReactComponent as Logo } from "/layout/background/svg-path.svg";

export default function HomePage() {
  const [cursorOpen, setCursorOpen] = useState(false);

  return (
    <div>
      <Cursor cursorOpen={cursorOpen} />
      <Navbar />
      <HeroSection />
      <ProductSection setCursorOpen={setCursorOpen} />
      <AboutSection />
      <GallerySection />
      <CtaSection />
      <FinaleSection />
      <Footer />
    </div>
  );
}
