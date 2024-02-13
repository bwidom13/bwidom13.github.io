import React from 'react'
import EducationContainer from './EducationContainer'
import WorkHistory from './WorkHistory'
import Projects from './Projects'
import Competencies from './Competencies'

export default function ResumeContainer() {
    return (
        <div className='w-100 h-100 mt-4'>
            <div className='d-flex flex-column align-items-center h-100'>
                <div className='text-center border-dark border-bottom border-opacity-50 w-75 script' style={{ fontSize: "30px" }}>
                    Resume
                </div>
                <div className='d-flex flex-column mt-2' style={{width:"95%", height:"80%"}}>
                    <div className='d-flex h-50'>
                        <div className='w-50 h-100 border-dark border-bottom border-end border-opacity-50'>
                            <EducationContainer />
                        </div>
                        <div className='w-50 h-100 border-dark border-bottom border-start border-opacity-50'>
                            <WorkHistory />
                        </div>
                    </div>
                    <div className='d-flex h-50'>
                        <div className='w-50 h-100 border-dark border-top border-end border-opacity-50'>
                            <Projects />
                        </div>
                        <div className='w-50 h-100 border-dark border-top border-start border-opacity-50'>
                            <Competencies />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
