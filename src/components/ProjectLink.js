import React, { useEffect, useState } from 'react'

export default function ProjectLink({ pictureURL, link, description }) {
    const [background, setBackground] = useState("bg-dark");
    function redirect(){
        window.open(link, '_blank').focus();
    }

    return (
        <div className={'d-flex border border-success text-white '+background} href={link} style={{ maxHeight: "40%", cursor:"pointer" }} 
        onClick={redirect}
        onMouseOver={()=>{setBackground("bg-primary text-decoration-underline fst-italic");}}
        onMouseLeave={()=>{setBackground("bg-dark");}}
        >
            <div className='' style={{ minWidth: "100px", backgroundColor: "grey"}}>
                <img src={pictureURL} style={{ width: "100px", height:"100%" }} />
            </div>
            <div className="d-flex justify-content-center text-center w-100 align-items-center" style={{ fontSize: "12px" }}>
                {description}
            </div>
        </div>
    )
}
