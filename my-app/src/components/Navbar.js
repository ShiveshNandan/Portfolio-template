import React from 'react';
import "../CSS/Navbar.css";

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="name slide-in-blurred-top"><p className='slide-in-blurred-to'>SHIVESH NANDAN</p></div>
                <div className="options slide-in-blurred-top">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                        <li>Photography</li>
                    </ul>
                </div>
            </div>
            <div className="socialMedia">
                <div className="icons">
                    <div className="ico1">
                        <img className='slide-in-blurred-right' src="https://img.icons8.com/fluency-systems-regular/48/null/instagram-new--v1.png" alt='' />
                    </div>
                    <div className="ico2">
                        <img className='slide-in-blurred-right' src="https://img.icons8.com/glyph-neue/64/null/gmail.png" alt='' />
                    </div>
                    <div className="ico3">
                        <img className='slide-in-blurred-right' src="https://img.icons8.com/fluency/48/null/github.png" alt='' />
                    </div>
                    <div className="ico4">
                        <img className='slide-in-blurred-right' src="https://img.icons8.com/ios-filled/50/null/linkedin-2--v1.png" alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}
