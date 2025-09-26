import React from 'react';
import './Healthy.css';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Healthy = ({ direction = "left" }) => {
  const images = [
    '/firstbite/pap.jpeg',
    '/firstbite/moimoi.jpeg',
    '/firstbite/EwaAgoyin.jpeg',
    '/firstbite/Haitianspaghetti.jpeg',
    // '/firstbite/indomie.jpeg',
    '/firstbite/NigerianDelicacy.jpeg',
    '/firstbite/rice.jpg',
  ];

  return (
    <div className='healthy-container'>
      <p>Healthy Breakfast Options</p>
      <div className='healthy-text'>
        <p>Just a glimpse of our fresh morning options — explore the full menu when you're ready</p>
      </div>
      <div className='carousel'>
        <div className={`scroll ${direction}`}>
          {images.map((src, i) => (
            <img key={i} src={src} alt="" />
          ))}
          {images.map((src, i) => (
            <img key={i + images.length} src={src} alt="" />
          ))}
        </div>
      </div>
      <div className='healthy-btn'>
         <button>Browse Menu →</button>
      </div>
      
    </div>
  );
};

export default Healthy;
