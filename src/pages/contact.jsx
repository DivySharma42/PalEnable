import ContactAddress from '@/components/sections/contactAddress'
import ContactForm from '@/components/sections/contactForm'
import PageHeader from '@/components/sections/pageHeader'
import React from 'react'

const Contact = () => {
    return (
        <>
            <PageHeader
                className={"sbg-9"}
                currentPage={"Contact Us"}
                title={"Contact Us"}
            />
            <ContactAddress />
            <ContactForm />
            {/* <div id="map" className="map-pd container-fluid">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5862.319327593827!2d75.76539689934026!3d26.871765899873637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5004bfdced9%3A0xf58a096ac5918641!2sShanti%20Nagar!5e0!3m2!1sen!2sin!4v1758715920654!5m2!1sen!2sin" />
            </div> */}
        </>
    )
}

export default Contact