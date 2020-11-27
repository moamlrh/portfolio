import React from 'react'
import './ContactComp.css'

function ContactComp() {
    return (
        <div className="contact"  id="contact">
        <h2>Contact Me</h2>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your name..." />
            <input type="email" placeholder="Your email..." />
            <input type="text" className="subject" placeholder="Subject..." />
            <textarea
              placeholder="Your message..."
              name="message"
            ></textarea>
          </form>
        </div>
      </div>
   
    )
}

export default ContactComp
