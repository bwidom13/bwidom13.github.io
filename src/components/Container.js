import React from 'react'
import PictureContainer from './PictureContainer'
import AboutMeContainer from './AboutMeContainer'
import ResumeContainer from './ResumeContainer'

export default function Container() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 h-100' style={{color:"#000000"}}>        
        <div className='d-flex w-75' style={{borderRadius:"8%", height:"85%"}} id="container">
            <PictureContainer />
            <div className='d-flex flex-column w-75'>
                <AboutMeContainer />
                <ResumeContainer />
            </div>
        </div>
    </div>
  )
}
