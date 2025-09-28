import React from 'react'
import "./Steps.css"
const Steps = () => {
    return (
        <div className='steps-container'>
            <div className='steps-contained'>
                <div className='steps-text'>
                    <h3>How it Works</h3>
                </div>
                <div className='steps-subtext'>
                    <p>Simple stets to get your breakfast</p>
                </div>
                <div className='steps-wrapper'>
                    <div className='steps-wrapped'>
                        <div className='first-step'>
                            <h4>1.Choose Your Meal</h4>
                            <p>Browse our menu and select your favorite breakfast item.</p>
                        </div>
                        <div className='second-step'>
                            <h4>2.Place Your Order</h4>
                            <p>Add items to cart and proceed to checkout.</p>
                        </div>
                        <div className='third-step'>
                            <h4>3.Enjoy!</h4>
                            <p>Sit back, relax,and your breakfast will be delivered to you.</p>
                        </div>
                    </div>
                    <div className='steps-image'>
                        <img src="/firstbite/steps.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Steps
