import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'

const Contact = () =>{
    const[formData, setFormData] = useState({
        name:'',
        email:'',
        message:'',
    });
    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert('Thank you for reaching out! I\'ll get back to you soon."')
        setFormData({ name:"", email:"", message:""})
    }
    return (
        <div className="contact-page">
        <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Whether you'd like to collaborate, discuss a project, or just say
          hello, feel free to send me a message! I'd love to connect.
        </p>
        </div>
        <div className="contact-container">
            <form className='contact-form' onSubmit={handleSubmit}>
                <h2>Contact me</h2>
                <label htmlFor='name'>Your Name</label>
                <input 
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required/>
                <label htmlFor='email'>Your email</label>
                <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Your email'
                required/>
                <label htmlFor='message'>Your message</label>
                <textarea
                value={formData.message}
                id='message'
                name='message'
                onChange={handleChange}
                placeholder='Enter your message here...'
                required/>
                <button type='submit' className='send-button'>Send message</button>


            </form>
            <div className='contact-details'>

                <h2>Contact-info</h2>
                <p>
                    <strong>Email:</strong><a href='mailto:tatevik@tadevosyan.net'>tatevik@tadevosyan.net</a>
                </p>
                <p><strong>Phone:</strong>0722828872</p>
                <p><strong>Location:</strong>Stockholm, Sweden</p>
                <h2>Social media</h2>
                <div className='social-icons'>
                    <a href='https://github.com/TatevikTadevosyan86?tab=repositories' target='_blank' rel = 'noreferrer' className="social-link"> 
                    <FontAwesomeIcon icon={faGithub} size="2x" /> </a>
                    <a href='https://www.linkedin.com/in/tatevik-tadevosyan-01b79a158/' target='_blank' rel = 'noreferrer'className="social-link"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                </div>
            </div>

        </div>
        </div>
    )};
export default Contact;