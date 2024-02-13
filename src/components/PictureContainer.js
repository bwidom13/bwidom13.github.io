import React from 'react'

export default function PictureContainer() {
    // let imgURL = "https://blenderartists.org/uploads/default/optimized/4X/f/8/a/f8a0fcd6252b2a66c69168ea241408327aa5a48b_2_367x500.jpg"
    let imgURL = "software-icons/my-photo2.png"
    return (
        <div className='d-flex justify-content-center h-100 w-25'>
            <div className='d-flex flex-column w-100 justify-content-center align-items-center m-2' >                
                <img className="img-fluid " src={imgURL} style={{width:"12rem", height:"14rem", borderRadius:"20px"}} alt="Profile Picture"/>
                <div className='text-center mt-3 script' style={{fontSize:"30px"}}>Brian Widom</div>
                <div className='text-center mt-1 fst-italic' style={{fontSize:"14px"}}>bwidom13@gmail.com</div>
                <div className='text-center mt-1 fst-italic' style={{fontSize:"14px"}}>github: <a href="https://github.com/bwidom13">https://github.com/bwidom13</a></div>
            </div>
            <div className='ms-auto'>

            </div>
            <div class="vr align-self-center" style={{height:"90%"}}></div>
        </div>
    )
}
