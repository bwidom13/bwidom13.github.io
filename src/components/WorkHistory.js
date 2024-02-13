import React from 'react';

export default function WorkHistory() {
    return (
        <div>
            <div className='d-flex justify-content-start w-100 h-100 ms-2'>
                <div className='d-flex flex-column'>
                    <div className='text-decoration-underline text-center script h4'>
                        Recent Work History
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex w-50'>                    
                            <div className='d-flex flex-column ms-1 text-center' style={{fontSize:"12px"}}>
                                <div className='text-decoration-underline'>
                                    Mathnasium
                                </div>
                                <div>
                                    November 2022 - July 2023
                                </div>
                                <div>
                                    Role: Math tutor for children of all ages
                                </div>
                            </div>                        
                        </div>
                        <div className='vr'></div>
                        <div className='d-flex w-50'>
                            <div className='d-flex flex-column ms-1 text-center' style={{fontSize:"12px"}}>
                                <div className='text-decoration-underline'>
                                    Success Academy Charter School
                                </div>
                                <div>
                                    July 2018 - July 2022
                                </div>
                                <div>
                                    Role: Lead math teacher. Taught 5th, 7th and 8th-grade.
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
