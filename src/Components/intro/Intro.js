import React from 'react'
import './Intro.css'
import jairam from '../../assets/jairam.jpg'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Jayarami <br /> Reddy Meeniga</span><br /> Website Designer</span>
                <p className='introPara'>I am a skilled web designer with experience in creating <br /> visually appealing and user-friendly websites.</p>
                <Link><button className='btn'><img className='btnImg' src={btnImg} alt='Hire Me' />Hire Me</button></Link>
            </div>
            <img src={jairam} alt='Profile' className='bg img-thumbnail rounded' />
        </section>
    )
}

export default Intro