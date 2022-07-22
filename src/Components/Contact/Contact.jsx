import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>lewisdmurray00@gmail.com</h5>
            <a href='mailto:lewisdmurray00@gmail.com' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaInstagram />
            <h4>Instagram</h4>
            <h5>lewismurrayy</h5>
            <a href='https://www.instagram.com' target="_blank">Follow Me</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+447577380000</h5>
            <a href='https://api.whatsapp.com/send?phone=+447577380000' target="_blank">Send a message</a>
          </article>
        </div>

        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact