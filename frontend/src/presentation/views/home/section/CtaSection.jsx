import "@/styles/cta-style.css";

export default function CtaSection() {
  return (
    <div className="cta-section">
      <div className="cta-container">
        <div className="cta-top">
          <div className="cta-product">
            <img src="/layout/background/product-img.png" alt="cta-product" />
            <div className="cta-product-text">
              <p>SEE THE PRODUCT DETAIL</p>
              <a href="#">
                See All{" "}
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="cta-brand">RADIAN</div>
      </div>
    </div>
  );
}
