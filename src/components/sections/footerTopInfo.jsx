import React, { useRef, useState } from 'react'
import ModalVideo from 'react-modal-video';
import { Link, useLocation } from 'react-router-dom'

const FooterTopInfo = () => {
    const pathName = useLocation().pathname
    const [isOpen, setOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const videoSectionRef = useRef(null);

    const handleMouseMove = (e) => {
        if (videoSectionRef.current) {
            const rect = videoSectionRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const tooltipStyle = {
        display: isHovering ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        background: 'rgb(5 5 30 / 23%)',
        backdropFilter: 'blur(6.5px)',
        color: 'white',
        borderRadius: '60px',
        zIndex: 10,
        pointerEvents: 'none',
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(-50%, -50%)',
        width: "100px",
        height: "100px"
    };

    return (
        <>
            {
                pathName === "/" &&
                <>
                    <div className="footer-top-info">
                        <div className="container-fluid">
                            <div className="row g-0 align-items-center">
                                <div className="col-lg-6">
                                    <div
                                        ref={videoSectionRef}
                                        onMouseMove={handleMouseMove}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        className="footer-image position-relative"
                                    >
                                        <Link onClick={(e) => { setOpen(true), e.preventDefault() }} className="popup-youtube" to="#">
                                            <img src="/img/all-img/image-1.jpg" alt="image" />
                                        </Link>
                                        <span id="tooltip" style={tooltipStyle}>play</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content ft-shape">
                                        <div className="logo">
                                            <h2>Innovate with Palenable</h2>
                                        </div>
                                        <p>Palenable Solution Pvt. Ltd. combines AI, NLP, Salesforce, and more to deliver intelligent, scalable solutions that transform how businesses work and grow</p>
                                        <ul>
                                            <li><Link to="https://www.facebook.com/"><i className="bx bxl-facebook" /></Link></li>
                                            <li><Link to="https://www.instagram.com/palenable/"><i className="bx bxl-instagram" /></Link></li>
                                            <li><Link to="https://www.pinterest.com/"><i className="bx bxl-pinterest" /></Link></li>
                                            <li><Link to="https://www.linkedin.com/company/palenable-solutions/posts/?feedView=all "><i className="bx bxl-linkedin-square" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId="vFINPUJDkS8"
                        onClose={() => setOpen(false)}
                    />
                </>
            }
        </>
    )
}

export default FooterTopInfo