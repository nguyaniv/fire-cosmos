import React from 'react'

export default function ContactUs() {
  return (
    <section className="contact-us">
      <div className="container">

        <div className="contact-form">
          <h1>Contact Us</h1>
          <div className="name-subject-email">
            <input required placeholder="name" type="text" />
            <input required placeholder="subject" type="text" />
            <  input required placeholder="email" type="email" />
          </div>
          <textarea placeholder="tell us what you think.."></textarea>

          <button>Submit</button>
        </div>
      </div>

    </section>
  )
}
