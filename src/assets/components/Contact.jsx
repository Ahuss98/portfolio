function Contact() {
    return (
        <section id="contact">
            <p className="section_text_1">Get in touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src="images/email-logo.png" alt="email icon" className="icon contact-icon"/>
                    <p><a href="mailto:a.hmedhussain@hotmail.com" target="_blank">a.hmedhussain@hotmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img src="images/linkedIn-Logo.png" alt="LinkedIn icon" className="icon contact-icon"/>
                    <p><a href="https://www.linkedin.com/in/ahmed-hussain-122b33271/" target="_blank">LinkedIn</a></p>
                </div>
                <div className="contact-info-container">
                    <img src="images/phone.png" alt="phone icon" className="icon contact-icon"/>
                    <p><a href="tel:+447786362124" target="_blank">+447786362124</a></p>
                </div>
            </div>
        </section>
    );
}

export default Contact;