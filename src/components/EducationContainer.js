import React from 'react'

export default function EducationContainer() {
  return (
    <div className='d-flex justify-content-center ms-2 w-100 h-100'>
        <div className='d-flex flex-column'>
            <div className='text-decoration-underline text-center script h4'>
                Education
            </div>
            <div className='d-flex p-1'>
                <div style={{}}>
                    <img src="software-icons/City_College_of_New_York_seal.svg.png" style={{height:"50px", width:"55px"}} alt="CCNY"/>
                </div>
                <div className='d-flex flex-column ms-1' style={{fontSize:"12px"}}>
                    <div>
                        The City College of New York
                    </div>
                    <div>
                        2012-2017
                    </div>
                    <div>
                        Bachelor's in Physics and Math
                    </div>
                </div>
            </div>
            
            <div className='d-flex p-1'>
                <div>
                    <img src="software-icons/bclogo.gif" style={{height:"50px", width:"55px"}} alt="CCNY"/>
                </div>
                <div className='d-flex flex-column ms-1' style={{fontSize:"12px"}}>
                    <div>
                        Brooklyn College
                    </div>
                    <div>
                        2023-Present
                    </div>
                    <div>
                        Pursuing Bachelor's in Computer Science
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
