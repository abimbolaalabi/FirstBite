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
                        <div className='first-step'></div>
                        <div className='second-step'></div>
                        <div className='third-step'></div>
                    </div>
                    <div className='steps-image'></div>
                </div>
            </div>

        </div>
    )
}

export default Steps
