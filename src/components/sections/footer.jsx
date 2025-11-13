import React from 'react'
import { Link } from 'react-router-dom'
import FooterTopInfo from './footerTopInfo'

const Footer = () => {
  return (
    <div className="footer-area">
      <FooterTopInfo />
      <div className="footer-widget-info ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="subscribe-area">
                <h2>Get latest from PalEnable Solution</h2>
                <p>Share your email so we can send you guides and industry news.</p>
                <div className="subscribe-wrapper">
                  <div className="subscribe-box">
                    <form data-toggle="validator">
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <input type="text" className="form-control" placeholder="Your email address @" name="EMAIL" required autoComplete="off" />
                        </div>
                        <div className="col-lg-4">
                          <button type="submit" className="btn">Subscribe</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-4">
              <div className="footer-widget">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/">About Us</Link></li>
                  {/* <li><Link to="/">Gallery</Link></li> */}
                  <li><Link to="/">Portfolio</Link></li>
                  <li><Link to="/">Developers</Link></li>
                  <li><Link to="/">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-4">
              <div className="footer-widget">
                <h4>Resource</h4>
                <ul>
                  <li><Link to="/blog">Blogs</Link></li>
                  <li><Link to="/">Term of services</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-4">
              <div className="footer-widget">
                <h4>Office</h4>
                <span>Jaipur, India</span>
                <a className="ft-mail" href="mailto:contactus@palenable.com">contactus@palenable.com</a>
                <a className="ft-number" href="tel:+91 92578 89888">+91 92578 89888</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="cpr-left">
                <p>Copyright© 2025 PalEnable Solutions. All rights reserved.</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cpr-right">
                <ul>
                  <li><Link to="#">Term of services</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer