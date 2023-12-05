import React, { useRef } from 'react'
import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'
import './Contact.css'
import facebook_icon from '../../assets/facebook-icon.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDes'>I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes</p>
                <div className='clientsImgs'>
                    <img className='clientImg' src={walmart} alt='Client' />
                    <img className='clientImg' src={adobe} alt='Client' />
                    <img className='clientImg' src={microsoft} alt='Client' />
                    <img className='clientImg' src={facebook} alt='Client' />
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDes'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Enter Your Name' />
                    <input type='email' className='email' placeholder='Enter your email' />
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value="send" className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={facebook_icon} alt='facebook' className='link' />
                        <img src={twitter} alt='twitter' className='link' />
                        <img src={youtube} alt='youtube' className='link' />
                        <img src={instagram} alt='instagram' className='link' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact