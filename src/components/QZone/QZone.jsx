import React from 'react'
import swimmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'

const QZone = () => {
  return (
    <div>
        <h2 className='font-bold'>Q-Zone</h2>
        <div>
            <img src={swimmingImg} alt="swimming" />
            <img src={classImg} alt="class" />
            <img src={playImg} alt="playground" />
        </div>
    </div>
  )
}

export default QZone