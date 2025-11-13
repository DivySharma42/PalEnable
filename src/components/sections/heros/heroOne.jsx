import React from 'react'
import { Link } from 'react-router-dom'

const HeroOne = () => {
  return (
    <div className="hero-section-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content-2">
              <div className="sub-title-2" data-animation="fade-zoom-in" data-delay={0.4}>
                
              </div>
              <h2>
                <span data-animation="fade-up" style={{fontSize:"40px"}}>Empowering Change with Smart Digital Solutions</span>
                <span className="sub-head" data-animation="fade-up"  style={{fontSize:"16px"}}  data-delay={0.2}>At PalEnable Solutions, we believe that technology should make life easier, thus we help organizations to bring a lasting change. Whether you are a nonprofit, or a startup, or an established business, we are here to help you to get the right set of digital tools so you could survive in this fast-moving world.</span>
              </h2>
              <Link to="/contact" className="default-btn btn-btn-let"  data-animation="fade-up" data-delay={0.3}> <span>Let's get in touch</span> <i className="bx bx-chevron-right" /></Link>

              {/* <div className="short-prompt" data-animation="fade-zoom-in">
                <ul>
                  <li><p>Quick Try :</p></li>
                  <li><Link className="hover-bg" to="/portfolio">Creative</Link></li>
                  <li><Link to="/portfolio">Sport</Link></li>
                  <li><Link to="/portfolio">Animation</Link></li>
                  <li><Link to="/portfolio">Fantasy</Link></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HeroOne