import React from 'react'
import './Skill.css'
import UI_Design from '../../assets/ui-design.png'
import Web_Design from '../../assets/website-design.png'
import App_Design from '../../assets/app-design.png'


const Skill = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDes'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
                I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, React js and React Native.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UI_Design} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Web_Design} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={App_Design} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>App Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill