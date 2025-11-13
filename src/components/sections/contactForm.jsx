// import React, { useState } from 'react';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });
//     const [status, setStatus] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus('Sending...');
//         try {
//             const response = await fetch('http://localhost:3001/api/contact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 setStatus('Message sent successfully!');
//                 setFormData({ name: '', email: '', subject: '', message: '' }); 
//             } else {
//                 setStatus(`Error: ${result.message || 'Something went wrong'}`);
//             }
//         } catch (error) {
//             setStatus('Error: Could not connect to the server.');
//         }
//     };

//     return (
//         <div className="contact-section pb-70">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12 col-md-12">
//                         <div className="contact-form">
//                             <form id="contact-form" onSubmit={handleSubmit}>
//                                 <div className="row">
//                                     <div className="col-lg-12 col-md-12">
//                                         <div className="form-group">
//                                             <input type="text" name="name" className="form-control" id="name" required placeholder="Your name" value={formData.name} onChange={handleChange} />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12 col-md-12">
//                                         <div className="form-group">
//                                             <input type="email" name="email" className="form-control" id="email" required placeholder="Your email address" value={formData.email} onChange={handleChange} />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12 col-md-12">
//                                         <div className="form-group">
//                                             <input type="text" name="subject" className="form-control" id="subject" required placeholder="Your subjects" value={formData.subject} onChange={handleChange} />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12 col-md-12">
//                                         <div className="form-group">
//                                             <textarea name="message" id="message" className="form-control" cols={30} rows={6} required placeholder="Write your message..." value={formData.message} onChange={handleChange} />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-12 col-md-12">
//                                         <button type="submit" name="submit" id="submitButton" className="default-btn"><span>Send Message</span><i className="bx bx-paper-plane" /></button>
//                                         {status && <p className="h3 text-center mt-3">{status}</p>}
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                     {/* <div className="col-lg-6 col-md-6">
//                         <div className="contact-wrap">
//                             <div className="contact-video-wrap">
//                                 <video className="contact-video" src="/img/all-img/video-4.mp4" playsInline autoPlay muted loop>
//                                 </video>
//                             </div>
//                         </div>
//                     </div> */}
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default ContactForm

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submit via Formspree
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('https://formspree.io/f/mrbyovgk', { // 👈 replace with your actual Formspree endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('✅ Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('⚠️ Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('❌ Something went wrong. Please check your connection.');
        }
    };

    return (
        <div className="contact-section pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="contact-form">
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                required
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                id="email"
                                                required
                                                placeholder="Your email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="subject"
                                                className="form-control"
                                                id="subject"
                                                required
                                                placeholder="Your subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                id="message"
                                                className="form-control"
                                                cols={30}
                                                rows={6}
                                                required
                                                placeholder="Write your message..."
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 text-center">
                                        <button
                                            type="submit"
                                            name="submit"
                                            id="submitButton"
                                            className="default-btn"
                                        >
                                            <span>Send Message</span>
                                            <i className="bx bx-paper-plane" />
                                        </button>
                                        {status && <p className="h5 text-center mt-3">{status}</p>}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
