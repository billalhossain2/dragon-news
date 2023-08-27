import React from 'react'
import { Button } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
const Marquees = () => {
  return (
    <div style={{background:'#F3F3F3'}} className='d-flex p-3 rounded'>
    <Button style={{background:"#D72050", color:"#fff", border:'none', fontSize:'20px', fontWeight:'500'}}>Latest</Button>
    <Marquee className='font-bold fs-5 fw-medium'>
    Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API. as ...
    </Marquee>
    </div>
  )
}

export default Marquees