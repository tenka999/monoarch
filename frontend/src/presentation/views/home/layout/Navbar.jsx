import "@/styles/navbar-style.css";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 30);
      setScrollUp(currentY < lastY);

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar ${scrolled ? "scrolled" : ""} ${scrollUp ? "scroll-up" : ""}`}
    >
      <div className="navbar-top">
        <div className="navbar-top-links">
          <a href="">WOMAN</a>
          <a href="">MAN</a>
          <a href="">KIDS</a>
        </div>
        <div className="navbar-top-logo">MONOARCH</div>
        <div className="navbar-top-icon">s</div>
      </div>
      <div className="navbar-bottom">
        <a href="#" className="active">
          NEW ARRIVALS
        </a>
        <a href="#">DESIGNERS</a>
        <a href="#">CLOTHING</a>
        <a href="#">SHOES</a>
        <a href="#">ACCESSORIES</a>
        <a href="#">COLLABORATIONS</a>
        <a href="#">SALE</a>
      </div>
    </div>
  );
}
