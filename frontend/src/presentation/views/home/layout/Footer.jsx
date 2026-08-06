import "@/styles/footer-style.css";

export default function Footer() {
  return (
    <footer className="layout-footer">
      <div className="footer-top">MONOARCH</div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <h3>10% OFF FOR NEW CUSTOMERS</h3>
          <p>Subscribe to our newsletter</p>
          <div className="sub-container">
            <input
              type="text"
              name="subs"
              id=""
              className="input-sub"
              placeholder="Enter your email"
            />
            <div className="button-sub">Subscribe</div>
          </div>
        </div>
        <div className="footer-bottom-right">
          <div className="footer-bottom-container">
            <div className="footer-links">
              <h3>INFORMATION</h3>
              <a href="#">SIZE CHART</a>
              <a href="#">ACCOUNT</a>
              <a href="#">WISHLIST</a>
              <a href="#">FAQ</a>
            </div>
            <div className="footer-links red">
              <h3>CUSTOMER SERVICE</h3>
              <a href="#">SHIPPING</a>
              <a href="#">RETURNS</a>
              <a href="#">TERMS & CONDITIONS</a>
              <a href="#">PRIVACY POLICY</a>
              <a href="#">CONTACT US</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
