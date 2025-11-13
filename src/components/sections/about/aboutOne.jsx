import React from 'react'
import { Link } from 'react-router-dom'

const AboutOne = ({ className, inVideoBg }) => {
    return (
        <div className={`about-section pb-100 ${className}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        {
                            inVideoBg ?
                                <div className="about-wrap" data-animation="fade-zoom-in" data-aos-offset="100">
                                    <div className="about-video-wrap">
                                        <video className="about-video" src="/img/all-img/video-3.mp4" playsInline autoPlay muted loop>
                                        </video>
                                    </div>
                                </div>
                                :
                                <div className="img-wrapper" data-animation="fade-zoom-in" data-delay={0.1}>
                                    <div className="img-box">
                                        <img className="image-box-item" src="/img/all-img/about-1.png" alt="image" />
                                        <img className="image-box-item" src="/img/all-img/about-3.png" alt="image" />
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="about-content" data-animation="fade-up" data-delay={0.2}>
                            <div className="sub-title-2">
                                <p>What PalEnable Solution Do</p>
                            </div>
                            <h2>We are a full-service creative agency</h2>
                            <p> We’re boldly individual, always original and refreshingly easy-going. Our vision, passion and ideas are matched with focus, expertise and flair.</p>
                            <ul>
                                <li><i className="bx bx-check" />Blending vision with technology, we explore advancements in language understanding and intelligent systems.</li>
                                <li><i className="bx bx-check" />Merging innovation with technology, we delve into natural language processing and machine intelligence.</li>
                                <li><i className="bx bx-check" />Fusing foresight with technology, we focus on natural language processing and smart computational solutions </li>
                            </ul>
                            <Link className="default-btn" to="/about"> <span>About Us</span> <i className="bx bx-chevron-right" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutOne