import React from 'react'
import qzoneImg1 from "../assets/images/qZone1.png";
import qzoneImg2 from "../assets/images/qZone2.png";
import qzoneImg3 from "../assets/images/qZone3.png";
const QZones = () => {
  return (
    <div className='mt-5'>
        <h5>Q-Zone</h5>
        <div>
            <img src={qzoneImg1} alt="" />
            <img src={qzoneImg2} alt="" />
            <img src={qzoneImg3} alt="" />
        </div>
    </div>
  )
}

export default QZones