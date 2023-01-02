import React from 'react'
import image_flip from '../Image/computer.png';
import './BodyLeft.css';
const BodyLeft = () => {
  return (
    <div className='corner'>
        <img  src={image_flip} alt='no'></img>
    </div>
  )
}

export default BodyLeft