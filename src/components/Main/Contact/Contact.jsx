import React, { Component } from "react";

class Contact extends Component {
  render() {
    return <section id="contact_form" name='form'>
      <h1>Contact</h1>
      <p>Send me a message</p>
    
    <form action="https://formsubmit.co/aeiranzom@gmail.com" method="POST" >
      <div id="name_email">
      <input className='contact_form_input' type="text"  placeholder='Name' name="name" required/>
      <input className='contact_form_input' type="email" placeholder='Email' name="email" required/>
      </div>

      <textarea className='contact_form_input' name="message" id="" cols="30" rows="10" placeholder='Message' required></textarea>
      <button type="submit">Send</button>
    </form>
    </section>
  }
}

export default Contact;