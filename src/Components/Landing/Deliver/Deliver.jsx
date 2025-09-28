import React from 'react'
import "./Deliver.css"

const Deliver = () => {
    return (
        <div className='deliver-container'>
            <p>Where We Deliver</p>
            <div style={{ display: "flex",  justifyContent: "center", gap: "30px", marginTop: "50px"}}>
                <div className='deliver-img'>
                  
                </div>
                <div className='delivery-location'>
                    <div className='delivery-axis'>
                        <div className='axis'>
                            <p>Ikeja Axis</p>
                        </div>
                        <ul>
                            <li>Ikeja GRA</li>
                            <li>Maryland</li>
                            <li>Opebi</li>
                            <li>Allen Avenue</li>
                            <li>Ogba</li>
                        </ul>
                    </div>
                    <div className='delivery-axis'>
                        <div className='axis'>
                            <p>Yaba/ Surulere Axis</p>
                        </div>
                        <ul>
                            <li>Yaba</li>
                            <li>Surulere</li>
                            <li>Ojuelegba</li>
                            <li>Akoka</li>
                            <li>Tejuosho</li>
                        </ul>
                    </div>
                    <div className='delivery-axis'>
                        <div className='axis'>
                            <p>Mainland Central</p>
                        </div>
                        <ul>
                            <li>Mushin</li>
                            <li>Ilupeju</li>
                            <li>Anthony Village</li>
                            <li>Palmgrove</li>
                        </ul>
                    </div>
                    <div className='delivery-axis' >
                        <div className='axis' >
                            <p>Other Key Spots</p>
                        </div>
                        <ul>
                            <li>Gbagada</li>
                            <li>Shomolu</li>
                            <li>Bariga</li>
                            <li>Oshodi</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Deliver
