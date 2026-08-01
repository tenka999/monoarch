import "@/styles/explore-style.css";

export default function ExploreSection() {
  return (
    <div className="explore-section">
      <div className="explore-top">
        <div className="explore-top-left">
          <h1>RUGGED</h1>
          <div className="explore-gradient"></div>
          <div className="explore-img top">
            <img src="/layout/background/product-img.png" />
          </div>
        </div>
        <div className="explore-top-right">
          <div className="explore-title">
            <h3>EXPLORE PRODUCT</h3>
            <h2>READY FOR YOUR NEXT MOVE?</h2>
          </div>
        </div>
      </div>
      <div className="explore-center">
        <h1>RELENTLESS</h1>
        <div className="explore-img center">
          <img src="/layout/background/product-img.png" />
        </div>
      </div>
      <div className="explore-bottom">
        <div className="explore-bottom-left">
          <p>
            Find the exact size, capacity, and thermal strength designed for
            your daily reps, trails, and commutes.
          </p>
          <div className="explore-cta">FIND YOUR TUMBLER</div>
        </div>
        <div className="explore-bottom-right">
          <h1>REFINED</h1>
          <div className="explore-gradient"></div>

          <div className="explore-img bottom">
            <img src="/layout/background/product-img.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
