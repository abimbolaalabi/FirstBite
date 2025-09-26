import React from 'react'
import "./About.css"
const About = () => {
    return (
        <div className='about-container'>
            <p>Start Your day The Right Way</p>
            <div className='about-text'>
                <p>At firstBite, we believe mornings should be simple, tasty, and stress-free.
                    That's why we bring freshly made breakfasts straight to your doorstep — hot, wholesome
                    and ready when you are.FirstBite takes the hassle out of your mornings so you can focus on what matters most.
                </p>
            </div>
            <div className='about-categories'>
                <div className='first-category'>
                    <div className='first-cat-img'></div>
                   <div className='first_title'>
                     <p>Schedule Orders</p>
                   </div>
                   <div className='first_desc'>
                     <p>You can schedule orders to fit perfectly into your busy routine</p>
                   </div>
                </div>
                <div className='second-category'>
                    <div className='second-cat-img'></div>
                   <div className='second_title'>
                     <p>Schedule Orders</p>
                   </div>
                   <div className='second_desc'>
                     <p>You can schedule orders to fit perfectly into your busy routine</p>
                   </div>
                </div>
                <div className='third-category'>
                    <div className='third-cat-img'></div>
                   <div className='third_title'>
                     <p>Schedule Orders</p>
                   </div>
                   <div className='third_desc'>
                     <p>You can schedule orders to fit perfectly into your busy routine</p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default About
