import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './Footer.css'; // Import custom CSS if needed

function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-box">
            <h4>ที่อยู่</h4>
            <p>ตลาดริมคลองเจริญกรุง 103 หรือชุมชนสวนหลวง 1 </p>
            <p>ถนนเจริญกรุง ซอยเจริญกรุง 103 เขตบางคอแหลม กรุงเทพมหานคร 10120 ประเทศไทย</p>
          </div>
          <div className="col-md-4 footer-box">
          <h4>ติดต่อเรา</h4>
            <p>เบอร์โทร: 081-437-4747</p>
            <p>Email: sangnoion@gmail.com</p>
          </div>
          <div className="col-md-4 footer-box">
          <h4>โซเชียลมีเดีย</h4>
            <div className="social-icons">
              <div className="social-icon">
                <a href="https://www.facebook.com/newroad103?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.instagram.com/charoenkrung103_market?igsh=MTZjbmtzYWNqczB0aQ==" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.tiktok.com/@charoenkrung103_market" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.youtube.com/results?search_query=%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87+103" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="social-icon">
                <a href="https://charoenkrung103.glide.page/dl/6471c6" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-cube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
