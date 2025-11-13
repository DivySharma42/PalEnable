import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({name, role, imgSrc, description, social}) => {
    return (
        <div className="single-team">
            <img src={imgSrc} alt="image" />
            <div className="team-text">
                <div className="team-title">
                    <h4>{name}</h4>
                    <span>{role}</span>
                </div>
                <p>{description}</p>
                <div className="team-social">
                    <Link to={social.linkedin}><i className="bx bxl-linkedin" /></Link>
                    <Link to={social.instagram}><i className="bx bxl-instagram" /></Link>
                    {/* <Link to={social.github}><i className="bx bxl-github" /></Link> */}
                </div>
            </div>
        </div>
    )
}

export default TeamCard