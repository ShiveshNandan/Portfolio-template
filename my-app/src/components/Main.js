import React from 'react'
import "../CSS/Main.css";

export default function Main() {
    window.addEventListener("scroll", function () {
        const parallax = document.getElementById("parallax");
        let offset = window.pageYOffset;
        // parallax.style.backgroundPositionY = `${offset * 0.5}px`;
        parallax.style.backgroundPositionY = offset * 0.7 + "px";
    });
    window.addEventListener("scroll", function () {
        const parallax2 = document.getElementById("parallax2");
        let offset = window.pageYOffset;
        parallax2.style.backgroundPositionY = offset * -0.2 + "px";
    });

    // Parallax Effect for DIV 1

    return (
        <>
            <section>
                <div id="parallax" className="parallax-item">
                    <div className="don">
                        <div className='mainName'>Shivesh Nandan</div>
                        <div className="who">Web Developer - Photographer - Engineering student</div>
                    </div>
                </div>
            </section>
        </>
    )
}
