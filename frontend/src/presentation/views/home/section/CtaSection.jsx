import "@/styles/cta-style.css";

export default function CtaSection() {
  return (
    <div className="cta-section">
      <div className="cta-container-img">
        <img className="cta-img" src="/layout/background/cta-img.jpg" />
      </div>
      <div className="cta-content">
        <p>News Fashion</p>
        <h3>Step into a world of timeless structure and stark contrast.</h3>
        <div className="cta-button">Shop Now</div>
      </div>
    </div>
  );
}
