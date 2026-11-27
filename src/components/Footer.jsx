// Footer Component
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>Perfume Store</h2>
          <p>
            Discover your signature fragrance.
            Experience luxury with every drop.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>Email: support@perfumestore.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Tamil Nadu, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Perfume Store. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer