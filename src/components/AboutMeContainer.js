import React from 'react'

export default function AboutMeContainer() {
  return (
    <div className='d-flex flex-column align-items-center'>
        <div className='text-center border-dark border-bottom border-opacity-50 w-75 script' style={{fontSize:"30px", color:"black"}}>
            About Me          
        </div>
        <div className='w-100 text-center mt-1 font2'>
            Hi, welcome to my web page. I'm a former teacher looking to make a 
            career change to software developement. Currently pursuing a bachelor's in computer
            science but eager to begin working in an intership or entry level-job.
        </div>
    </div>
  )
}
