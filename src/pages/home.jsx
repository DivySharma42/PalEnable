import AboutOne from '@/components/sections/about/aboutOne'
import BlogOne from '@/components/sections/blogs/blogOne'
// import Brand from '@/components/sections/brands/brand'
import Features from '@/components/sections/features/features'
import HeroOne from '@/components/sections/heros/heroOne'
import TeamSlider from '@/components/sections/team/teamSlider'
import TestimonialOne from '@/components/sections/testimonial/testimonialOne'
import React from 'react'

const Home = () => {
    return (
        <>
            <HeroOne />
            <Features />
            <AboutOne />
            {/* <Brand className={"pb-100"}/> */}
            <TeamSlider />         
            <TestimonialOne />      
            {/* <BlogOne/> */}
        </>
    )
}

export default Home