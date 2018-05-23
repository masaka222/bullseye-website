import React from 'react';
import ContactBox from '../ContactBox/ContactBox';

const Contact = (props) => {
        return (
            <div>
                <section className="section-contact">
                    <div className = "row">
                        <ContactBox contactHeading = {props.contactHeading}/>
                    </div>
                </section>
            </div>
        );
}

export default Contact;