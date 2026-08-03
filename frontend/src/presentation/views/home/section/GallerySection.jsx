import "@/styles/gallery-style.css";

export default function GallerySection() {
  return (
    <div className="gallery-section">
      <div className="column">
        <div className="box arrivals">
          <p>NEW ARRIVALS</p>
          <div className="gallery-button">Shop Now</div>
        </div>
        <div className="box sellers">
          <p>BEST SELLERS</p>
          <div className="gallery-button">Shop Now</div>
        </div>
      </div>
      <div className="column">
        <div className="box collaborations">
          <p>COLLABORATIONS</p>
          <div className="gallery-button">Shop Now</div>
        </div>
        <div className="box collections">
          <p>COLLECTIONS</p>
          <div className="gallery-button">Shop Now</div>
        </div>
      </div>
    </div>
  );
}
